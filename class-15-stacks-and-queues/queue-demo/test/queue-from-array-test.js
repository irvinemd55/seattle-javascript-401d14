'use strict';

const expect = require('chai').expect;
const Queue = require('../queue-from-array.js');


describe('testing queue-from-array', function(){
  it('should enque and deque stuff', function(){
    let q = new Queue();
    expect(q.length).to.equal(0);
    q.enqueue(3);
    expect(q.length).to.equal(1);
    expect(q[0]).to.equal(3);
  })

  it('should enque and deque stuff', function(){
    let q = new Queue();
    expect(q.length).to.equal(0);
    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);
    expect(q.length).to.equal(3);
    expect(q[0]).to.equal(3);
    expect(q[1]).to.equal(2);
    expect(q[2]).to.equal(1);
  })

  it('should deque stuff', function(){
    let q = new Queue();
    expect(q.length).to.equal(0);
    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);
    expect(q.length).to.equal(3);
    expect(q.dequeue()).to.equal(3);
    expect(q.dequeue()).to.equal(2);
    expect(q.dequeue()).to.equal(1);
  })
});
