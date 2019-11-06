const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const libraryName = 'reactGlide';
const DotEnv = require('dotenv-webpack')

const config = {
  entry: path.join(__dirname),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
  },
  module: {
    rules: [
      {
        test: /^(?!.*test\.tsx|\.ts?$).*\.tsx|\.ts?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ]
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
  devServer: {
    contentBase: 'dist',
    port: 8008,
    open: true,
    host: 'localhost',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'example/index.html',
      filename: 'index.html'
    }),
    new DotEnv({
      path: '../.env'
    })
  ]
};

module.exports = config;
