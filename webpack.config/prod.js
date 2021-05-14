const path = require('path');

const base = require('./base');

module.exports = {
  ...base,
  mode: 'production',
  // devtool: 'source-map',
};
