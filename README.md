# Deep-Dive Analysis & Interactive Dashboarding

This project features a comprehensive business analysis dashboard built with **React, Vite, and Framer Motion**, powered by a data generation and analysis engine in **Python**.

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

---
*Created by Apex Software Solutions*
