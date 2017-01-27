'use strict';


const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
  title: {type: String, required: true},
  userID: {type: mongoose.Schema.Types.ObjectId, required: true},
  photos: [{type: mongoose.Schema.Types.ObjectId, ref: 'photo'}],
});

module.exports = mongoose.model('gallery', gallerySchema);
