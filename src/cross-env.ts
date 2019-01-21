import * as path from 'path';

/**
 * Get the path to one of the bin scripts exported by a package
 * @param {string} packageName - name of the npm package
 * @param {string} binName=packageName - name of the script
 * @returns {string} path, relative to process.cwd()
 */
function getBin(packageName: string, binName: string = packageName): string {
  const packagePath = require.resolve(`${packageName}/package.json`);
  const concurrentlyDir = path.dirname(packagePath);
  let { bin: binRelativeToPackage } = require(packagePath);
  if (typeof binRelativeToPackage === 'object') {
    binRelativeToPackage = binRelativeToPackage[binName];
  }
  const fullBinPath = path.join(concurrentlyDir, binRelativeToPackage);
  return path.relative(process.cwd(), fullBinPath);
}

/**
 * Gets a script that uses the cross-env binary. cross-env
 * is a dependency of nps-utils, so you don't need to
 * install it yourself.
 * @param {string} args - args to pass to cross-env
 *   learn more from http://npm.im/cross-env
 * @return {string} - the command with the cross-env binary
 */
function crossEnv(args : string): string {
  return `node ${getBin('cross-env')} ${args}`;
}

export default crossEnv;
