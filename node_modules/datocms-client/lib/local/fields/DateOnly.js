"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DateOnly;
/* eslint-disable no-proto */

function DateOnly() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var instance = new (Function.prototype.bind.apply(Date, [null].concat(args)))();
  instance.__proto__ = DateOnly.prototype;
  return instance;
}

DateOnly.prototype = Object.create(Date.prototype);

DateOnly.prototype.toMap = function toMap() {
  return this.toISOString().slice(0, 10);
};
module.exports = exports["default"];