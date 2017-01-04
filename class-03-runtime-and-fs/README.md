401 JS -- class 03 Javascript Runtime and FS modules
===

## JS Runtime Resources
* Watch [what the heck is the event loop anyway]

## fs Module Resources
* Read [fs module docs]

## Learning Objectives

## Overview
#### JS Runtime 
In programin concurrency means that a program can run more than one thing at a time. The ability to do multible things at a time can greatly increase the amount of things your program can do in a given moment in time. However, traditional means of handling concurrency are extreemly complex, and often lead to bugs!

Javascript is a single threaded language. Which means that it can only do a single thing at a time. However, the javascript runtime is setup in such a way that your programs can stil have some concurrent behavior, as long as the concurrent behavior is not implemented in javascript.
* Node Javascript/C++ APIs
 * the node C++ apis are written in such a way that they deal with all the complexities of concurrency for us!
   * this means things like we can read or write data from/to mutible files, or http requests at the same time :)
 * when a javascript function makes a call to node APIs it passes the node API a callback
   * the node api does it thing, then passes its results into the callback, and enques the callback onto the callback queue
* call stack
 * the call stack keeps track of each function that is currently running in javascript
 * each time a function gets invoked it gets pushed onto the callstack
 * each time a function returns it gets poped from the callstack
 * at any given point in time javascript is only running the function on top of the callstack
* event loop
 * the event loop constantly checks if the stack is empty 
 * when the stack is empty it deques any functions on the callback queue and pushes them onto the stack
* callback queue
 * the callback queue holds compltion handling functions from passed node APIs

#### Node asyncronous callback pattern
* node functions that have asyncronous input or output take a callback as there last argument
* node functions that do not pass back data allways have callback functions take the form `(err) => { }`
``` javascript
someNodeFunction('arg', 'arg', function(err) {
  if(err) {
    // handle Error
  }
})
```
* node functions that do pass back data allways have callback functions take the form `(err, data) => { }`
``` javascript 
someNodeFunction('arg', 'arg', function(err, data) {
  if(err) {
    // handle Error
  }
  // do something with the data
})
```

#### fs module
* the fs module is the node interface to the file system
* the fs module has syncronous and asyncronous methods
* if the method does not have sync in its name you can assume its syncronous
* in this class we will **NEVER** use the syncronous methods 
* useful globals
  * `__dirname` - the absolute path to the directory the current file is in
  * `__filename` - the absolute path to the current file
* Create File
 * `fs.writeFile(filepath, data [, options], callback);`
 * the callback should take the form `(Error) => {}`
``` javascript
fs.writeFile(`${__dirname}/hello-wolrd.txt`, 'hello from fs!', (err) => {
  if(err) return console.error(err.message);
  console.log('write success');
});
```
* Read File
 * `fs.readFile(filepath [, options], callback);`
 * the callback should take the form `(Error, Buffer) => {}`

``` javascript
fs.readFile(`${__dirname}/hello-wolrd.txt`, (err, data) => {
  if(err) return console.error(err.message);
  console.log(data.toString());
});
```
* Delete File
 * `fs.unlink(filepath, callback);`
 * the callback should take the form `(Error) => {}`
``` javascript
fs.unlink(`${__dirname}/hello-wolrd.txt`, (err) => {
  if(err) return console.error(err.message);
  console.log('delete success');
});
```
* Other useful methods
 * `readdir` - reads the contents of a directory
 * `mkdir` - create a directory
 * `stat` - get information about a file/dir/link
 * `watch` - watch a file for changes

<!--links -->
[what the heck is the event loop anyway]: https://www.youtube.com/watch?v=8aGhZQkoFbQ
[fs module docs]: https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
