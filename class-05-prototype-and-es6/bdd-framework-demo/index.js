'use strict';

const expect = require('chai').expect;

// create a steate for holding it/before/after callbacks
let state = {
  beforeCallbacks: [],
  afterCallbacks: [],
  itCallbacks: [],
}

function before(callback){
  state.beforeCallbacks.push(callback);
}

function after(callback){
  state.afterCallbacks.push(callback);
}

function it(message, callback){
  state.itCallbacks.push({message, callback})
}

function describe(message, callback){
  console.log(message);
  
  // give the describe callback an empty context
  callback.call({});
  
  state.beforeCallbacks.forEach((callback) => callback())

  state.itCallbacks.forEach((test) => {
    console.log(test.message);
    try {
      // here we can run code that throws errors safely
      test.callback();
      console.log('success');
    } catch(error){
      console.log(error);
    }
  })

  state.afterCallbacks.forEach((callback) => callback())
}






//describe('testing our bdd framework', function(){
  //before(function(){
    //console.log('this should run first');
  //});


  //it('should not crash but log an error', function(){
    //console.log('now in the it callback');
    //throw new Error('coool beans');
  //});

  //it('should succed and log success', function(){
    //console.log('now in the it callback');
  //});

  //after(function(){
    //console.log('this should run last');
  //});

  //before(function(){
    //console.log('this should run second');
  //});

//});


//describe('testing bind', function(){
  //this.lul = 'cool beans';

  //before((function(){
    //this.name = 'hello';
  //}).bind(this));

  //it('should have access to this.name and this.lul', (function(){
    //expect(this.name).to.equal('hello');    
    //expect(this.lul).to.equal('cool beans');    
  //}).bind(this));

//});

describe('testing arrow functions', function(){
  this.lul = 'cool beans';

  before(() => {
    this.name = 'hello';

    let logThisName = (function(){
      console.log('this.name', this.name)
    }).bind(this)

    logThisName();

    let logName = () => { console.log('this.name', this.name)};
    logName();
  });

  it('should have access to this.name and this.lul', () => {
    expect(this.name).to.equal('hello');    
    expect(this.lul).to.equal('cool beans');    
  });
});






