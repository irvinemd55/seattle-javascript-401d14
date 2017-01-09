'use strict';

const net = require('net');
const server = net.createServer();

let sockets = [];

function nickCommand(message, socket) {
  socket.username = message.split(' ').slice(1).join(' ').trim();
  socket.write(`you are now ${socket.username}`);
}

function dmCommand(message){
  // "/dm user_30 hello how are you
  let toUsername = message.split(' ')[1];
  let content = message.split(' ').slice(2).join(' ').trim();
  sockets.forEach(s => {
    if (s.username === toUsername)
      s.write(content);
  });

}

server.on('connection', function(socket){
  console.log('a client connected');
  socket.write('welcome to wack chat');
  
  socket.username = `user_${Math.floor(Math.random() * 100)}`;
  sockets.push(socket);
  
  socket.on('data', function(buffer){
    let message = buffer.toString();

    if( message.startsWith('/nick'))
       return nickCommand(message, socket);

    if(message.startsWith('/dm'))
      return dmCommand(message);

    sockets.forEach(s => {
      //if(s !== socket)
        s.write(`${socket.username}: ${message}`);
    });
  })

  socket.on('close', function(){
    console.log('a client left the chat');
    sockets.forEach((s, index) => {
      if(s == socket)
        sockets.splice(index, 1);
    })
  })
});

server.listen(3000, function(){
  console.log('server up!');
});
