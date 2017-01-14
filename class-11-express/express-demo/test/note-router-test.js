'use strict'

const superagent = require('superagent');
const expect = require('chai').expect;
const Note = require('../model/note.js');
const baseUrl = `http://localhost:${process.env.PORT || 3000}`
require('../server.js');

describe('testing note roter', function(){
  describe('testing POST /api/notes', function(){
    it('shoud create a note', (done) => {
      superagent.post(`${baseUrl}/api/notes`)
      .send({
        title: 'beach adventure',
        content: 'booya',
      })
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.title).to.equal('beach adventure');
        expect(res.body.content).to.equal('booya');
        expect(Boolean(res.body.id)).to.equal(true);
        this.tempnote = res.body;
        done();
      })
      .catch(done)
    })

    it('should return 400 status code', (done) => {
      superagent.post(`${baseUrl}/api/notes`)
      .send({
        title: 'beach adventure',
      })
      .then(done)
      .catch(err=> {
        expect(err.status).to.equal(400);
        done();
      })
      .catch(done);
    })

    after((done) => {
      Note.deleteById(this.tempnote.id)
      .then(() => done())
      .catch(done);
    })
  });


});
