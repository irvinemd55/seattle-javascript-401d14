'use strict';

const expect = require('chai').expect

function changeName(name){
  this.name = name;
}

describe('playing round with bind', function(){
  it('should change the object', function(){
    let slug = {
      name: 'slug',
    };
  
    let changeSlug = changeName.bind(slug);

    expect(slug.name).to.equal('slug');
    changeSlug('goo');
    expect(slug.name).to.equal('goo');
    changeSlug('wat');
    expect(slug.name).to.equal('wat');

  });
});
