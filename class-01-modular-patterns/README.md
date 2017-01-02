401 JS -- class 01 modular patterns
===

## Node.js Resources
* Read [about node]
* Skim [libuv docs]
* Skim [about v8]

## ES6 Resources
* Read [just another guide to ES6]
* Skim [node and es6]

## NPM Resources
* Read [what is npm] 

## Testing Resources
* Read [a gentle intro to tdd in js]
* Read [chai expect guide]
* Read [mocha getting started]

## Learning Objectives
* Students will be able to set up a node project
* Students will be able to create node modules that conform to the CommonJS module pattern
* Students will be able to construct and run unit tests
* Students will be able explain the TDD philosophy of red, green, refactor

## Overview
#### Seting up a DEV workspace and uing your computer like a DEV
* Before people are developers they often develope many habbits of computer usage they will need to unlearn
* It is highly important that as a developer people keep there file system organized
* If your problem is finding your code, you are in deep trouble!
* Students should set up a directory for all there class work and never deviate from working out side of this dir
* Create a dir stucture for keeping track of you class work
 * **Never put space bars in your file names**
 * **Use `-` or `_` instead. But choose one and stick with it... dont use both!**
 * **Never use capital letters in your filenames, unless its convention (like README.md)**
   * some file systems (like osx) don't keep track of Case and will cause git issues
``` text
 * $HOME/
  | - Desktop/
  | - Downloads/
  | - ...
  | - cf-401/
  |   | - labs/
  |   |   | - lab-00-modular-patterns
  |   |   | - lab-01-modular-testing
  |   |   | - ...
  |   | - lecture-notes/
  |   |   | - class-00-modular-patterns
  |   |   | - class-01-modular-testing
  |   |   | - ...
  ```
#### Node.JS
* Node is an asyncronious event driven framework, for programming in javascript on your opperating system!
* Node only does work when events are triggered.
* When Node has no work to be do Node sleeps
* Node input and output (I/O) is non-blocking 
 * This save developers from having to worry about complicated concurrent programming patterns!
* Node is composed of four main components
 * Node Javascript API - The Javascript interface to all the cool C++ APIs
 * V8 - a javascript runtime
 * libuv - a c library for async io (for the opperating system)
 * Node C++ APIs - the glue between Node's Javascript APIs and libuv
* Node has great documentation online, but make sure you read the docs for the version of node your using
* Nodes documentation has a stability index
 * 0 - depricated - dont use the feature
 * 1 - Experamental - dont use this feature in something you care about
 * 2 - Stable - fine to use
 * 3 - Locked - fine to use

#### NPM 
* NPM is a package manager for installing javascript librarys
* NPM is composed of the following
 * A registry where all the packages are hosted
 * A search engine where you can find packages
 * A CLI where that helps you interface with the registry
 * A for profit organization 

#### Testing and TDD
* TDD is a software development process
* It relies on a very short development cycle
 * It encurages to build small things at a time
* TDD Process
 * you make a plan for the features needed to make a program work
 * you choose a feature to implement
 * you write code that tests that features beahaior
 * the tests now should fail, because the feature has not been implemented
 * you write the feature it self
 * the tests now should pass, because the feature has been implemented
 * you refactor you code to optimze it 
 * the tests should still pass, because the behavior should not have changed
* This is process is called RED GREEN REFACTOR
 * RED - the test is written, but fail
 * GREEN - the test pass because the feature is implemented
 * REFACTOR - the code runs better, and the test still pass

#### Mocha and Chai 
* Mocha is a testing framwork
 * Its job is to facilitate writing and running test
* Chai is an assertion library
 * Its job facilitate writing expectations and then throw errors when the expectations are not met

<!--links -->
[about node]: https://nodejs.org/en/about/
[node and es6]: https://nodejs.org/en/docs/es6/
[libuv docs]: https://github.com/libuv/libuv
[about v8]: https://developers.google.com/v8/
[what is npm]: https://docs.npmjs.com/getting-started/what-is-npm
[a gentle intro to tdd in js]: http://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/
[chai expect guide]: http://chaijs.com/guide/styles/#expect
[mocha getting started]: http://mochajs.org/#getting-started
[just another guide to ES6]: https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f#.wb7rj1gin
