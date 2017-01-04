'use strict';

const greet = require('./lib/greet.js');

const main = module.exports = function(argv){
  if (!argv || !argv[2]) return 'Usage Error: must provide name';
  return greet(argv[2]);
}

console.log(main(process.argv));
