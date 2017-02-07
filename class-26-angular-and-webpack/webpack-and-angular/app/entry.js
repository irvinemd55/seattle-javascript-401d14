'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('demoApp', [])
.component('cowsay', { 
  template: require('./cowsay.html'), 
  controller: ['$log', function($log){
    this.$onInit = function(){
      this.title = 'cowsay app';
      this.userInput = '';
      this.getCow = function(text){
        $log.log('test was', text);
        return cowsay.say({text: text || 'say something cool'});
      };
    }
  }],
});
