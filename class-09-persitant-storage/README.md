401 JS -- class 08 REST
===

## Resources
* Read [history of databases]

## Learning Objectives
* Students will be able to implement persistant storage using the fs module
* Students will be able to explain the different qualitys of in-memory storage and persistant storage

## Overview
#### Persistant Storage
* Storing data on the file system is slower then in memory stoage
* The file system has much more space, and is much cheaper to add storage space
* Data stored on the file system will still exist if the server is turned off

#### Implimentation vs Interface 
Yesterday we wrote a storage module, that had several methods. Its storage module kept everything in memory. Today we refactor the module to keep the same methods but store data on the file system. Because we kept the Interface to the storage module the same, we didnt have to change any code called its functions. The Implimentation has changed but the Interface did not.   
  
``` javascript
// Two functions with the same interface but different implemations
// the interface is the behavior
// the implemation is the means of achieving the behavior

function concat(a, b){
  if(typeof a != 'string' || typeof b != 'string')
    return null;
  return a + b;
}

function concat(a, b){
  if(!a.constructor == String || !b.constructor == String)
    return null;
  return a.concat(b);
}
```

<!--links -->
[history of databases]: http://avant.org/project/history-of-databases/
