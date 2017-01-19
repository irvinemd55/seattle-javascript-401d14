'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const debug = require('debug')('noteapp:note-router');

const Note = require('../model/note.js');
const List = require('../model/list.js');

const noteRouter = module.exports = new Router();

noteRouter.post('/api/notes', jsonParser, function(req, res, next){
  new Note(req.body).save()
  .then(note => res.json(note))
  .catch(next);
});

noteRouter.get('/api/notes/:id', function(req, res, next){
  Note.findById(req.params.id)
  .then(note => res.json(note))
  .catch(next);
})
