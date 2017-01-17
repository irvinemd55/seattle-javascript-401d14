'use strict';

const uuidV1 = require('node-uuid').v1;
const createError = require('http-errors');
const storage = require('../lib/storage.js');
const debug = require('debug')('noteapp:note');

const Note = module.exports = function(opts){
  debug('note constructor');
  this.title = opts.title;
  this.content = opts.content;
  this.id = uuidV1();
}

// Static methods 
Note.fetchAll = function(){
  debug('fetchAll');
  return storage.availIDs('notes');
}

Note.findById = function(id){
  debug('findById');
  return storage.fetchItem('notes', id);
}

Note.deleteById = function(id){
  debug('deleteById');
  return storage.deleteItem('notes', id);
}

// instance methods
Note.prototype.save = function(){
  debug('note.save()');
  if(!this.title || !this.content || !this.id)
    return Promise.reject(createError(400, 'expected title and content'));
  return storage.createItem('notes', this);
}
