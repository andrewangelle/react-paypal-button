const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const libraryName = 'paypalButton';

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: libraryName + '.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new UglifyJsPlugin({ minimize: true })]
};
