'use strict';

const greet = require('./lib/greet.js');
const goodbye = require('./lib/goodbye.js');

console.log(greet('slug'));
console.log(goodbye.tata('bud'));
console.log(goodbye.cya('aligator'));
console.log(goodbye.tatatu('maduue'));

// demo about using try catch blocks
//try {
  //let lul = {}
  //lul.hello();
//} catch(e){
  //// do something about it 
  //console.error('ERROR:' , e.message);
//}

//console.log('done');
