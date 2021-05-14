const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            priority: 10
        },
        common: {
            name: "common",
            test: /[\\/]src[\\/]/,
            minSize: 1024,
            chunks: "all",
            priority: 5
        }
      }
    }
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
      template: './src/template.ejs',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/assets', to: 'assets' },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin()
  ],
};
