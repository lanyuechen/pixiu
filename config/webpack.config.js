const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
  },
  externals: {
    'pixi.js': 'PIXI',
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '测试环境',
      template: './src/index.ejs',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin()
  ],
};
