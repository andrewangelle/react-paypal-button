const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const libraryName = 'reactGlide';

const config = {
  entry: path.join(__dirname, 'src/index.ts'),
  externals: {
    react: 'react',
  },
  mode: 'none',
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
  output: {
    path: `${__dirname}/bin`,
    filename: 'index.min.js',
    library: 'react-paypal-button',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts'],
    modules: ['node_modules']
  },
  target: 'node'
};

module.exports = config