'use strict';
// in this module we will manage all of the routes for the Note resource

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const noteRouter = module.exports = new Router();

const Note = require('../model/note.js');

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

noteRouter.get('/api/notes', function(req, res, next){
  Note.fetchAll()
  .then(noteIds => res.json(noteIds))
  .catch(next);
})
