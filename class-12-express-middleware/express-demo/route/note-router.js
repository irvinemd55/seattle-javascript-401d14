'use strict';
// in this module we will manage all of the routes for the Note resource

// npm modules
const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const noteRouter = module.exports = new Router();
const debug = require('debug')('noteapp:note-router');

// app modules
const Note = require('../model/note.js');

// route is an enpoint + METHOD
// json parser will parse the body of the clients requests (using JSON.parse())
// and respond with a 400 if it fails
// if it succeeds it will put the parsed body on req.body
noteRouter.post('/api/notes', jsonParser, function(req, res, next){
  debug('POST /api/notes');
  new Note(req.body).save()
  .then(note => res.json(note))
  .catch(err => next(err));
});

noteRouter.get('/api/notes/:id', function(req, res, next){
  debug('GET /api/notes/:id');
  Note.findById(req.params.id)
  .then(note => res.json(note))
  .catch(next);
})

noteRouter.get('/api/notes', function(req, res, next){
  debug('GET /api/notes');
  Note.fetchAll()
  .then(noteIds => res.json(noteIds))
  .catch(next);
})
