'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _writeFile = require('./writeFile');

var _writeFile2 = _interopRequireDefault(_writeFile);

var _readFile = require('./readFile');

var _readFile2 = _interopRequireDefault(_readFile);

var _serializeData = require('./serializeData');

var _serializeData2 = _interopRequireDefault(_serializeData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function addToDataFile(file, format, data) {
  var oldContent, contentToAdd, newContent;
  return regeneratorRuntime.async(function addToDataFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _readFile2.default)(file));

        case 2:
          _context.t0 = _context.sent;

          if (_context.t0) {
            _context.next = 5;
            break;
          }

          _context.t0 = '';

        case 5:
          oldContent = _context.t0;
          contentToAdd = (0, _serializeData2.default)(format, data);
          newContent = oldContent.replace(/\n*(#\s*datocms:start[\s\S]*#\s*datocms:end|$)/, '\n\n# datocms:start\n' + contentToAdd + '\n# datocms:end');
          _context.next = 10;
          return regeneratorRuntime.awrap((0, _writeFile2.default)(file, newContent));

        case 10:
          return _context.abrupt('return', _context.sent);

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};

module.exports = exports['default'];