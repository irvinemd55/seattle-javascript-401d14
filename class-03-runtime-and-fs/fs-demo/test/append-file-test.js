'use strict';

const fs = require('fs');
const expect = require('chai').expect;

const appendFile = require('../lib/append-file.js');

let inputFile = `${__dirname}/example.txt`;
let originalText = 'one two three'
let outputFile = `${__dirname}/output.txt`;

describe('testing module appendFile', function(){
  describe('with valid inputs', function(){
    before(function(done){
      fs.writeFile(inputFile, originalText, function(err){
        if (err) done(err);
        done();
      });
    });

    after(function(done){
      fs.unlink(inputFile, function(err){
        if (err) done(err);
        fs.unlink(outputFile, function(err){
          if (err) done(err);
          done();
        });
      });
    });


    // for async testing your it function must have a done callback
    it('should return a vaild message', function(done){
      let message = 'hello world';

      // call our function so that we can test it
      appendFile(inputFile, outputFile, message, function(err, data){

        // if there was an error call done(err) to tell mocha the test failed
        // dont execute any futher if the its allready failed
        if(err) return done(err);

        // run our assertions
        expect(data).to.equal(originalText + message);
        
        // tell mocha the test has finished, so it can run the next test
        // if you dont do this mocha will assume the test failed and  you
        // will get a timeout error
        done();
      });
    });

  });
});
