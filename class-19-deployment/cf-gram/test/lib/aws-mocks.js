// this file must be required in before the server on all
// test files

const AWSMock = require('aws-sdk-mock');

const AWS = require('aws-sdk');
AWS.S3.prototype.upload = function(params, callback){
  if(params.ACL != 'public-read')
    return callback(new Error('ACL must be public read'));
  if(params.Bucket != process.env.AWS_BUCKET)
    return callback(new Error('BUCKET must be procces.env.AWS_BUCKET'));
  if(!params.Key)
    return callback(new Error('Key must be set'));
  if(!params.Body)
    return callback(new Error('Body must be set'));

  callback(null, {
    Key: params.Key,
    Location: `www.wat.com/${params.Key}`,
  });
}

//AWSMock.mock('S3', 'upload', function(params, callback){
  //if(params.ACL != 'public-read')
    //return callback(new Error('ACL must be public read'));
  //if(params.Bucket != process.env.AWS_BUCKET)
    //return callback(new Error('BUCKET must be procces.env.AWS_BUCKET'));
  //if(!params.Key)
    //return callback(new Error('Key must be set'));
  //if(!params.Body)
    //return callback(new Error('Body must be set'));

  //callback(null, {
    //Key: params.Key,
    //Location: `www.wat.com/${params.Key}`,
  //});
//});

AWSMock.mock('S3', 'deleteObject', function(params, callback){
  if(!params.Key)
    return callback(new Error('Key must be set'));
  if(!params.Body)
    return callback(new Error('Body must be set'));
  callback();
});
