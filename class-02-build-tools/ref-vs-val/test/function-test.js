'use strict';

const expect = require('chai').expect;

describe('playing with functions', function(){
  it('arguments is filled with the values passed into the function', function(){

    function sum(){
      console.log('arugments', arguments);
      return arguments[0] + arguments[1];
    }
    
    expect(sum(101,202)).to.equal(303);
  });

  it('function can not chage printive values outside of their scope', function(){
    function change(a){
      a += 3;
      return a;
    }

    var number = 100;
    var result = change(number);
    //var a = number;
    //a += 3;
     //// a now eq 103
    //result = a
    //// number equals 100
    expect(number).to.not.equal(result);
    expect(result).to.equal(103);
  });

  it('function can change ref properties outside of their  scope', function(){
    function change(arr){
      arr.push(3);
      return arr;
    }

    let nums = [33, 72];
    let result = change(nums);
    expect(nums.length).to.equal(result.length);
  });
  
  it('function can change ref properties outside of their  scope', function(){
    function change(obj){
      obj.lulwat = 'hahah'; 
      return obj;
    }

    let empty = {};
    let result = change(empty);

    //empty = {}
    //obj = arugments[0]
    //obj.lulwat = 'hahah'
    //result = obj
    expect(empty).to.equal(result);
    expect(empty.lulwat).to.equal(result.lulwat);
    expect(empty.lulwat).to.equal('hahah');
  });

  it('param ref change demo', function(){
    function dontChange(obj){
      obj = [];
      obj.push('lul');
      return obj;
    }

    let original = {};
    let result = dontChange(original);

    //original = {}
    //arguments[0] = original
    //obj = arguments[0]

    //obj = []
    //obj = ['lul']
    //result = obj

    expect(result).to.not.equal(original);
  });
});

