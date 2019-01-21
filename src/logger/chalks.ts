import chalk, { Chalk } from 'chalk';

const chalks = {
  info: chalk.blue,
  error: chalk.red,
  success: chalk.green,
  warning: chalk.yellow,
  processing: chalk.blue,
  disable: chalk.gray,
};

/**
 * Get morgan status and return chalk color
 * @param {string} status
 */
export const getChStatus = (status: string) : Chalk => {
  switch (status) {
    case '2':
      return chalks.success;
    case '3':
      return chalks.processing;
    case '4':
      return chalks.warning;
    default:
      return chalks.error;
  }
};

/**
 * Get response time and limit returns chalk color base on those
 * @param {string} time - Response time
 * @param {number} [limit=100] - Response time limit
 * @returns {chalk}
 */
export const getChTime = (time: number, limit = 100) => (
  time < limit
    ? chalks.success
    : chalks.warning
);

export default chalks;
