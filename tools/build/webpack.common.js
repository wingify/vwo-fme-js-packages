const path = require('path');
const addPlugins = require('./webpack-plugins');

module.exports = ({
  entry,
  outputPath,
  outputFilename,
  libraryName,
  mode,
  packageFile,
  target,
}) => ({
  mode,
  devtool: 'source-map',
  entry: path.resolve(entry),
  target,
  output: {
    path: path.resolve(outputPath),
    filename: () => {
      if (mode === 'production') {
        return `${outputFilename}.min.js`;
      }

      return `${outputFilename}.js`;
    },
    library: libraryName,
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: false,
    auxiliaryComment: {
      root: ' Root',
      commonjs: ' CommonJS',
      commonjs2: ' CommonJS2',
      amd: ' AMD',
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@wingify/service-logger': path.resolve(
        __dirname,
        '../../packages/service-logger/src'
      ),
      '@wingify/util-data-type': path.resolve(
        __dirname,
        '../../packages/util-data-type/src'
      ),
      '@wingify/util-check-license-header': path.resolve(
        __dirname,
        '../../packages/util-check-license-header/src'
      ),
    },
  },
  plugins: addPlugins({}, packageFile),
});
