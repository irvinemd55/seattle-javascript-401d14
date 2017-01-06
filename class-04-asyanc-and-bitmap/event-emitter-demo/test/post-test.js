'use strict';

const expect = require('chai').expect;

const pos = require('../pos.js');

describe('testing pos', function(){
  it('testing event getCreditCard', function(done){
    pos.emit('getCreditCard', function(err, data){
      expect(err).to.equal(null);
      expect(data).to.equal(2);
      done();
    });
  });
});
