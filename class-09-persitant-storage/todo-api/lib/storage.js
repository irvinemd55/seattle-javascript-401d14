'use strict';



// data =
// { 
// notes: {123: {}, 534: {}},
// list: {120: {}, 530: {}}
// }

//./data/
   //| ./notes/
   //|   123 -- JSON File with hte 123 note
   //|   534 -- JSON File with hte 534 note
   //| ./list/
   //|   120 -- JSON File with hte 120 note
   //|   530 -- JSON File with hte 530 note
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const data = {};
const storage = module.exports = {};

storage.setItem = function(name, item){
  if (!data[name]) data[name] = {};
  data[name][item.id] = item;

  // on success resolve the item that was stored
  return Promise.resolve(item);
}

storage.getItem = function(name, id){
  if (!data[name] || !data[name][id]) {
    let err = new Error('item not found');
    err.status = 404;
    return Promise.reject(err);
  }

  return Promise.resolve(data[name][id]);
}

storage.deleteItem = function(name, id){
  if (!data[name] || !data[name][id]) {
    let err = new Error('item not found');
    err.status = 404;
    return Promise.reject(err);
  }

  delete data[name][id];
  return Promise.resolve();
}

//storage.setItem('notes', {id: 'lulwat' ...})

