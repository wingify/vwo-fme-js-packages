const packageFile = require('./package.json');
const common = require('../../tools/build/webpack.common');

module.exports = function (_env, argv) {
  return common({
    mode: argv.mode === 'production' ? 'production' : 'development',
    entry: './src/index.ts',
    outputPath: './dist',
    outputFilename: 'index.umd',
    libraryName: 'vwoFmeCheckLicenseHeaderUtil',
    clean: false,
    packageFile,
    target: 'node',
  });
};
