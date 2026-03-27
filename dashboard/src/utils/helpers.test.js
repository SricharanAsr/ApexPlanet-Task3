import { formatCurrency, formatPercent } from './helpers';

// Simple test suite simulation
const runTests = () => {
  console.log('Running tests for helpers.js...');

  // Test formatCurrency
  const currencyResult = formatCurrency(1234.56);
  if (currencyResult === '$1,234.56') {
    console.log('✅ formatCurrency passed');
  } else {
    console.error(`❌ formatCurrency failed: expected "$1,234.56", got "${currencyResult}"`);
  }

  // Test formatPercent
  const percentResult = formatPercent(85.5);
  if (percentResult === '85.5%') {
    console.log('✅ formatPercent passed');
  } else {
    console.error(`❌ formatPercent failed: expected "85.5%", got "${percentResult}"`);
  }
};

// Only run if this file is executed directly (though it's an ESM module)
// For a real project, we would use Vitest or Jest.
// runTests();
