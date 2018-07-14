'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var token = process.env.DATO_API_TOKEN;

  if (token) {
    process.exit();
    return;
  }

  (0, _requireToken2.default)().then(function () {
    return process.exit();
  });
};

var _requireToken = require('../dump/requireToken');

var _requireToken2 = _interopRequireDefault(_requireToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];