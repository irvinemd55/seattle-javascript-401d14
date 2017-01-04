'use strict';

const expect = require('chai').expect;

const index = require('../index.js');

describe('testing CLI', function(){
  describe('with valid inputs', function(){
    it('should expect "Hello, nodejs"', function(){
      let argv = [ '/path/to/node', '/path/to/index.js', 'nodejs' ];
      expect(index(argv)).to.equal('Hello, nodejs');
    });
  })

  describe('with invalid inputs', function(){
    it('should return "Usage Error: must provide a name"', function(){
      let argv = [ '/path/to/node', '/path/to/index.js'];
      expect(index(argv)).to.equal('Usage Error: must provide name');
    });
  });

});
