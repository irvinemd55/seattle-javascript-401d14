'use strict';

const expect = require('chai').expect;

describe('testing out es6 features', function(){
  it('testing out var vs let', () => {
    if (true){
      var x = 3;
      let y = 4;
      const z = 10;
      expect(y).to.equal(4);
      expect(z).to.equal(10); 
      //z = 11; // can not re assign a const 
    }
    expect(x).to.equal(3);
    //expect(z).to.equal(10); // not defined
    //expect(y).to.equal(4); // not defined
  });

  // typeof is not es6
  it('whats up with typeof', () => {
    expect(typeof 'hello').to.equal('string');
    expect(typeof 23).to.equal('number');
    expect(typeof {}).to.equal('object');
    expect(typeof []).to.equal('object');
    expect(typeof describe).to.equal('function');
  });

  it('whats up with template literals', () => {
    let name = 'slug';
    let location = 'beach';
    //let where = name + ' is at the ' + location + '.'; // old way

    let where = `${name} is at the ${location}.`;

    let html = `<div>
  <h1> ${name} soo cool </h1> 
  <h3> ${location} </h3>
</div>`;

    console.log(html);

    expect(where).to.equal('slug is at the beach.');
  });


  it('whats up with Map objects', function(){
    let slug = { name: 'slug' };
    let slugAge  = { age: 2669 };
    let bugz = { name: 'bugz' };
    let bugzAge = { age: 34 };

    let example = new Map();

    example.set(slug, slugAge);
    console.log(example);

    example.set(bugz, bugzAge);
    console.log(example);

    expect(example.get(slug)).to.equal(slugAge);
    expect(example.get(bugz)).to.equal(bugzAge);
  });

  it('whats up with destructive assignment', () => {
    let story = {
      title: 'hello', 
      content: 'this is cool',
    }
    
    let {title, content} = story;

    expect(title).to.equal(story.title);
    expect(content).to.equal(story.content);
  });


  it('whats up with default paramiter', () => {
    function greet(name='world'){
      return `hello ${name}`;
    }

    expect(greet()).to.equal('hello world');
    expect(greet('slug')).to.equal('hello slug');
  });

  it('whats up with rest paramiters', () => {

    function mapPowTwo(...nums){
      return nums.map(num => Math.pow(num, 2));
    }

    expect(mapPowTwo(3, 4, 5, 6)).to.deep.equal([ 9, 16, 25, 36 ])

  });
});

