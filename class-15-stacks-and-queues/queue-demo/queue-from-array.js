'use strict';

const Queue = module.exports = function(){
  this.length = 0;
}

Queue.prototype.enqueue = function(value){
  Array.prototype.push.call(this, value);
}

Queue.prototype.dequeue = function(value){
  return Array.prototype.shift.call(this, value);
}
