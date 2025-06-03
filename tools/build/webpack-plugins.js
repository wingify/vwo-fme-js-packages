const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (argv = {}, packageFile) => {
  const libraryName = packageFile.name;
  const libVersion = packageFile.version;
  let deps = '';

  Object.keys(packageFile.dependencies).map((key, index) => {
    deps += `\n ${index + 1}. ${key} - ${packageFile.dependencies[key]}`;
  });

  let libraryHeaderComment;

  libraryHeaderComment = `${libraryName} - v${libVersion}
URL - https://github.com/wingify/vwo-fme-js-packages

Copyright 2025 Wingify Software Pvt. Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Dependencies used - ${deps}`;

  const plugins = [
    new webpack.BannerPlugin({
      banner: libraryHeaderComment,
      entryOnly: true,
      stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
    }),
  ];

  if (argv.env && argv.env.analyze && argv.mode !== argv.PRODUCTION) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};
