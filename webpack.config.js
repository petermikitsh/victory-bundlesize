const execSync = require('child_process').execSync;
const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const fingerprint = execSync('git rev-parse --short HEAD').toString().trim();

module.exports = function () {
  return {
    devtool: 'source-map',
    entry: {
      vendor: [
        'victory-chart/es/components/victory-chart/victory-chart',
        'victory-chart/es/components/victory-line/victory-line',
        'victory-chart/es/components/containers/victory-zoom-container'
      ]
    },
    output: {
      filename: `.tmp/[name]-${fingerprint}.js`,
      library: '[name]'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true
          }
        }
      ]
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(__dirname, '.tmp', `[name]-${fingerprint}-manifest.json`),
        name: '[name]',
      }),
      new LodashModuleReplacementPlugin({
        currying: true,
        flattening: true,
        paths: true,
        placeholders: true,
        shorthands: true
      })
    ],
    target: 'web'
  };
};
