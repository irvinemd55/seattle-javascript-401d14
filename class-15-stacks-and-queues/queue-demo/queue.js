'use strict';

const Queue = module.exports = function(){
  this.tail = 0;
  this.head = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.tail++] = value;
}

Queue.prototype.dequeue = function(){
  if(this.head === this.tail) return null;
  let result = this[this.head];
  delete this[this.head++];
  return result;
}
