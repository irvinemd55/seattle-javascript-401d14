'use strict';

// load the .env file
require('dotenv').load();

// require node modules
// require npm modules
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const debug = require('debug')('noteapp:server');

// require app modules
const noteRouter = require('./route/note-router.js');

// create constant vars
const app = express();

// run app middleware
app.use(cors());
app.use(morgan('dev'));

// register routers
app.use(noteRouter);

// error middleware
app.use(function(err, req, res, next){
  debug('error middleware');
  console.error(err.message);
  if(err.status)
    res.status(err.status).send();
  res.status(500).send();
});

// start server
app.listen(process.env.PORT, () => {
  debug('stratring server');
  console.log('server up', process.env.PORT);
});
