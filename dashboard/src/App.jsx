import React, { useMemo } from 'react';
import './index.css';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  UserMinus, 
  BarChart3 
} from 'lucide-react';
import { motion } from 'framer-motion';
import analysisData from '../../analysis_results.json';

const KPICard = ({ title, value, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="glass-card kpi-card"
  >
    <div className="flex justify-between items-start">
      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
        <Icon size={24} />
      </div>
    </div>
    <div className="kpi-value">{value}</div>
    <div className="kpi-label">{title}</div>
  </motion.div>
);

const CohortHeatmap = ({ retentionData }) => {
  const getColor = (value) => {
    if (!value) return 'transparent';
    if (value === 100) return 'rgba(99, 102, 241, 0.9)';
    const opacity = (value / 100) * 0.8 + 0.1;
    return `rgba(99, 102, 241, ${opacity})`;
  };

  const maxIndex = Math.max(...retentionData.flatMap(r => Object.keys(r.data).map(Number)));
  const indices = Array.from({ length: maxIndex }, (_, i) => i + 1);

  return (
    <div className="glass-card animate-in" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <BarChart3 className="text-secondary" />
        User Retention Cohort Analysis (%)
      </h2>
      <div className="heatmap-container">
        <table className="cohort-table">
          <thead>
            <tr>
              <th className="cohort-month-col">Cohort Month</th>
              {indices.map(i => (
                <th key={i}>Month {i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {retentionData.map((row, idx) => (
              <tr key={row.month}>
                <td className="cohort-month-col font-mono text-xs">{row.month}</td>
                {indices.map(i => {
                  const val = row.data[i];
                  return (
                    <td 
                      key={i} 
                      style={{ 
                        backgroundColor: getColor(val),
                        color: val > 60 ? '#fff' : 'var(--text-main)',
                        opacity: val ? 1 : 0.2
                      }}
                    >
                      {val ? `${val}%` : '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function App() {
  const { kpis, retention } = analysisData;

  const formattedKPIs = [
    { title: 'Total Revenue', value: `$${kpis.total_revenue.toLocaleString()}`, icon: DollarSign },
    { title: 'Total Orders', value: kpis.total_orders.toLocaleString(), icon: ShoppingBag },
    { title: 'Unique Customers', value: kpis.unique_customers.toLocaleString(), icon: Users },
    { title: 'Avg Order Value', value: `$${kpis.aov}`, icon: TrendingUp },
    { title: 'Conversion Rate', value: `${kpis.conversion_rate}%`, icon: BarChart3 },
    { title: 'Churn Rate', value: `${kpis.churn_rate}%`, icon: UserMinus },
  ];

  return (
    <div className="App">
      <header className="mb-12 animate-in">
        <h1>Deep-Dive Business Insights</h1>
        <p className="subtitle">Real-time analysis of customer behavior and KPI performance</p>
      </header>

      <div className="dashboard-grid">
        {formattedKPIs.map((kpi, idx) => (
          <KPICard 
            key={kpi.title} 
            {...kpi} 
            delay={idx * 0.1} 
          />
        ))}
      </div>

      <div className="main-content">
        <CohortHeatmap retentionData={retention} />
      </div>

      <footer className="mt-12 text-center text-sm text-muted-foreground pb-8">
        &copy; 2026 Interactive Analysis Dashboard | Powered by Apex Software Solutions
      </footer>
    </div>
  );
}

export default App;
