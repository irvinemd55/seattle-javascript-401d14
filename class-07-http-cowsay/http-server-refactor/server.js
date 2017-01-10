'use strict';

const url = require('url');
const querystring = require('querystring');
const http = require('http');
const myParseBody = require('./lib/my-parse-body.js');
const badRequestHandler = require('./lib/bad-request-handler.js');

const cowsay = require('cowsay');

const PORT = process.env.PORT || 3000;
const server = http.createServer(function(req, res){
  // parse url and query
  // url.parse will take a string like "/api/cowsay?text=lulwat"
  // and turn it into an obejct wit
  // { pathname: /api/cowsay
  //   query: text=lulwat
  //   ...
  // }
  req.url = url.parse(req.url);

  // querystring.parse turns a string like id=wat&text=slug
  // int to an object like
  // { id: 'wat',
  //   text: 'slug' }
  req.url.query = querystring.parse(req.url.query);

  //console.log('req.method', req.method);
  //console.log('req.url', req.url);
  //console.log('req.headers', req.headers);

  // setup routes
  //TODO: GET /api/cowsay?text=msiage
  //      respond with cow with the message
  if(req.method === 'GET' && req.url.pathname === '/api/cowsay'){
    if(!req.url.query.text){
      return badRequestHandler(res);
    }

    // step 0: set status code
    // step 1: set headers
    // step 2: send your data
    // step 3: end your connection
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(genorateCowsayHTML(req.url.query.text));
    res.end();
    return;
  }

  function genorateCowsayHTML(text){
    console.log('hello world');
    let cowsayConfig = { text: text || 'default text' };
    return `<!DOCTYPE html>
    <html>
    <body>
    <h1> cowsay </h1>
    <pre>
    ${cowsay.say(cowsayConfig)}
    </pre>
    </body>
    </html>`;
  }


  //TODO: POST /api/cowsay with a json body of {text: message}
  //      respond with cow with the message
  if(req.method === 'POST' && req.url.pathname === '/api/cowsay'){
    // parse body as json
    // on data accumulate all the data they send us  in reqBody

    // returns inside callbacks are ususally just to stop
    // execution
    return myParseBody(req, function(err, body){
      if (err){
        return badRequestHandler(res);
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write(cowsay.say({text: body.text || 'default text'}));
      res.end();
    });
  }

  // setup 404 catch all rotute
  res.statusCode = 404;
  res.write('Not Found');
  res.end();

});

server.listen(PORT, () => {
  console.log('server up !!', PORT);
})

