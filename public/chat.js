var socket=io.connect('http://localhost:3301/')

var message=document.getElementById("message"),
handle=document.getElementById("handle")
btn=document.getElementById("send")
output=document.getElementById("output")
feedback=document.getElementById("feedback")

btn.addEventListener('click',function(){
    
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
})

message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value)
})

socket.emit('online',"ahmad")
socket.on('chat',function(data){
    feedback.innerHTML=''
    output.innerHTML+="<p><strong>"+data.handle+ " : </strong>"+ data.message + "</p>";

})
socket.on('online',function(status){
    document.getElementById('status').innerHTML='<i>'+status+' is Online</i>'
})
socket.on('typing',function(data){
  
console.log('in client from server'+data)
    // feedback.innerHTML=''
    feedback.innerHTML="<p><em>"+data +"is typing a message ... </em></p>";
    
})