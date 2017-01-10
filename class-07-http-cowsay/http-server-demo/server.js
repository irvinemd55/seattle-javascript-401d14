'use strict';

const url = require('url');
const querystring = require('querystring');
const http = require('http');

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

  console.log('req.method', req.method);
  console.log('req.url', req.url);
  console.log('req.headers', req.headers);

  // setup routes
  //TODO: GET /api/cowsay?text=msiage
  //      respond with cow with the message
  if(req.method === 'GET' && req.url.pathname === '/api/cowsay'){
    if(!req.url.query.text){
      let defulatMessage = 'bad request';
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.write(cowsay.say({text: defulatMessage, f: 'dragon'}));
      res.end();
      return;
    }

    // step 0: set status code
    // step 1: set headers
    // step 2: send your data
    // step 3: end your connection
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(cowsay.say({text: req.url.query.text}));
    res.end();
    return;
  }


  //TODO: POST /api/cowsay with a json body of {text: message}
  //      respond with cow with the message
  if(req.method === 'POST' && req.url.pathname === '/api/cowsay'){
    // parse body as json
    // on data accumulate all the data they send us  in reqBody
    let reqBody = '';
    req.on('data', (buffer) => {
      reqBody += buffer.toString();
    });

    req.on('end', () => {
      try {
        console.log('reqBody', reqBody);
        reqBody = JSON.parse(reqBody);
        console.log('reqBody', reqBody);
        // send 200 response
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write(cowsay.say({text: reqBody.text || 'default text'}));
        res.end();
        return;
      } catch(err){
        console.error(err.message);
        console.error('failed to parse JSON');
        // send 400 response
        let defulatMessage = 'bad request';
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.write(cowsay.say({text: defulatMessage, f: 'dragon'}));
        res.end();
        return;
      }
    })
    return;
  }


  // setup 404 catch all rotute
  res.statusCode = 404;
  res.write('Not Found');
  res.end();

});

server.listen(PORT, () => {
  console.log('server up !!', PORT);
})

