'use strict';


function getCreditCard(callback){
  console.log('running gc');
  callback(null, 234987239);
}

function chargeCustomer(creditCard, callback){
  console.log('running cc');
  callback(null, '$33');
}

function printRecpeit(amount, callback){
  
  console.log('running pr', amount);
  callback();
}

getCreditCard(function(err, creditCard){
  if(err) return console.error('didnt work');
  console.log('yey'); 
  chargeCustomer(creditCard, function(err, amount){
    if(err) return console.error('didnt work');
    console.log('booya');
    printRecpeit(amount, function(err){
      if(err) return console.error('didnt work');
      console.log('done');
    });
  });
});
