'use strict';

const chai = require('chai');
const greet = require('../lib/greet.js');
const expect = chai.expect;

describe('testing module greet.js', function(){
  describe('with valid inputs', function(){
    it('should return "hello world"', function(){
      expect(greet('world')).to.equal('hello world');
    });
    
    it('should return "hello slug"', function(){
      expect(greet('slug')).to.equal('hello slug');
    });
  });

  describe('with invalid inputs', function(){
    it('should throw an error', function(){
      expect(greet).to.throw(Error);
    });
  });
});
