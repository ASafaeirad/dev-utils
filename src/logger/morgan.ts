/* eslint-disable no-multi-spaces */
import * as morgan from 'morgan';
import chalks, { getChStatus, getChTime } from './chalks';

const femMorgan = (scope: string, { badge = '⬢ ' } = {}) => morgan((tokens, req, res) => {
  const reqLength = toString(tokens.res(req, res, 'content-length'));
  const reqMethod = toString(tokens.method(req, res).slice(0, 3));
  const reqStatus = toString(tokens.status(req, res));
  const reqTime   = toString(tokens['response-time'](req, res));
  const reqUrl    = toString(tokens.url(req, res));

  const length = reqLength.padEnd(8);
  const status = `${reqStatus}|${reqMethod}`;
  const time   = reqTime.padEnd(8);

  const chStatus = getChStatus(reqStatus[0]);
  const chTime   = getChTime(parseInt(reqTime, 10));

  return [
    chalks.disable(`[${scope}] ›`),
    chStatus(badge),
    chStatus.underline(status),
    ' ',
    length,
    '-',
    chTime(time),
    chTime('ms'),
    reqUrl,
  ].join(' ');
});

/**
 * Retrun 'xxx' if input type is not string
 * @param {*} string
 * @returns {String}
 */
function toString(str: any) : string { return ((typeof str === 'string') ? str : 'xxx'); }

export default femMorgan;
