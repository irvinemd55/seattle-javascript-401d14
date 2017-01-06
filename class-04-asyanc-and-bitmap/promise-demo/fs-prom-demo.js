'use strict';

const fs = require('fs');


let readCurrentFile = function(){
  return new Promise(function(resolve, reject){
    fs.readFile(__filename, function(err, buf){
      if(err) return reject(err);
      return resolve(buf);
    });
  });
}

let writeOutputFile = function(data){
  return new Promise(function(resolve, reject){
    fs.writeFile(`/output.js`, data, function(err){
      if(err) return reject(err);
      return resolve();
    });
  });
}


readCurrentFile()
.then(function(buf){
  console.log('success\n', buf);
  // you can 
  return Promise.resolve(buf.toString());
})
.then(function(stringData){
  // if something goes wronig
  // return a rejecting promise with the error 
  // to go to the next catch block
  //return Promise.reject(new Error('somfthin wernt right'));

  console.log('stringData\n', stringData);
  return stringData.toUpperCase();
})
.then(function(upper){
  console.log('upper\n', upper);
  return writeOutputFile(upper);
})
.then(function(){
  console.log('done!');
})
.catch(function(err){
  console.error('failure\n', err);
});
