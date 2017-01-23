'use strict';

// load .env
require('dotenv').load();
// node modules
// npm modules
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const debug = require('debug')('cfgram:server');

// app modules
// module constants
const app = express();
// setup db
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI);
// app middlleware
app.use(cors());
app.use(morgan('dev'));
// app routes
// app error middlware
app.use(function(err, req, res, next){
  console.log(err.message);
  if(err.status){
    res.status(err.status).send();
    return;
  }

  if (err.name === 'ValidationError'){
    res.status(400).send();
    return;
  }

  res.status(500).send();
});

// start server
app.listen(process.env.PORT , ()=> {
  console.log('server up ::', process.env.PORT);
});
