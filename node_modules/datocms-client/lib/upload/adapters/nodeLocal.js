'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _denodeify = require('denodeify');

var _denodeify2 = _interopRequireDefault(_denodeify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stat = (0, _denodeify2.default)(_fs2.default.stat);

function uploadToS3(url, filePath, size) {
  return new Promise(function (resolve, reject) {
    var req = _request2.default.put({
      url: url,
      headers: {
        'x-amz-acl': 'public-read',
        'content-length': size
      }
    }).on('response', function (res) {
      if (res.statusCode === 200) {
        resolve();
      } else {
        reject(new Error('Invalid status code: ' + res.statusCode));
      }
    }).on('error', reject);

    _fs2.default.createReadStream(filePath).pipe(req);
  });
}

exports.default = function nodeLocal(client, filePath) {
  var _ref, size, format, _ref2, id, url;

  return regeneratorRuntime.async(function nodeLocal$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(stat(filePath));

        case 2:
          _ref = _context.sent;
          size = _ref.size;
          format = _path2.default.extname(filePath).slice(1);
          _context.next = 7;
          return regeneratorRuntime.awrap(client.uploadRequests.create({
            filename: _path2.default.basename(filePath)
          }));

        case 7:
          _ref2 = _context.sent;
          id = _ref2.id;
          url = _ref2.url;
          _context.next = 12;
          return regeneratorRuntime.awrap(uploadToS3(url, filePath, size));

        case 12:
          return _context.abrupt('return', {
            path: id,
            size: size,
            format: format
          });

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};

module.exports = exports['default'];