'use strict';

const Promise = require('bluebird');
const createError = require('http-errors');
const debug = require('debug')('note:storage');
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});

const mkdirp = Promise.promisifyAll(require('mkdirp'));

module.exports = exports = {};

exports.createItem = function(schemaName, item){
  debug('storing item');
  if (!schemaName) return Promise.reject(createError(400, 'expected schemaName'));
  if (!item) return Promise.reject(createError(400, 'expected item'));
  let json = JSON.stringify(item);
  let path = `${__dirname}/../data/${schemaName}`;
  return fs.accessProm(path)
  .catch(err => {
    if (err.code === 'ENOENT') 
      return mkdirp.mkdirpAsync(path);
     else 
      return Promise.reject(err);
  })
  .then(() => fs.writeFileProm(`${path}/${item.id}.json`, json))
  .then(() => item);
};

exports.fetchItem = function(schemaName, id){
  debug('fetchItem');
  if (!schemaName) return Promise.reject(createError(400, 'expected schemaName'));
  if (!id) {
    return Promise.reject(createError(400, 'expected item ID'));
  }
  return fs.readFileProm(`${__dirname}/../data/${schemaName}/${id}.json`)
  .catch(err => Promise.reject(createError(404, err.message)))
  .then(data => {
    let item = JSON.parse(data.toString());
    return item;
  });
};

exports.deleteItem = function(schemaName, id){
  debug('deleteItem');
  if (!schemaName) return Promise.reject(createError(400, 'expected schemaName'));
  if (!id) return Promise.reject(createError(400, 'expected item'));
  return fs.unlinkProm(`${__dirname}/../data/${schemaName}/${id}.json`)
  .catch(err => Promise.reject(createError(404, err.message)));
};

exports.availIDs = function(schemaName) {
  return fs.readdirProm(`${__dirname}/../data/${schemaName}`)
  .catch(err => Promise.reject(createError(404, err.message)))
  .then( filenames => filenames.map(name => name.split('.json')[0]));
};
