"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Links;
/* eslint-disable no-proto */

function Links() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var instance = new (Function.prototype.bind.apply(Array, [null].concat(args)))();
  instance.__proto__ = Links.prototype;
  return instance;
}

Links.prototype = Object.create(Array.prototype);

Links.prototype.toMap = function toMap() {
  var maxDepth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var currentDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return this.filter(function (item) {
    return !!item;
  }).map(function (item) {
    return item.toMap(maxDepth, currentDepth);
  });
};
module.exports = exports["default"];