var merge = require('lodash').merge;
var eslintrc = require('../.eslintrc');

module.exports = merge(eslintrc, {
  "settings": {
    "import/resolver": "meteor",
  }
});
