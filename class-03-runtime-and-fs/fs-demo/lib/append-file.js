'use strict';

const fs = require('fs');

module.exports = function(inputFile, outputFile, message, callback){
  // read inputFile in 
  fs.readFile(inputFile , function(err, data){
    if (err) return callback(err);

    // add message to inputFile data
    let writeData = data.toString() + message;

    // write new message to outputFile
    fs.writeFile(outputFile, writeData, function(err){
      if (err) return callback(err);

      // if success pass new message back to caller
      callback(null, writeData);
    });
  });

};
