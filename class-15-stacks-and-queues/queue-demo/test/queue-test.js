'use strict';

const expect = require('chai').expect;
const Queue = require('../queue.js');

describe('testing queue', function(){
  describe('testing enqueue', function(){
    it('sould enqueue the number 7', function(){
      let abc = new Queue();
      expect(abc.tail).to.equal(0);
      abc.enqueue(7);
      expect(abc.tail).to.equal(1);
      expect(abc[0]).to.equal(7);
    });

    it('sould enqueue the number 7', function(){
      let abc = new Queue();
      expect(abc.tail).to.equal(0);
      abc.enqueue(7);
      abc.enqueue(23);
      abc.enqueue(45);
      expect(abc.tail).to.equal(3);
      expect(abc[0]).to.equal(7);
      expect(abc[1]).to.equal(23);
      expect(abc[2]).to.equal(45);
    });
  });

  describe('testing dequeue', function(){
    it('should dequeue the number 7', () => {
      let abc = new Queue();
      abc.enqueue(7);
      expect(abc.head).to.equal(0);
      expect(abc.dequeue()).to.equal(7);
      expect(abc.head).to.equal(1);
      expect(abc.dequeue()).to.equal(null);
      expect(abc.head).to.equal(1);
    });

    it('should return null', () => {
      let abc = new Queue();
      expect(abc.dequeue()).to.equal(null);
      expect(abc.dequeue()).to.equal(null);
      expect(abc.dequeue()).to.equal(null);
      expect(abc.dequeue()).to.equal(null);
      expect(abc.head).to.equal(0);
    });

    it('should dequeue the number 88', () => {
      let abc = new Queue();
      abc.enqueue(88);
      abc.enqueue(7);
      abc.enqueue(3);
      abc.enqueue(5);
      expect(abc.head).to.equal(0);
      expect(abc.dequeue()).to.equal(88);
      expect(abc.head).to.equal(1);
      expect(abc.dequeue()).to.equal(7);
      expect(abc.head).to.equal(2);
    });
  });
});
