'use strict';


const pos = module.exports = {};

pos.getCreditCard = function(){
  console.log('getCreditCard');
  return Promise.resolve(42);
}

pos.chargeCard = function(cardNumber){
  if(!cardNumber) return Promise.reject(new Error('ut oh'));
  return Promise.resolve('$33');
}
