'use strict';

// require mock env
require('./mock-env.js');
// npm modules
const expect = require('chai').expect;
const superagent = require('superagent');

// app modules
const User = require('../model/user.js');
const Photo = require('../model/photo.js');
const Gallery = require('../model/gallery.js');
const userMock = require('./lib/user-mocks.js');
const galleryMock = require('./lib/gallery-mock.js');
const photoMock = require('./lib/photo-mock.js');
const serverControl = require('./lib/server-control.js');

// start server
const baseURL = `http://localhost:${process.env.PORT}`;
  const server = require('../server.js');
// shred some tests

describe('testing photo-router', function(){
  // start the server if its not running
  before(serverControl.startServer);
  // stop the server if its running
  after(serverControl.killServer);
  afterEach((done) => {
    User.remove({})
    .then(() => done())
    .catch(done);
  });

  describe('testing POST /api/photos', function(){
    // mock a user
    // and mock a token for that user
    beforeEach(userMock.bind(this));
    // mock a gallery
    beforeEach(galleryMock.bind(this));
    // make post request
    it('should return an photo model', (done) => {
      superagent.post(`${baseURL}/api/photos`)
      .set('Authorization', `Bearer ${this.tempToken}`)
      .field('galleryID', this.tempGallery._id.toString())
      .field('title', 'epic sunburn')
      .attach('file', `${__dirname}/mock-assets/smiley.png`)
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.title).to.equal('epic sunburn');
        expect(res.body.galleryID).to.equal(this.tempGallery._id.toString())
        expect(res.body.userID).to.equal(this.tempUser._id.toString())
        expect(Boolean(res.body.photoURI)).to.equal(true);
        done();
      })
      .catch(done);
    })
  });

  describe('testing DELETE /api/photos', function(){
    // mock a user
    // and mock a token for that user
    beforeEach(userMock.bind(this));
    // mock a gallery
    beforeEach(galleryMock.bind(this));
    // make post request
    beforeEach(photoMock.bind(this));

    it('should delete a photo', (done) => {
      superagent.delete(`${baseURL}/api/photos/${this.tempPhoto._id.toString()}`)
      .set('Authorization', `Bearer ${this.tempToken}`)
      .then( res => {
        expect(res.status).to.equal(204);
        done();
      })
      .catch(done);
    });
  });

});
