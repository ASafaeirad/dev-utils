import { crossEnv } from 'nps-utils';

const ENVS = {
  prod: 'production',
  dev: 'development',
  test: 'test',
};

const get = () => process.env.NODE_ENV;

const set = _ => crossEnv(`NODE_ENV=${_}`);

const env = {
  ...ENVS,
  get,
  set,
  isDev: ENVS.dev.includes(get()),
  isProd: ENVS.prod.includes(get()),
  isTest: ENVS.test.includes(get()),
};

export default env;
