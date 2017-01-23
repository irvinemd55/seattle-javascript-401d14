'use strict'

const expect = require('chai').expect;
const Stack  = require('../stack.js');

describe('testing Stack', function(){
  describe('testing push method', function(){
    it('should push the number 3 to the stack', function(){
      let stack = new Stack(); 
      expect(stack.top).to.equal(0);
      stack.push(3);
      expect(stack.top).to.equal(1);
      expect(stack[0]).to.equal(3);
    });

    it('should push 3 7 11 into the stack', function(){
      let stack = new Stack();
      stack.push(3);
      stack.push(7);
      stack.push(11);
      expect(stack.top).to.equal(3);
      expect(stack[0]).to.equal(3);
      expect(stack[1]).to.equal(7);
      expect(stack[2]).to.equal(11);
    });
  });

  describe('testing pop', function(){
    it('should return three', () => {
      let stack = new Stack();
      stack.push(3);
      expect(stack.pop()).to.equal(3);
      expect(stack.top).to.equal(0);
    })

    it('should return null', () => {
      let stack = new Stack();
      expect(stack.pop()).to.equal(null);
      expect(stack.top).to.equal(0);
    });

    it('should return 11', () => {
      let stack = new Stack();
      stack.push(3);
      stack.push(7);
      stack.push(11);
      expect(stack.pop()).to.equal(11)
      expect(stack.top).to.equal(2);
    })
  });
});

