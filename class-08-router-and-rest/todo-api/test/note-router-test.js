'use strict';

const expect = require('chai').expect;
const superagent = require('superagent');
const Note = require('../model/note.js');
const storage = require('../lib/storage.js');

const apiURL = `http://localhost:${process.env.PORT || 3000}`;
require('../servers.js');

describe('testing /api/notes', function(){
  describe('testing POST', function(){
    describe('with valid input', function(){
      it('should return a note', (done) => {
        superagent.post(`${apiURL}/api/notes`)
        .send({
          title: 'example',
          content: 'cool story slug',
        })
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res.body.title).to.equal('example');
          expect(res.body.content).to.equal('cool story slug');
          expect(Boolean(res.body.created)).to.equal(true);
          expect(Boolean(res.body.id)).to.equal(true);
          done();
        })
        .catch(done);
      });
    });

    describe('with invalid input', function(){
    });
  });

  describe('testing GET', function(){
    describe('with valid input', function(){
      // mock a note so that we have an id to make a get to 
      before((done) => {
        this.tempNote = new Note({title: 'hello', content: 'wrold'});
        storage.setItem('notes', this.tempNote)
        .then(() => done())
        .catch(done)
      });

      it('should return a note', (done) => {
        superagent.get(`${apiURL}/api/notes?id=${this.tempNote.id}`)
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res.body.title).to.equal(this.tempNote.title);
          expect(res.body.content).to.equal(this.tempNote.content);
          expect(res.body.id).to.equal(this.tempNote.id);
          expect(new Date(res.body.created).toString()).to.equal(this.tempNote.created.toString());
          expect(Boolean(res.body.created)).to.equal(true);
          expect(Boolean(res.body.id)).to.equal(true);
          done();
        })
        .catch(done);
      });
    });

    describe('with invalid input', function(){
    });
  });
});

