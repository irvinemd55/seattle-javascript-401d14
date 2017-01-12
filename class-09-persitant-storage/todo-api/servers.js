'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const Router = require('./lib/router.js');
let router = new Router();

const noteRouter = require('./router/note-router.js');

noteRouter(router);

const server = http.createServer(router.route());

server.listen(PORT, () => {
  console.log('server up (::)-<-<',PORT);
});
