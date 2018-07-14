'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _denodeify = require('denodeify');

var _denodeify2 = _interopRequireDefault(_denodeify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fsReadFile = (0, _denodeify2.default)(_fs2.default.readFile);
var fsAccess = (0, _denodeify2.default)(_fs2.default.access);

exports.default = function readFile(filePath) {
  return regeneratorRuntime.async(function readFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fsAccess(filePath));

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context['catch'](0);
          return _context.abrupt('return', null);

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(fsReadFile(filePath, 'utf-8'));

        case 10:
          return _context.abrupt('return', _context.sent);

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this, [[0, 5]]);
};

module.exports = exports['default'];