"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Gallery;
/* eslint-disable no-proto */

function Gallery() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var instance = new (Function.prototype.bind.apply(Array, [null].concat(args)))();
  instance.__proto__ = Gallery.prototype;
  return instance;
}

Gallery.prototype = Object.create(Array.prototype);

Gallery.prototype.toMap = function toMap() {
  var maxDepth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var currentDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return this.filter(function (item) {
    return !!item;
  }).map(function (item) {
    return item.toMap(maxDepth, currentDepth + 1);
  });
};
module.exports = exports["default"];