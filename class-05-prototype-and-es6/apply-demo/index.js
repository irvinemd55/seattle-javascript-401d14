'use strict';

let image = {
  name: 'palm tree',
  imgURL: '/img/palm.jpg',
};

let article = {
  name: 'palm tree',
  comtent: 'the coco fell',
};

function printImage(){
  console.log('name', this.name);
  console.log('imgURL', this.imgURL);
}

printImage.apply(image);

function setUser(username, ID){
  this.username = username;  
  this.ID = ID;
}

//setUser.call(image, 'slug', 1234)
setUser.apply(image, ['slug', 1234])
setUser.apply(article, ['slug', 1234])


let state = {
  history: [],
}


function addToHistory(){
  Array.prototype.push.apply(state.history, arguments);
}

console.log(state.history);
addToHistory('lulwat');
console.log(state.history);
addToHistory('this', 'is', 'cool');
console.log(state.history);












