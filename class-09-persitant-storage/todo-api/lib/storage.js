'use strict';



// data =
// {
// notes: {123: {}, 534: {}},
// list: {120: {}, 530: {}}
// }

//./data/
//| ./notes/
//|   123.json -- JSON File with hte 123 note
//|   534.json -- JSON File with hte 534 note
//| ./list/
//|   120.json -- JSON File with hte 120 note
//|   530.json -- JSON File with hte 530 note
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const storage = module.exports = {};

const dataDir = `${__dirname}/../data`;

//storage.setItem('notes', {id: 123, title: 'hello')
//.then(note => {
//})

storage.setItem = function(name, item){
  // TODO: check if directory exits
  return  fs.statAsync(`${dataDir}/${name}`)
  .then(() => {
    let json = JSON.stringify(item);
    return fs.writeFileAsync(`${dataDir}/${name}/${item.id}.json`, json);
  })
  .then(() => item);

}

storage.getItem = function(name, id){
  // TODO check if name dir xists if not 404
  // TODO check if JSON file with id name exists if not 404
  // TODO: read json file parse and send back
  return fs.statAsync(`${dataDir}/${name}/${id}.json`)
  .catch(err => {
    return Promise.reject(err);
    err.status = 404;
  })
  .then(() => {
    return fs.readFileAsync(`${dataDir}/${name}/${id}.json`)
  })
  .then(data => {
    return JSON.parse(data.toString());
  })

}

storage.deleteItem = function(name, id){
  // TODO: use fs.statAsync to check if file exts
  // if not in catch blcok make the error a 404 and reject it
  if (!data[name] || !data[name][id]) {
    let err = new Error('item not found');
    err.status = 404;
    return Promise.reject(err);
  }
  
  delete data[name][id];
  return Promise.resolve();
}


