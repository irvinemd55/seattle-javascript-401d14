'use strict';

const debug = require('debug')('cfgram:mock-user');
const User = require('../../model/user.js');

module.exports = function(done){
  debug('mock user');
  new User({
    username: 'slug' + Math.random(),
    email: 'slug@slug.com' + Math.random(),
  })
  .generatePasswordHash('1234')
  .then(user => user.save())
  .then(user => {
    this.tempUser = user;
    return user.generateToken();
  })
  .then(token => {
    this.tempToken = token;
    done()
  })
  .catch(done);
};
