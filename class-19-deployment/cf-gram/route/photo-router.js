'use strict';

const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const multer = require('multer');
const Router = require('express').Router;
const createError = require('http-errors');
const debug = require('debug')('cfgram:photo-router');

const Gallery = require('../model/gallery.js');
const Photo = require('../model/photo.js');
const bearerAuth = require('../lib/bearer-auth-middleware.js');

const photoRotuer = module.exports = new Router();
const upload = multer({dest: `${__dirname}/../assets/image`});
const s3 = new AWS.S3();

function s3Upload(params){
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
};

photoRotuer.post('/api/photos', bearerAuth, upload.single('file'), function(req, res, next){
  debug('POST /api/photo');
  console.log('req.user', req.user);
  console.log('req.body', req.body);
  console.log('req.file', req.file);
    // check if the gallery exits
  let tempGallery;
  Gallery.findOne({_id: req.body.galleryID, userID: req.user._id})
  .then((gallery) => {
    tempGallery = gallery;
    // upload the file to s3
    return s3Upload({
      ACL: 'public-read',
      Bucket: process.env.AWS_BUCKET,
      Key: `${req.file.filename}${path.extname(req.file.originalname)}`,
      Body: fs.createReadStream(req.file.path),
    });
  })
  .then(s3Data => {
    // create photo object and store it in mongo
    console.log('s3Data', s3Data);

    return new Photo({
      title: req.body.title,
      galleryID: req.body.galleryID,
      userID: req.user._id.toString(),
      awsKey: s3Data.Key,
      photoURI: s3Data.Location, 
    }).save();
  })
  .then(photo => res.json(photo))
  .catch(next);
  // respnd to the user
});

photoRotuer.delete('/api/photos/:id', bearerAuth, function(req, res, next){
  debug('DELETE /api/photos');

  Photo.findOneAndRemove({
    userID: req.user._id.toString(),
    _id: req.params.id,
  })
  .then(() => res.sendStatus(204))
  .catch(next);
});
