// ======================JOI=========================
// const Joi = require('joi');

// const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate('q'));
// console.log(passwordSchema.validate('1234rewq'));
// console.log(passwordSchema.validate('1234rewq1111111'));

// ==================shortid=========================
const shortid = require('shortid');

console.log(shortid.generate()); // C08SaHLcR

// ==================Транспіляція коду=========================
const sum = (a, b) => a + b;

sum(3, 5);

class Hero {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}
const M = new Hero('Mango');
