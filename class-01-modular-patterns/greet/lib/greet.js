'use strict';

module.exports = function greet(name){
  if (!name) throw new Error('expected a name');
  return 'hello ' + name;
};
