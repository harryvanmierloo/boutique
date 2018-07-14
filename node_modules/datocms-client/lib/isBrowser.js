'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isBrowser = process.env.APP_ENV === 'browser';
exports.default = isBrowser;
module.exports = exports['default'];