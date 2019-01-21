import { Signale } from 'signale';

type Methods =
  | "log"
  | "error"
  | "debug"
  | "success"
  | "warning"

const femSignale = (scope: string) : Signale<Methods> => new Signale<Methods>({
  stream: process.stdout,
  scope,
  types: {
    debug: {
      badge: '⬢',
      color: 'yellow',
      label: 'debug',
    },
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
