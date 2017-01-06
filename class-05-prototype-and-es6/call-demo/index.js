'use strict';

let article = {
  title: 'beach adventure',
  content: 'we all gowt sun burrnz',
};

let rando = {};

function printArticle(){
  console.log('title', this.title);
  console.log('content', this.content);
}

function articleAppend(addTitle, addContent){
  this.title += addTitle;
  this.content += addContent;
}

printArticle.call(article);
printArticle.call(rando);

// function.call(context, arg, arg, ...)
console.log('before', article);
articleAppend.call(article, '!!', '!!!!!');
console.log('after', article);


