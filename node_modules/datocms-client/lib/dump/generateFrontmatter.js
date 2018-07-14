'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateFrontmatter;

var _serializeData = require('./serializeData');

var _serializeData2 = _interopRequireDefault(_serializeData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateFrontmatter(format, data) {
  if (data) {
    switch (format) {
      case 'yaml':
      case 'yml':
        return '---\n' + (0, _serializeData2.default)(format, data) + '\n---\n\n';

      case 'toml':
        return '+++\n' + (0, _serializeData2.default)(format, data) + '\n+++\n\n';

      case 'json':
        return (0, _serializeData2.default)(format, data) + '\n\n';

      case 'md':
        return '';

      default:
        throw new Error('Unsupported format: ' + format);
    }
  } else {
    return '';
  }
}
module.exports = exports['default'];