'use strict';

function one(){
  console.log('enter one');
  two();
};

function two(){
  console.log('enter two');
  three();
};

function three(){
  console.log('enter three');
};

one();
