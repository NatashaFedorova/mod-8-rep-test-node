"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// ======================JOI=========================
// const Joi = require('joi');
// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate('q'));
// console.log(passwordSchema.validate('1234rewq'));
// console.log(passwordSchema.validate('1234rewq1111111'));
// ==================shortid=========================
var shortid = require('shortid');

console.log(shortid.generate()); // C08SaHLcR
// ==================Транспіляція коду=========================

var sum = function sum(a, b) {
  return a + b;
};

sum(3, 5);

var Hero = /*#__PURE__*/function () {
  function Hero(name) {
    _classCallCheck(this, Hero);

    this.name = name;
  }

  _createClass(Hero, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }]);

  return Hero;
}();

var M = new Hero('Mango');