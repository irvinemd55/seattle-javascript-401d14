'use stirct';

const EventEmitter = require('events').EventEmitter;

const Log = module.exports = function(){
  this.ee = new EventEmitter();
  this.items = [];

  this.ee.on('log', function(data){
    console.log(data);
  });
}

let l = new Log();

l.items.push(3);
l.ee.emit('log', 'some message');
