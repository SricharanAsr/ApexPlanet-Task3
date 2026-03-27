# Deep-Dive Analysis: Customer Retention & Cohort Study

## 1. Project Objective and Scope
To analyze customer retention patterns and business health through core KPIs and a longitudinal cohort study of transition behavior.

## 2. Core Business KPIs: Definitions & Insights

1.  **Conversion Rate (CR):** `66.67%`
    -   *Formula:* `(Unique Customers / Total Visitors) * 100`
    -   *Insight:* Measures how effectively the platform turns interest into transactions. A 66%+ rate indicates high intent or a highly optimized funnel.

2.  **Average Order Value (AOV):** `$259.08`
    -   *Formula:* `Total Revenue / Total Orders`
    -   *Insight:* Critical for understanding customer spending power and pricing strategy.

3.  **Customer Churn Rate:** `31.06%`
    -   *Formula:* `(Customers lost / Total Customers) * 100`
    -   *Insight:* Indicates the percentage of customers who stopped purchasing in the final 60 days of the analysis period.

4.  **Total Revenue:** `$777,242.12`
    -   *Insight:* The primary top-line metric indicating overall business scale.

---

## 3. Deep-Dive: Longitudinal Cohort Analysis
The cohort analysis groups customers by their first purchase month (2025-01 through 2025-11) and tracks their return rate over subsequent months (Month 1 to Month 12).

### Key Findings:
- **High Day-1 Retention:** Most cohorts show substantial repeat activity in the second month (e.g., 2025-01 cohort had 34.78% return in Month 2).
- **Stability:** Retention rates tend to stabilize between 30% and 50% for most cohorts after the third month, signifying a loyal core customer base.
- **Top Performer:** The 2025-01 cohort showed a remarkable peak of 56.52% retention in Month 5.
- **Trend:** There is a slight upward trend in Month 2 retention for later cohorts (e.g., 2025-07 cohort at 63.49% in Month 2), suggesting improved onboarding or product-market fit.

## 4. Methodology
The data was synthesized using a Monte Carlo approach to simulate realistic e-commerce behavior, ensuring variance in order frequency and basket size. Retention is calculated using the triangle-heatmap approach common in SaaS analytics.

## 5. Dashboard Visualization
## 6. Future Improvements
- **Real-Time Integration:** Transition from static JSON to a live API (e.g., FastAPI + PostgreSQL).
- **Advanced Predictive Analytics:** Implement LTV (Lifetime Value) forecasting using the existing cohort data.
- **Enhanced Visualizations:** Add trend lines for KPI metrics over time and categorical breakdown charts (e.g., Sales by Region).

## 7. Conclusion
The current analysis reveals a robust business model with high customer intent (CR) and a healthy loyal base (Stable Retention). However, the ~31% churn rate in the final quarter suggests a need for targeted re-engagement campaigns for older cohorts. Integrating real-time data will be the next step in evolving this into a full-scale BI platform.
