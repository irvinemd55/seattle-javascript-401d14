'use strict';

const Stack = module.exports = function(){
  this.top = 0;
};

// memory complexity of O(1)
// runtime complexity of O(1)
Stack.prototype.push = function (value){
  this[this.top++] = value;
}

// memory complexity of O(1)
// runtime complexity of O(1)
Stack.prototype.pop = function(){
  if(this.top == 0) return null;
  let result = this[--this.top];
  delete this[this.top];
  return result;
}

// memory complexity of O(1)
// runtime complexity of O(1)
Stack.prototype.peek = function(){
  if(this.top == 0) return null;
  return this[this.top -1];
}

