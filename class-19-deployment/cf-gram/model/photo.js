'use strict';

const del = require('del');
const AWS = require('aws-sdk');
const mongoose = require('mongoose');
const Gallery = require('./gallery.js');

const s3 = new AWS.S3();

const photoSchema = mongoose.Schema({
  title: {type: String, required: true},
  photoURI: {type: String, required: true},
  awsKey: {type: String, required: true},
  userID: {type: mongoose.Schema.Types.ObjectId, required: true},
  galleryID: {type: mongoose.Schema.Types.ObjectId, required: true},
});

photoSchema.pre('save', function(next){
  Gallery.findById(this.galleryID)
  .then(gallery => {
    gallery.photos.push(this._id.toString());
    return gallery.save();
  })
  .then(() => next())
  .catch(next);
});

photoSchema.post('save', function(doc, next){
  del([`${__dirname}/../assets/image/*`]);
  next();
});

photoSchema.pre('remove', function(next){
  // remove it self from its gallery photos array
  Gallery.findById(this.galleryID)
  .then(gallery => {
    gallery.photos = gallery.photos.filter(photoID => {
      return photoID != this._id.toString();
    });
    return gallery.save();
  })
  .then(() => {
    // delete it from aws
    return s3.deleteObject({ // fail 
      Bucket: process.env.AWS_BUCKET,
      Key: this.awsKey,
    }).promise();
  })
  .then(() => next())
});

module.exports = mongoose.model('photo', photoSchema);
