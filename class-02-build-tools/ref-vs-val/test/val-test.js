'use strict';

const expect = require('chai').expect;

describe('testing primitive assignment', function(){
  // primitve data types are passed by value 
  // numbers, booleans, strings

  it('abc should not equal xzy', function(){
    let abc = 3;
    let xyz = abc;
    xyz = 4;
    expect(abc).to.not.equal(xyz);
  });

  it('abc should not equal xzy', function(){
    let abc = "hello world";
    let xyz = abc;
    xyz = "lulwat";
    expect(abc).to.not.equal(xyz);
  });

});
