'use strict';

const expect = require('chai').expect;

describe('testing that objects are passed by reference', function(){
  it('abc.name should equal xyz.name', function(){
    let abc = {
      name: 'slug', 
    };

    let xyz = abc;
    xyz.name = 'hello world';
    expect(abc.name).to.equal(xyz.name);

  });

  it('abc should equal xzy', function(){
    let abc = { name: 'slug' };
    let xyz = abc;
    expect(abc).to.equal(xyz);
  });

  it('abc should not equal xzy', function(){
    let abc = { name: 'slug' };
    let xyz = abc;
    xyz = {};

    expect(abc).to.not.equal(xyz);
  });


});
