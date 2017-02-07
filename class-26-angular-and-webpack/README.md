401 JS -- class 26 Angular 
===========================

# Angular Resources
* [Angular Developer Guide]
* [Angular API Docs]

# Learning Objectives
* Setup an angular project that uses a CDN
* Build an app that uses angulars built in templating

# Overview
* Single page applications
 * Routing (compare to PageJS)
 * Templating (compare to handle bars)
 * DOM manipulation (compare to JQuery)
 * Ajax (compare to JQuery and superagent)
 * Clients vs Server
* Angular is a javascript frameworked that can be loaded with a cdn
* Angualr has most of the tools you need to build SPAs 
* CRUD App
 * CRUD on the backend refers to resources in a database
 * CRUD on the frontend refers to components on the DOM
 * Users get an interface to the backend
 * Twitter, Pintrest, Etsy, Facebook, ect 
* Angualr is greate a creating CRUD apps
* Two way data binding
 * Angular's $rootScope will re-render templates on the DOM when values have changed
 * Angular's ng-model directive allows you to dynamicly set the state of a property on the $rootScope, when applyed to an input tag
 * If you have an input tag controling the state of a propery and a template rendering that property's value, you can observer the effect of editing the DOM in real time

[Angular Developer Guide]: https://docs.angularjs.org/guide
[Angular API Docs]: https://docs.angularjs.org/api
