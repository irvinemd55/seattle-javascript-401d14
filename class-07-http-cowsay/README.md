401 JS -- class 07 HTTP
===

## HTTP Resources
* Skim [Nodejs http module]
* Skim [Wiki list of header fields]

## Learning Objectives
* Students will be able to identify qualitys of the HTTP protocol
* Students will be able to implement an HTTP server using Nodejs

## Overview
#### HTTP
* **HTTP** stands for hyper text transport protocol
* a statless `request/responce` protocol in the `client/server` computing model
* HTTP requests have
 * **METHOD** - used to indicate the type of action preformed on the resource
 * **URL** - used to indicate which resource to affect
 * **HTTP VERSION** - usually `HTTP/1.1`
 * **HEADERS** - used for optional request configuration
 * **MESSAGE BODY** - used with some **METHODS** to pass data to the server

* HTTP responses have
 * **HTTP VERSION** - usually `HTTP/1.1`
 * **STATUS CODE** - a number to indicate the requests success
 * **STATUS MESSAGE** - a name associated with the **STATUS CODE**
 * **HEADERS** - used for optional responses configuration
 * **MESSAGE BODY** - used to pass data back to the client

<!--links -->
[Nodejs http module]: https://nodejs.org/api/http.html
[Wiki list of header fields]: https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields
