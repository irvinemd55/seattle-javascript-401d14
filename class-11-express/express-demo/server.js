'use strict';

// require node modules
// require npm modules
const express = require('express');
// require app modules
const noteRouter = require('./route/note-router.js');
// create constant vars
const PORT = process.env.PORT || 3000;
const app = express();
// run app middleware
// register routers
app.use(noteRouter);
// error middleware
app.use(function(err, req, res, next){
  console.error(err.message);
  if(err.status)
    res.status(err.status).send();
  res.status(500).send();
})

// start server
app.listen(PORT, () => {
  console.log('server up', PORT);
});
