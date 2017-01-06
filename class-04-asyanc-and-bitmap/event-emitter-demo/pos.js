'use strict';

const EventEmitter = require('events').EventEmitter;
let ee = module.exports = new EventEmitter();

ee.on('getCreditCard', function(callback){
  console.log('sending card');
  callback(null, 2);
});

ee.on('charge', function(cardNumber, callback){
  console.log('got card', cardNumber);
  callback(null, '$33');
});

ee.on('print', function(amount, callback){
  console.log('charged', amount);
  callback();
});
