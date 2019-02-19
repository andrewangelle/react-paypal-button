const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const libraryName = 'reactPaypalButton';

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'lib'),
    library: libraryName,
    filename: libraryName + '.js',
    libraryTarget: "umd",
    umdNamedDefine: true,
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\.js/,
        parallel: true,
        sourceMap: true
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /^(?!.*test\.tsx|\.ts?$).*\.tsx|\.ts?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /^(?!.*test\.tsx|\.ts?$).*\.tsx|\.ts?$/,
        exclude: /node_modules/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.tsx', '.css', '.ts', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
