'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new Promise(function (resolve, reject) {
    process.stdout.write('Site token is not specified! Please paste your DatoCMS site read-only API token.\n');

    var rl = _readline2.default.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.on('SIGINT', function () {
      process.exit(1);
    });

    rl.on('SIGCONT', function () {
      rl.prompt();
    });

    rl.question('> ', function (token) {
      rl.close();

      if (token) {
        resolve(token);
        return;
      }

      reject();
    });
  }).then(function (token) {
    return fsAppendFile('.env', 'DATO_API_TOKEN=' + token).then(function () {
      return process.stdout.write('\nToken added to .env file.\n\n');
    }).then(function () {
      return token;
    });
  }).catch(function () {
    process.stderr.write('\nMissing token.\n');
    process.exit(1);
  });
};

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _denodeify = require('denodeify');

var _denodeify2 = _interopRequireDefault(_denodeify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fsAppendFile = (0, _denodeify2.default)(_fs2.default.appendFile);

module.exports = exports['default'];