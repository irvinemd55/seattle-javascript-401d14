# 401 JS -- Prototype and Context

# Context resources
* Read [MDN this]
* Watch the Video [Javascript Context Tutorial]

# Prototype resources
* Skim [MDN new]
* Skim [MDN Object prototype]
* Read [MDN inheritance and the prototype chain]

# Learning Objectives
* understand the difference between context and scope
* learn how to configure a functions context
* understand the roll context plays in constructor functions

# Overview
* when a function has a `this` we say that `this` is the functions context
* unlike scope a functions context can be configured
* If a function is not a property on an object, by default it has no context
* If a function is a property on an object, by default that object is the context for that function
* `call`, `bind`, and `apply` are function prototype methods that allow us to change the context of a function
* `call` is a methods on a function that invokes a function with a specified context and argments  
 * `call` passes comma seporated argments
``` javascript
function lower(str){
  return String.prototype.toLowerCase.call(str)
}

lower("HELLO");
// hello
```  
* `apply` is a methods on a function that invokes a function with a specified context and argments  
 * `apply` passes argments from an array  
``` javascript
var state = {
  history: [],
  addToHistory: function(){ 
    Array.prototype.push.apply(this.history, arguments);
  }
};

state.addToHistory('move player', 'pickup item', 'update hp');
// state.history === ['move player', 'pickup item', update hp']
```   
* `bind` is a methods on a function that returns a new function with a specified context
``` javascript
describe('bind example', function(){
  this.example = 'some data';

  it('example should be "some data"', (function(done) {
    expect(this.example).to.equal('some data');
    done();
  }).bind(this)) // binds "it's" callback to the describe block's callback's context
})

```   
* Arrow functions inherit their context from their parent context
``` javascript
describe('arrow function example', function(){
  this.example = 'some data';

  // it's arrow function has the context of the callback from the describe block
  it('example should be "some data"', (done) => {
    expect(this.example).to.equal('some data');
    done();
  })
})
```
* variables can be assigned to arrow functions  
``` javascript
var doubleIt = num => num * 2;
doubleIt(16);
// 32

let upper = str => String.prototype.toUpperCase.call(str);
upper('hello');
// HELLO

let removeOdds = list => list.filter(num => !(num & 1));
removeOdds([1,2,3,4]);
// [2,4]
```
* The `new` keyword creates a empty object and invokes a function with that object as its context
* For constructor ABC to inherit constructor XYZ's property it should `XYZ.call(this)` 
* For constructor ABC to inherit constructor XYZ's methods it should `ABC.prototype = Object.create(XYZ.prototype)`
``` javascript
function XYZ(shape){
  this.name = 'XYZ';
  this.size = 10;
  this.shape = shape;
}

XYZ.prototype.describe = function(){
  return this.name + ': ' + this.shape;
}

function ABC(shape, color){
  XYZ.call(this, shape);
  this.name = 'ABX'; // overwrite XYZs inherited name
  this.color = color;
}

ABC.prototype = Object.create(XYZ.prototype);
ABX.prototype.constructor = ABC;

ABC.prototype.changeColor = function(color){
  this.color = color;
}

let redBall = new ABC('ball', 'red');

// {
//   name: 'ABC',
//   size: 10',
//   shape: 'ball',
//   color: 'red'
//   __proto__: {
//     changeColor: function(color){
//       this.color = color;
//     },
//     __proto__: {
//       describe: function(){
//         return this.name + ': ' + this.shape;
//       }
//       __proto__: Object.prototype
//     }
//   }
// }

```
* dont mess with `__proto__` its slow **not even to read a property**
* if you want to determin an objects prototype use `Object.getPrototypeOf(someObject)`
``` javascript
var prototype = {};
var color = Object.create(prototype);
Object.getPrototypeOf(color) === prototype; // true
```
* don't nest a lot of prototype's it will have a speed impact on your code
* if you look up a property that is not on any object on the prototype chain it will still look through the whole prototype chain

# Exercise
* Write out the bdd framework from the class lecture
* Add `beforeEach` and `afterEach` functionality
* **SUPER BONUS**: 
 * refactor your bdd framework to support async `it`, `before`, `after`, `beforeEach`, and `afterEach` callbacks using a `done` callback, just like mocha!

[MDN new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

[MDN Object prototype]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype 

[MDN inheritance and the prototype chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

[MDN this]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

[Javascript Context Tutorial]: https://www.youtube.com/watch?v=fjJoX9F_F5g

