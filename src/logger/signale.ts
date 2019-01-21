import { Signale } from 'signale';

const femSignale = (scope: string) : Signale => new Signale({
  stream: process.stdout,
  scope,
  types: {
    log: {
      badge: '⬢',
      label: 'log',
      color: '',
    },
    success: {
      badge: '⬢',
      color: 'green',
      label: 'success',
    },
    warning: {
      badge: '⬢',
      color: 'yellow',
      label: 'warning',
    },
    error: {
      badge: '⬢',
      color: 'red',
      label: 'error',
    },
  },

});

export default femSignale;
