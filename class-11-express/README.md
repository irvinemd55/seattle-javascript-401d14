401 JS -- class 10 express
===

## Resources
* Read [history of databases]

## Learning Objectives
* Students will be able to implement a rest api using express

## Express resources

## Overview
#### Express
* express is a minimal server side framework for building web apps
* each request made is passed through a chain of middleware until some middleware responds to the user
* express middleware are functions that have access to the request and response objects, as well as a next function
* expres routers are used to apply express middleware to specific routes (METHOD + ENDPOINT)
* there are two main types of middleware in experss (normal middleware, and error middleware)

* 
``` javascript
// express middleware
function(req, res, next){
  if(req.headers.secret == 'top secret')
    next();
  else 
    next(new Error('access denied');
}

function(req, res, next){  
}
```

``` javascript
// express error middleware
function(err, req, res, next){
  console.error(err);
  if(err.message = 'bad request')
    res.status(400).send();
  if(err.message = 'access denied')
    res.status(401).send();
  if(err.message = 'not found')
    res.status(404).send();
  res.status(500).send());
}
``` 



<!--links -->
[history of databases]: http://avant.org/project/history-of-databases/
