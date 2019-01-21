import crossEnv from './cross-env';

const ENVS = {
  prod: 'production',
  dev: 'development',
  test: 'test',
};

const get = () : string => process.env.NODE_ENV || ENVS.dev;

const set = (env : string) : string => crossEnv(`NODE_ENV=${env}`);

const is = (env:string) : boolean => env.includes(get());

const env = {
  ...ENVS,
  get,
  set,
  isDev: is(ENVS.dev),
  isProd: is(ENVS.prod),
  isTest: is(ENVS.test),
};

export default env;
