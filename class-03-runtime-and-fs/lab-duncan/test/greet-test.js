'use strict';

// node modules
// npm modules
const expect = require('chai').expect;
// app modules
const greet = require('../lib/greet.js');
// module constants
// module logic 

describe('testing module greet.js', function(){
  describe('with valid input', function(){
    it('should return "Hello, javascript"', function(){
      expect(greet('javascript')).to.equal('Hello, javascript');
    });
  });

  describe('with invalid input', function(){
    it('should return null', function(){
      expect(greet(34)).to.equal(null);
    });

    it('should return null', function(){
      expect(greet([])).to.equal(null);
    });

    it('should return null', function(){
      expect(greet()).to.equal(null);
    });
  });
});
