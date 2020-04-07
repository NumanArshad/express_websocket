const express = require("express");
const app = express();
port = process.env.PORT || 3301;
var socket=require('socket.io')

app.use(express.static('public'))
var server=app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

var io=socket(server)
io.on('connection',(socket)=>{  // make connection
  console.log('made socket connection',socket.id);
  socket.on('chat',function(data){
    console.log('data from client is '+data.message)
   io.sockets.emit('chat',data)
  })
  socket.on('typing',function(username){
    // console.log(username+" is typing")
    socket.broadcast.emit('typing',username)
  })
  socket.on('online',function(status){
    socket.broadcast.emit('online',status)
  })
})
