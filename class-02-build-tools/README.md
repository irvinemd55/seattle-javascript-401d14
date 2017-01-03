401 JS -- class 02 gulp, npm, ref vs val, errors
===

## package.json Resources
* Read [about package.json]

## Gulp Resources
* Skim [gulp on github]
* Skim [gulp api docs]

## Error Resources
* Read [node Error docs]

## Learning Objectives
<!-- unordered list of learning objectives --> 

## Overview
#### package.json
* a package.json is a config file used for configuring metadata about a node project
* It only requires a name and version filed, but a typical package.json has much more inforamtion
* dependencies vs dev-dependencies
 * dependencies - a list of packages required to run the main program
 * dev-dependencies - a list of packages required to work on the project
* npm scripts are used to manage common tasks for working a node project  
* Setting up a project
 * create a new directory named after your project
 * navagate inside your directory
 * run `npm init` and answer the questions
 * now you should find a package.json inside your current directory :)

#### Gulp 
* Gulp is a tool that helps you automate time-consuming tasks that are a part of your dev workflow
* Gulp is configured in pure javascript, so you can use any node module in a gulp task
* Gulp has a awesome plugin ecosystem

#### Node Errors
###### Error 
* a generic error 
* `.stack` - a **String** describe the point in the code where the `Error` was instantiated
* `.message` - a **String** description set by calling the `new Error(message)`  

###### ReferenceError
* indicates that an attempt is being made to access a variable that is not defined
* `ReferenceError` is a subclass of `Error`  

###### SyntaxError
* indicates a program is not valid javascript
* `SyntaxError` is a subclass of `Error`  

###### TypeError
* indicates that a provided argument is not an allowable type
* `TypeError` is a subclass of `Error`    

###### SystemError
* `.code` - A **String** describing the error code
* `.errno` - A **Number** describing the error code
* `.syscall` - A **String** describing the syscall that failed
* `SystemError` is **not** a subclass of `Error`
* Common System Errors
 * `EACCESS` - An attempt to access a file without the right permissions
 * `EADDRINUSE` - An attempt to start a server on a PORT that is allready in use
 * `ECONNREFUSED` - A connection was deliberatly refused by the target machine
 * `ECONNRESET` - A connection was forcibly closed by a peer
 * `EEXIST` - A file exists and the attempted action required that it didnt
 * `EISDIR` - An action expected to act on a file but found a directory
 * `EMFILE` - To many files were open for your operating system to handle
 * `ENOENT` - An action expected a file, but did not find one
 * `ENOTDIR` - An action expected a directory, but found something else
 * `ENOTEMPTY` - An action expected an empty directory, but found one with data in it
 * `EPERM` - An attempt to do something that you currently dont have permissions to do
 * `EPIPE` - An attempt to write data to a connection that had been closed

###### Throw Try Catch
* If an un handled error is thrown in javascript the program will crash
* try catch blocks allow you to safely throw a an error and handle it
``` javascript
  // call an function that does not exist and the program will crash 
  let data = {};
  data.name();
```
``` javascript
// call a function that does not exists in a try block and handle the error in a catch block
try {
  let data = {};
  data.name();
} catch (err) {
  console.error(err.message);
}
```  
``` javascript
// explicly create and throw a custom error
try {
  let data = {name: 'adalove'};
  if (data.name !== 'ada lovelace')
    throw new Error('expected name to be "ada lovelace"');
} catch(err) {
  console.error(err.message);
}
```
### Pass by reference vs Pass by value
``` javascript
'use strict';

const expect = require('chai').expect;

describe('testing behavior of data passed by value', function() {
  describe('testing that numbers are passed by value', function(){
    it('abc should not change when xyz is changed', () =>  {
      let abc = 2;

      let xyz = abc;
      xyz += 10;
      expect(abc).to.equal(2);
      expect(xyz).to.equal(12);
    });
  });

  describe('testing that strings are passed by value', function(){
    it('abc should not change when xyz is changed', () =>  {
      let abc = 'hello';
      let xyz = abc;
      xyz += ' world';
      expect(abc).to.equal('hello');
      expect(xyz).to.equal('hello world');
    });
  });
 
  describe('testing that booleans are passed by value', function(){
    it('abc should not change when xyz is changed', () =>  {
      let abc = true;
      let xyz = abc;
      xyz = !xyz;
      expect(abc).to.equal(true);
      expect(xyz).to.equal(false);
    });
  });

  describe('testing that objects are passed by reference', function(){
    it('abc should not change when xyz is mutated', () =>  {
      let abc = {
        info: 'this is useful',
      };

      // reference abc with xzy
      let xyz = abc;
      // mutate xyz
      xyz.info = 'look how interesting';
      xyz.data = 6000;

      expect(abc).to.equal(xyz);
      expect(abc.info).to.equal('look how interesting');
      expect(abc.data).to.equal(6000);
      expect(xyz.info).to.equal('look how interesting');
      expect(xyz.data).to.equal(6000);
    });
  });

  describe('testing that objects are passed by value', function(){
    it('abc should not change when xyz is reassigned', () =>  {
      let abc = {
        info: 'this is useful',
      };

      // reference abc with xzy
      let xyz = abc;
      
      // reassign xyz
      xyz = {
        info: 'cool er than cool',
      }

      expect(abc).to.not.equal(xyz);
      expect(abc.info).to.equal('this is useful');
      expect(xyz.info).to.equal('cool er than cool');
    });
  });
});
```

<!--links -->
[node Error docs]: https://nodejs.org/dist/latest-v6.x/docs/api/errors.html
[about package.json]: https://docs.npmjs.com/files/package.json
[gulp api docs]: https://github.com/gulpjs/gulp/blob/master/docs/API.md
[gulp on github]: https://github.com/gulpjs/gulp
