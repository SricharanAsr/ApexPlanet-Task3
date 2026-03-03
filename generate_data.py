import pandas as pd
import numpy as np
import json
from datetime import datetime, timedelta

"""
Business Intelligence Data Engine
Generates synthetic e-commerce data and calculates key business metrics.
"""

# Set seed for reproducibility
np.random.seed(42)

# Configuration
NUM_CUSTOMERS = 500
NUM_ORDERS = 3000
START_DATE = datetime(2025, 1, 1)
END_DATE = datetime(2025, 12, 31)
CHURN_THRESHOLD_DAYS = 60
ACQUISITION_WINDOW_DAYS = 180

# Generate synthetic Customer base
customers = [f"C{i:04d}" for i in range(NUM_CUSTOMERS)]
# Assign random join dates within the first 180 days of the year
customer_join_dates = {c: START_DATE + timedelta(days=np.random.randint(0, ACQUISITION_WINDOW_DAYS)) for c in customers}

# Generate transactional Order data
order_data = []
for _ in range(NUM_ORDERS):
    customer = np.random.choice(customers)
    join_date = customer_join_dates[customer]
    
    # Orders can only happen after join date
    days_since_join = np.random.randint(0, (END_DATE - join_date).days + 1)
    order_date = join_date + timedelta(days=days_since_join)
    
    amount = np.random.uniform(20, 500)
    order_data.append({
        "order_id": f"O{len(order_data):05d}",
        "customer_id": customer,
        "order_date": order_date,
        "amount": round(amount, 2)
    })

df = pd.DataFrame(order_data)

# --- KPI Calculations ---
# Aggregate metrics across the entire dataset
total_revenue = df['amount'].sum()
unique_customers = df['customer_id'].nunique()
total_orders = len(df)

aov = total_revenue / total_orders
# Mocking visitors for conversion rate
total_visitors = unique_customers * 1.5 
conversion_rate = (unique_customers / total_visitors) * 100

# Churn Rate Mock (simplified)
# Let's say churned are those who haven't ordered in the last threshold of the year
last_date = df['order_date'].max()
recent_customers = df[df['order_date'] >= (last_date - timedelta(days=CHURN_THRESHOLD_DAYS))]['customer_id'].unique()
churn_rate = ((unique_customers - len(recent_customers)) / unique_customers) * 100

kpis = {
    "total_revenue": round(total_revenue, 2),
    "total_orders": total_orders,
    "unique_customers": unique_customers,
    "aov": round(aov, 2),
    "conversion_rate": round(conversion_rate, 2),
    "churn_rate": round(churn_rate, 2)
}

# --- Cohort Analysis ---
# Grouping customers by their acquisition month to track longitudinal behavior
def get_month(x: datetime) -> datetime: 
    return datetime(x.year, x.month, 1)
df['order_month'] = df['order_date'].apply(get_month)
grouping = df.groupby('customer_id')['order_month']
df['cohort_month'] = grouping.transform('min')

def get_date_int(df: pd.DataFrame, column: str):
    year = df[column].dt.year
    month = df[column].dt.month
    return year, month

order_year, order_month = get_date_int(df, 'order_month')
cohort_year, cohort_month = get_date_int(df, 'cohort_month')

years_diff = order_year - cohort_year
months_diff = order_month - cohort_month

df['cohort_index'] = years_diff * 12 + months_diff + 1

cohort_data = df.groupby(['cohort_month', 'cohort_index'])['customer_id'].apply(pd.Series.nunique).reset_index()
cohort_counts = cohort_data.pivot(index='cohort_month', columns='cohort_index', values='customer_id')

cohort_sizes = cohort_counts.iloc[:, 0]
retention = cohort_counts.divide(cohort_sizes, axis=0)
retention = (retention * 100).round(2)

# Prepare for JSON export
retention_json = []
for month in retention.index:
    row = retention.loc[month].dropna().to_dict()
    # Convert index (month) to string for JSON
    retention_json.append({
        "month": month.strftime('%Y-%m'),
        "data": {str(k): v for k, v in row.items()}
    })

# Convert raw data summary dates to strings
raw_summary = df.head(10).copy()
for col in raw_summary.select_dtypes(include=['datetime64']).columns:
    raw_summary[col] = raw_summary[col].dt.strftime('%Y-%m-%d')

# Save results
output = {
    "kpis": kpis,
    "retention": retention_json,
    "raw_data_summary": raw_summary.to_dict(orient='records')
}

with open('analysis_results.json', 'w') as f:
    json.dump(output, f, indent=4)

print("Data generation and analysis complete. Results saved to analysis_results.json")
