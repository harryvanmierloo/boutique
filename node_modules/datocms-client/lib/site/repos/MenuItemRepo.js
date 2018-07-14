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

var MenuItemRepo = function () {
  function MenuItemRepo(client) {
    _classCallCheck(this, MenuItemRepo);

    this.client = client;
  }

  _createClass(MenuItemRepo, [{
    key: 'create',
    value: function create(resourceAttributes) {
      var serializedResource = (0, _serializeJsonApi2.default)(resourceAttributes, {
        type: 'menu_item',
        attributes: ['label', 'position'],
        requiredAttributes: ['label', 'position'],
        relationships: {
          itemType: 'item_type',
          parent: 'menu_item'
        }
      });
      return this.client.post('/menu-items', serializedResource).then(function (response) {
        return Promise.resolve((0, _deserializeJsonApi2.default)(response));
      });
    }
  }, {
    key: 'update',
    value: function update(menuItemId, resourceAttributes) {
      var serializedResource = (0, _serializeJsonApi2.default)(menuItemId, resourceAttributes, {
        type: 'menu_item',
        attributes: ['label', 'position'],
        requiredAttributes: ['label', 'position'],
        relationships: {
          itemType: 'item_type',
          parent: 'menu_item'
        }
      });
      return this.client.put('/menu-items/' + menuItemId, serializedResource).then(function (response) {
        return Promise.resolve((0, _deserializeJsonApi2.default)(response));
      });
    }
  }, {
    key: 'all',
    value: function all() {
      return this.client.get('/menu-items').then(function (response) {
        return Promise.resolve((0, _deserializeJsonApi2.default)(response));
      });
    }
  }, {
    key: 'find',
    value: function find(menuItemId) {
      return this.client.get('/menu-items/' + menuItemId).then(function (response) {
        return Promise.resolve((0, _deserializeJsonApi2.default)(response));
      });
    }
  }, {
    key: 'destroy',
    value: function destroy(menuItemId) {
      return this.client.delete('/menu-items/' + menuItemId).then(function (response) {
        return Promise.resolve((0, _deserializeJsonApi2.default)(response));
      });
    }
  }]);

  return MenuItemRepo;
}();

exports.default = MenuItemRepo;
module.exports = exports['default'];