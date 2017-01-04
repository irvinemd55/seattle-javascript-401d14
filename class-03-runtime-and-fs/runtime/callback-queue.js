'use strict';

function getCreditCard(callback){
  console.log('get the card');
  return callback(new Error('something whet wrong'));
  callback(null, 1234);
};

function chargeAccount( cardNumber, callback){
  console.log('got the money');
  //if (err) return callback(new Error('something whet wrong'));
  callback(null, 'charged the card: ' + cardNumber);
};

function thankyou(receipt, callback){
  console.log(receipt);
  console.log('thank you for your service');
  callback();
}

setTimeout(getCreditCard, 500, function(err, cardNumber){
  if (err) return console.log('something went wrong getting card info');

  setTimeout(chargeAccount, 500, cardNumber, function(err, receipt){
    if (err) return console.log('something went wrong charging the card');

    setTimeout(thankyou, 500, receipt,  function(){
      console.log('success');
    });
  });
});
