'use strict';

const expect = require('chai').expect;

describe('functional programming demo', function(){
  it('should have a side effect', function(){
    // SIDE EFFECTS ARE NOT FUNCTIONAL
    const abc = {};
    let wat = {};
    let lul;

    expect(abc.name).to.equal(undefined);
    expect(wat.name).to.equal(undefined);
    expect(lul).to.equal(undefined);
    addNameToAbc(wat);
    expect(abc.name).to.equal('hello');
    expect(wat.age).to.equal(32);
    expect(lul).to.equal(3);

    function addNameToAbc(obj){
      abc.name = 'hello';
      lul = 3;
      obj.age = 32;
    }
  });


  it('map does not have side effects', () => {
    let original = [2,3,4];
    let result = original.map(num => num * num);
    // the original does not change
    // so map does not have side efffects
    expect(original).to.deep.equal([2,3,4]);
    expect(result).to.deep.equal([4,9, 16]);
  });

  it('our map function should not have side effects', () => {
    let nums = [3,4,5];
    var after = map(nums, ( value, index, whole) => {
      expect(whole).to.deep.equal(nums);
      return value + index;
    });

    expect(nums).to.deep.equal([3,4,5]);
    expect(after).to.deep.equal([3,5,7]);

    function map(input, callback){
      var result = [];
      for(var i = 0;i<input.length; i++){
        result.push(callback(input[i], i, input));
      }
      return result;
    }
  });


  it('loop recursion', function(){
    var count = 0;

    var data = [3,4,5,6];
    loop(0, data.length, function(i){
      count++;
    })

    expect(count).to.equal(data.length);

    function loop(start, finish, callback){
      // break condition
      if(start >= finish) return;
      callback(start);
      loop(start + 1, finish, callback);
    }

  });


  it('should map to the absolute value of each num', () => {

    let absMap = input => input.map(num => Math.abs(num));
    let result = absMap([-100, -120, -2]);
    expect(result).to.deep.equal([100, 120, 2]);
  })

  it('should create a object with the method say hello', () => {
    // CONSTRUCTOR
    function User(name){
      this.name = name;
    }
  
    User.prototype.getName = function(){
      return this.name;
    }

    let blorg = new User('blorg');
    expect(blorg.getName()).to.equal('blorg');

    // FACTORY FUNCTION
    function createUser(name){
      let proto = {};

      proto.getName = function(){
        return this.name;
      }

      let result = Object.create(proto);

      result.name = name;
      return result;
    }

    let slug = createUser('slug');
    expect(slug.name).to.equal('slug');
    expect(slug.getName()).to.equal('slug');

  })
});


