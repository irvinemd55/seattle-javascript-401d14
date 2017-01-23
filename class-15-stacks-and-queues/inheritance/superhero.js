'use strict';

function Person(name){
  this.name = name;
}

Person.prototype.sayHello = function(){
  console.log('hello from', this.name);
}

function SuperHero(name, power){
  Person.call(this, name)
  this.power = power;
}

SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero;

SuperHero.prototype.usePower = function(){
  console.log(this.name, 'uses', this.power);
}

let sally = new Person('sally')

sally.sayHello();
//{
  //name: 'sally',
  //__proto__: {
    //sayHello: function() ...
    //__proto__: Object.prototype
  //}
//}

let superSally = new SuperHero('mega sally', 'smash');
superSally.sayHello();
superSally.usePower();

//{
  //name: 'sally',
  //power: 'smash',
  //__proto__: {
    //usePower: function()...
    //__proto__: {
      //sayHello: function() ...
      //__proto__: Object.prototype
    //}
  //}
//}
