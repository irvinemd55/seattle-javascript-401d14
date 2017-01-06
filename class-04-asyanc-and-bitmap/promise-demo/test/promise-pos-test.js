'use strict';

const expect = require('chai').expect;
const pos = require('../promise-pos.js');

describe('testing promise-pos', function(){
  describe('testing method #getCreditCard', function(){
    it('should resolve 42', function(done){
      pos.getCreditCard()
      .then(function(creditCard){
        expect(creditCard).to.equal(42); 
        done();
      })
      .catch(done);
    });
  });

  describe('testing method #chargeCard', function(){
    describe('with valid input', function(){
      it('should resolve "$33"', function(done){
        pos.chargeCard(100)
        .then(function(amount){
          expect(amount).to.equal('$33');
          done();
        })
        .catch(done);
      })
    });

    describe('with invalid input', function(){
      it('should reject an error', function(done){
        pos.chargeCard()
        .then(done)
        .catch(function(err){
          expect(!!err).to.equal(true);
          expect(err.message).to.equal('ut oh');
          done();
        });
      })
    });
  });
});
