'use strict';

const mongoose = require('mongoose');
const createError = require('http-errors');
const List = require('./list.js');

const noteSchema = mongoose.Schema({
  name: {type: String, required: true},
  content: {type: String, required: true, minlength: 5, maxlength: 147},
  listID: {type: mongoose.Schema.Types.ObjectId, required: true},
});

// pre save hook checks that lists
noteSchema.pre('save', function(next){
  List.findById(this.listID)
  .then(list => {
    list.notes.push(this._id)
    return list.save();
  })
  .then(() => next())
  .catch(err => next(createError(404, err.message)));
});

module.exports = mongoose.model('note', noteSchema); 


