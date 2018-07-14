"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DateTime;
/* eslint-disable no-proto */

function DateTime() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var instance = new (Function.prototype.bind.apply(Date, [null].concat(args)))();
  instance.__proto__ = DateTime.prototype;
  return instance;
}

DateTime.prototype = Object.create(Date.prototype);

DateTime.prototype.toMap = function toMap() {
  return this.toISOString();
};
module.exports = exports["default"];