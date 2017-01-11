401 JS -- class 08 REST
===

## HTTP Resources
* Read [What is a rest api?]

## Learning Objectives
* Students will be able to explain what a HTTP RESTful is
* Stuendts will be able to implent a router for managing server code

## Overview
#### REST
* uniform interface
 * resources are identified by urls
 * actions are identified by methods
* stateless
 * the client and server to not maintain a connection for longer than request/response
* cacheable
 * responses must implicity or explicity define themselfs as cacheable
* client-server
 * using client server architecture for thoughfully deviding seporations of concerns
 * servers store data 
 * clients mainain user state and create the user interface
* layerd system
 * clients can not tell how the backend is implemented
 * the server could be one server or it could be 1000, but the interface is the same

#### In-Memory Storage
* Our rest api's need a place to store data when it is created, one model is to store the data in memory
* Storing data in memory is realy fast but has many limitations
 * If the server is turned off, all data will be lost
 * The server will not be able to hold more data that its available memory (often 512MB on heroku)
* Many applications use in-memory for temporary caching

#### Router
* server side routers are librarys that help manage code for requests to specific route
* we use them to modularize our server side code
``` javscript
router.get('/api/notes', function(req, res){
  // handle respone for a GET request to '/api/notes'
});

router.post('/api/signup', function(req, res){
  // handle respone for a POSTrequest to '/api/signup'
});
```

<!--links -->
[What is a rest api?]: https://medium.com/@lazlojuly/what-is-a-restful-api-fabb8dc2afeb#.nm7uiiltt
