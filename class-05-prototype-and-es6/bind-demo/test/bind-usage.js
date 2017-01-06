'use strict';

const expect = require('chai').expect;

describe('using bind with a callback', function(){

  before(function(){
    this.lul = 'hello';
  });

  it('callback should have same context as describe', function(){
    console.log('');
    expect(this.lul).to.equal('hell')
  });

});
