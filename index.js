var app = require('express')(); // support for http server
var http = require('http').Server(app);	//handle routes
var io =require('socket.io')(http);


app.get('/',function(req,res){
	//res.send("<h1>Hello everyone  to be here ...!!</h1>");
	res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
	console.log('a user connected');
	
	socket.on('chat message',function(msg){
  	 	io.emit('chat message',msg);
	});
	
	socket.on('disconnect',function(){
		console.log('user disconnected');
	});
});




http.listen(3000,function(){
	console.log('listen on port 3000');
})
