'use strict';

const EventEmitter = require('events').EventEmitter;

const Log = module.exports = function(){
  // inherit all the properties from EventEmitterconstructor
  EventEmitter.call(this);

  // add a defualt event listener
  this.on('log', function(data){
    console.log(data);
  });
};

// inherit all the methods from EventEmitters constructor

Log.prototype = Object.create(EventEmitter.prototype);
Log.prototype.constructor = Log;

let l = new Log();
l.emit('log', 'some message');
