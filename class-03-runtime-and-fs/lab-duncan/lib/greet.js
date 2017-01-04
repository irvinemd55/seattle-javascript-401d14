'use strict';

module.exports = function(name){
  if (!name) return null;
  if (typeof name !== 'string') return null;

  return 'Hello, ' + name;
};
