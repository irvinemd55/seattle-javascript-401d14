'use strict';

const expect = require('chai').expect;
const goodbye = require('../lib/goodbye.js');

describe('testing module goodbye.js', function(){
  describe('testing method cya', function(){
    it('should return "sea ya later slug"', function(){
      let result = goodbye.cya('slug');
      expect(result).to.equal('sea ya later slug');
    });
  });

  describe('testing method tatatu', function(){
    it('should return "sea ya later slug"', function(){
      let result = goodbye.tatatu('slug');
      expect(result).to.equal('tata fernowslug');
    });
  });
});
