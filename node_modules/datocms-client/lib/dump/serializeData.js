'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serializeData;

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _tomlJs = require('toml-js');

var _tomlJs2 = _interopRequireDefault(_tomlJs);

var _traverse = require('traverse');

var _traverse2 = _interopRequireDefault(_traverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serializeData(format, data) {
  /* eslint-disable array-callback-return */
  var safeData = (0, _traverse2.default)(data).map(function transform(value) {
    if (typeof value === 'undefined') {
      this.update(null);
    }
  });
  /* eslint-enable array-callback-return */

  switch (format) {
    case 'yaml':
    case 'yml':
      return _jsYaml2.default.safeDump(safeData, { lineWidth: -1 }).trim();

    case 'toml':
      return _tomlJs2.default.dump(safeData).trim();

    case 'json':
      return JSON.stringify(safeData, null, 2).trim();

    default:
      throw new Error('Unsupported format: ' + format);
  }
}
module.exports = exports['default'];