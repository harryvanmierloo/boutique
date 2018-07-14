'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchWithProxy;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _httpsProxyAgent = require('https-proxy-agent');

var _httpsProxyAgent2 = _interopRequireDefault(_httpsProxyAgent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchWithProxy(url, options) {
  var instanceOptions = Object.assign({}, options);

  if (!instanceOptions.agent && process.env.HTTPS_PROXY) {
    instanceOptions.agent = new _httpsProxyAgent2.default(process.env.HTTPS_PROXY);
  }

  return (0, _nodeFetch2.default)(url, instanceOptions);
}
module.exports = exports['default'];