# Deep-Dive Analysis & Interactive Dashboarding

This repository hosts a high-performance business intelligence solution composed of a robust Python-based data engine and a modern React dashboard. It is designed to provide clear, actionable insights through longitudinal cohort analysis and real-time KPI tracking.

## Project Components

### 1. Data Intelligence (`generate_data.py`)
- Generates a synthetic e-commerce dataset of 500 customers and 3,000 orders.
- Calculates business-critical KPIs (AOV, Churn, Conversion Rate).
- Performs a **Cohort Analysis** to track customer retention over 12 months.
- Exports processed results to `analysis_results.json`.

### 2. Interactive Dashboard (`/dashboard`)
- **Premium Design:** Glassmorphism UI with smooth gradients and micro-animations.
- **KPI Overview:** Real-time visibility into 6 core business metrics.
- **Cohort Heatmap:** Interactive visualization of customer retention patterns.
- **Responsive:** Optimized for diverse screen sizes.

## Key Technical Features

- **Glassmorphism UI:** Modern aesthetic using advanced CSS backdrop filters and gradients.
- **Micro-Animations:** Fluid state transitions powered by `framer-motion`.
- **Type Safety (Logic):** Python backend utilizes type hinting for robust data processing.
- **Dynamic Heatmapping:** React-based cohort visualization that handles variable data indices.
- **Scalable Architecture:** Separate data and presentation layers for easy updates.

## How to Run

### Prerequisite: Python
1. Ensure you have Python installed.
2. Run the analysis script to generate fresh data:
   ```bash
   python generate_data.py
   ```

### Prerequisite: Node.js (Vite)
1. Navigate to the dashboard directory:
   ```bash
   cd dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the interactive dashboard:
   ```bash
   npm run dev
   ```

## Findings Summary
Check the [Deep_Dive_Report.md](./Deep_Dive_Report.md) for a detailed breakdown of the business insights and cohort analysis results.

## Future Enhancements

- **Real-time Data Integration:** Connect to live SQL/NoSQL databases.
- **Advanced Predictive Analytics:** Implement LTV (Lifetime Value) forecasting.
- **Additional Visualizations:** Add trend lines and categorical breakdown charts.
- **Export Capabilities:** Allow stakeholders to download PDF reports directly from the dashboard.

---
*Created by Apex Software Solutions*
