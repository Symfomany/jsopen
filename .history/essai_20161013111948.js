"use strict";


var _ = require('lodash');
var evens = [2,4,6,8,10,16,20];
var fives = [];

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * 2);
    }

    return numbers;
  };

  return example();
}


// list matching
var [a, ,b] = [1,2,3];
a === 1;
b === 3;

// object matching
var { op: a, lhs: { op: b }, rhs: c }
       = getASTNode()

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode()

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;

// Destructuring + defaults arguments
function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}
r({x:1, y:2}) === 23



var ok = () => {
  return "alpha"
}


class SkinnedMesh {
  constructor(geometry, materials) {
    this.bones = [];
    this.boneMatrices = [];
  }
  update(camera) {
  }
  static defaultMatrix() {
    return new SkinnedMesh();
  }
}

var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

var skin = new  SkinnedMesh()
console.log(skin);
console.log(name);
console.log(_.first([1,2,3,4,5,6]));
console.log(square(2, 4, 7.5, 8, 11.5, 21)); // returns: [4, 8, 15, 16, 23, 42]
console.log(ok()); // returns: [4, 8, 15, 16, 23, 42]

