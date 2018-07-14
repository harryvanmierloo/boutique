'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = writeFile;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _denodeify = require('denodeify');

var _denodeify2 = _interopRequireDefault(_denodeify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fsWriteFile = (0, _denodeify2.default)(_fs2.default.writeFile);
var mkdirp = (0, _denodeify2.default)(_mkdirp2.default);

function writeFile(filePath, content) {
  return mkdirp(_path2.default.dirname(filePath)).then(function () {
    return fsWriteFile(filePath, content);
  }).then(function () {
    return 'Written ' + _path2.default.relative(process.cwd(), filePath);
  });
}
module.exports = exports['default'];