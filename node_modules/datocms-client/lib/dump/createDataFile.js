'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDataFile;

var _serializeData = require('./serializeData');

var _serializeData2 = _interopRequireDefault(_serializeData);

var _writeFile = require('./writeFile');

var _writeFile2 = _interopRequireDefault(_writeFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDataFile(file, format, data) {
  return (0, _writeFile2.default)(file, (0, _serializeData2.default)(format, data));
}
module.exports = exports['default'];