'use strict';

const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
  name: {type: String, required: true},
  created: {type: Date, required: true, default: Date.now},
  notes: [{type: mongoose.Schema.Types.ObjectId, ref: 'note'}]
});

// creates lists collection and List constructor
module.exports = mongoose.model('list', listSchema);
