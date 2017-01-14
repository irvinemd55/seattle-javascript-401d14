'use strict';

const storage = require('../lib/storage.js');
const createError = require('http-errors');
const uuidV1 = require('node-uuid').v1;
const Note = module.exports = function(opts){
  this.title = opts.title;
  this.content = opts.content;
  this.id = uuidV1();
}

// Static methods 
Note.fetchAll = function(){
  return storage.availIDs('notes');
}

Note.findById = function(id){
  return storage.fetchItem('notes', id);
}

Note.deleteById = function(id){
  return storage.deleteItem('notes', id);
}

// instance methods
Note.prototype.save = function(){
  if(!this.title || !this.content)
    return Promise.reject(createError(400, 'expected title and content'));
  return storage.createItem('notes', this);
}
