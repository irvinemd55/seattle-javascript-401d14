'use strict';

require('./mock-env.js');
const expect = require('chai').expect;
const superagent = require('superagent');

// get our model contstructors
const List = require('../model/list.js');
const Note = require('../model/note.js');

const baseURL = `http://localhost:${process.env.PORT}`;

// start server
require('../server.js');

describe('testing note router', function(){
  afterEach((done) => {
    Promise.all([
      List.remove({}),
      Note.remove({}),
    ])
    .then(() => done())
    .catch(done);
  });

  describe('testing POST /api/notes', function(){
    // before we make a note we need to mock a list
    beforeEach((done) => {
      new List({ name: 'cool' }).save()
      .then( list => {
        this.tempList = list;
        done();
      })
      .catch(done);
    });

    it('should respond with a note', (done) => {
      superagent.post(`${baseURL}/api/notes`)
      .send({
        name: 'get milk',
        content: 'chocolate hemp milk',
        listID: this.tempList._id.toString(),
      })
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal('get milk');
        expect(Boolean(res.body._id)).to.equal(true);
        expect(res.body.content).to.equal('chocolate hemp milk');
        done();
      })
      .catch(done);
    });

    it('should respond with a note', (done) => {
      superagent.post(`${baseURL}/api/notes`)
      .send({
        name: 'get milk',
        content: 'chocolate hemp milk',
        listID: 'lulwat123123',
      })
      .then(done)
      .catch(res => {
        expect(res.status).to.equal(404);
        done();
      })
      .catch(done);
    });

    it('should respond with a note', (done) => {
      superagent.post(`${baseURL}/api/notes`)
      .send({
        content: 'chocolate hemp milk',
        listID: this.tempList._id.toString(),
      })
      .then(done)
      .catch(res => {
        expect(res.status).to.equal(400);
        done();
      })
      .catch(done);
    });
  });

  describe('testin GET /API/notes/:id', function(){

    beforeEach((done) => {
      new List({name: 'example'}).save()
      .then(list => {
        this.tempList = list;
        return new Note({
          name: 'lulwat',
          content: 'shark in the dark',
          listID: this.tempList._id.toString(),
        }).save()
      })
      .then(note => {
        this.tempNote = note;
        done();
      })
      .catch(done);
    })

    it('should respond with a note', (done) => {
      superagent.get(`${baseURL}/api/notes/${this.tempNote._id.toString()}`)
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.listID).to.equal(this.tempList._id.toString())
        expect(res.body.name).to.equal('lulwat');
        expect(res.body.content).to.equal('shark in the dark');
        done();
      })
      .catch(done);
    });
  });
});
