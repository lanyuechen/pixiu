const path = require('path');

const base = require('./base');

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
  },
};
