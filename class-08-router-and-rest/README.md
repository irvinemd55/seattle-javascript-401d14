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

<!--links -->
[What is a rest api?]: https://medium.com/@lazlojuly/what-is-a-restful-api-fabb8dc2afeb#.nm7uiiltt
