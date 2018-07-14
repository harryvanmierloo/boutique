'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deserializeJsonApi = require('../../deserializeJsonApi');

var _deserializeJsonApi2 = _interopRequireDefault(_deserializeJsonApi);

var _serializeJsonApi = require('../../serializeJsonApi');

var _serializeJsonApi2 = _interopRequireDefault(_serializeJsonApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccountRepo = function () {
  function AccountRepo(client) {
    _classCallCheck(this, AccountRepo);

    this.client = client;
  }

  _createClass(AccountRepo, [{
    key: 'update',
    value: function update(resourceAttributes) {
      var serializedResource = (0, _serializeJsonApi2.default)(resourceAttributes, {
        type: 'account',
        attributes: ['email', 'password']
      });
      return this.client.put('/account', serializedResource).then(function (response) {
        return Promise.resolve((0, _deserializeJsonApi2.default)(response));
      });
    }
  }, {
    key: 'find',
    value: function find() {
      return this.client.get('/account').then(function (response) {
        return Promise.resolve((0, _deserializeJsonApi2.default)(response));
      });
    }
  }]);

  return AccountRepo;
}();

exports.default = AccountRepo;
module.exports = exports['default'];