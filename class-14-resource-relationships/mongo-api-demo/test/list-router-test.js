'use strict';

// require in the mock env
require('./mock-env.js');

// require npm modules
const expect = require('chai').expect;
const superagent = require('superagent');

// require app modules
const List = require('../model/list.js');

// start server
require('../server.js');

// create test vars
const baseURL = `http://localhost:${process.env.PORT}`;

describe('testing list router', function(){
  afterEach((done) => {
    List.remove({})
    .then(() => done())
    .catch(done);
  });

  describe('testing POST /api/lists', function(){
    it('should return a list', (done) => {
      superagent.post(`${baseURL}/api/lists`)
      .send({name: 'todo'})
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal('todo');
        expect(Boolean(res.body.created)).to.equal(true);
        done();
      })
      .catch(done);
    });

    it('should return a 400 status', (done) => {
      superagent.post(`${baseURL}/api/lists`)
      .send({})
      .then(done)
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      .catch(done);
    });
  });

  describe('testing GET /api/list/:id', function(){
    beforeEach(done => {
      new List({name: 'example'}).save()
      .then(list => {
        this.templist = list;
        done();
      })
      .catch(done);
    });

    it('should return a list', (done) => {
      superagent.get(`${baseURL}/api/lists/${this.templist._id}`)
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body._id).to.equal(this.templist._id.toString());
        expect(res.body.name).to.equal('example');
        expect(Boolean(res.body.created)).to.equal(true);
        done();
      })
      .catch(done);
    });

    it('should return a 404 cuz bad id', (done) => {
      superagent.get(`${baseURL}/api/lists/63636`)
      .then(done)
      .catch(err => {
        expect(err.status).to.equal(404);
        done();
      })
      .catch(done);
    });
  });
});

