'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
  function Color(value) {
    _classCallCheck(this, Color);

    this.value = value;
  }

  _createClass(Color, [{
    key: 'toMap',
    value: function toMap() {
      return {
        red: this.red,
        green: this.green,
        blue: this.blue,
        rgb: this.rgb,
        hex: this.hex
      };
    }
  }, {
    key: 'red',
    get: function get() {
      return this.value.red;
    }
  }, {
    key: 'green',
    get: function get() {
      return this.value.green;
    }
  }, {
    key: 'blue',
    get: function get() {
      return this.value.blue;
    }
  }, {
    key: 'alpha',
    get: function get() {
      return this.value.alpha / 255.0;
    }
  }, {
    key: 'rgb',
    get: function get() {
      if (this.value.alpha === 255) {
        return 'rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')';
      }

      return 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', ' + this.alpha + ')';
    }
  }, {
    key: 'hex',
    get: function get() {
      var hex = '#';

      var r = this.red.toString(16);
      var g = this.green.toString(16);
      var b = this.blue.toString(16);
      var a = parseInt(this.alpha * 255, 10).toString(16);

      if (r.length === 1) r = '0' + r;
      if (g.length === 1) g = '0' + g;
      if (b.length === 1) b = '0' + b;
      if (a.length === 1) a = '0' + a;

      hex += r + g + b;

      if (a !== 'ff') {
        hex += a;
      }

      return hex;
    }
  }]);

  return Color;
}();

exports.default = Color;
module.exports = exports['default'];