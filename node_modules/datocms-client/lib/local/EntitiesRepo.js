'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _JsonApiEntity = require('./JsonApiEntity');

var _JsonApiEntity2 = _interopRequireDefault(_JsonApiEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function payloadEntities(payload) {
  var accumulator = [];

  if (payload.data) {
    if (Array.isArray(payload.data)) {
      accumulator.push.apply(accumulator, _toConsumableArray(payload.data));
    } else {
      accumulator.push(payload.data);
    }
  }

  if (payload.included) {
    accumulator.push.apply(accumulator, _toConsumableArray(payload.included));
  }

  return accumulator;
}

var EntitiesRepo = function () {
  function EntitiesRepo() {
    var _this = this;

    _classCallCheck(this, EntitiesRepo);

    this.entities = {};

    for (var _len = arguments.length, payloads = Array(_len), _key = 0; _key < _len; _key++) {
      payloads[_key] = arguments[_key];
    }

    payloads.forEach(function (payload) {
      payloadEntities(payload).forEach(function (entityPayload) {
        var object = new _JsonApiEntity2.default(entityPayload, _this);
        _this.entities[object.type] = _this.entities[object.type] || {};
        _this.entities[object.type][object.id] = object;
      });
    });
  }

  _createClass(EntitiesRepo, [{
    key: 'findEntitiesOfType',
    value: function findEntitiesOfType(type) {
      return Object.values(this.entities[type] || {});
    }
  }, {
    key: 'findEntity',
    value: function findEntity(type, id) {
      return this.entities[type] && this.entities[type][id];
    }
  }]);

  return EntitiesRepo;
}();

exports.default = EntitiesRepo;
module.exports = exports['default'];