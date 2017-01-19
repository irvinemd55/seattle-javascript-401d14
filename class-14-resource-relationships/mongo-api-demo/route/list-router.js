'use strict';

const Router = require('express').Router;
const List = require('../model/list.js');
const jsonParser = require('body-parser').json();
const createError = require('http-errors');
const debug = require('debug')('noteapp:list-router');

const listRouter = module.exports = new Router();

listRouter.post('/api/lists', jsonParser, function(req, res, next){
  debug('POST /api/lists');
  new List(req.body).save()
  .then(list => res.json(list))
  .catch(next);
});

listRouter.get('/api/lists/:id', function(req, res, next){
  debug('GET /api/lists/:id');
  List.findById(req.params.id)
  .populate('notes')
  .then(list => res.json(list))
  .catch(err => next(createError(404, err.message)));
});

