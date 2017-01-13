'use strict';

//['1', '2', '3']; n == 3;

//{
//one: 'hello',
//two: 'wat',
//three: 'lul',
//four: 'beach adventure',
//} n == 4


//n == 4 linear time
let abc = [2,3,34,5];

console.log('findNum(abc, 34): ', findNum(abc, 34));
console.log('findNum(abc, 2): ', findNum(abc, 2));
console.log('findNum(abc, 8): ', findNum(abc, 8));

function findNum(set, find){
  for (var i=0; i<set.length; i++){
    if(set[i] == find) return true;
  }
  return false;
}


// n == 3
let xyz = {
  1234: 'lul',
  1236: 'lol',
};

findValueByID(xyz, 321);
findValueByID(xyz, 1234);

// O(1) constant time
function findValueByID(store, id){
  if(store[id]) return true;
  return false;
}

