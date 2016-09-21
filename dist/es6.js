"use strict";

variableMalDéclarée = 17; // lève une ReferenceError

// /**
//  * Classe
//  */
//  class Shape {
//      constructor (id, x, y) {
//          this.id = id
//          this.move(x, y)
//      }
//      move (x, y) {
//          this.x = x
//          this.y = y
//      }
//  }
// class Rectangle extends Shape {
//      constructor (id, x, y, width, height) {
//          super(id, x, y)
//          this.width  = width
//          this.height = height
//      }
//      get z ()           { return this._z }
//      set z (v)          { this._z = v }
// }
// class Circle extends Shape {
//      constructor (id, x, y, radius) {
//          super(id, x, y)
//          this.radius = radius
//      }
// }
//
//
// var rect = new Rectangle(7, 42)
// rect.z     = 1000
// rect.color = "red"
// console.log(rect,rect.x, rect.y, rect.z, rect.color)


/*
* Arrows Function
*
*/

// var evens = [0,2,4,6,8]
// var fives = []
// var test = (e) => console.log("okkk" + e)
// test('loool')
//
// // Expression bodies
// var odds = evens.map(v => v + 1);
// var nums = evens.map((v, i) => v + i);
//
// // Statement bodies
// nums.forEach(v => {
//   if (v % 5 === 0)
//     fives.push(v);
// });
// console.log(fives);
//
// // Lexical this
// var bob = {
//   _name: "Bob",
//   _friends: [],
//   printFriends() {
//     this._friends.forEach(f =>
//       console.log(this._name + " knows " + f));
//   }
// };