/**
 * Formats a number as USD currency.
 * @param {number} value - The number to format.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

/**
 * Formats a percentage value.
 * @param {number} value - The percentage value.
 * @returns {string} The formatted percentage string.
 */
export const formatPercent = (value) => `${value}%`;
