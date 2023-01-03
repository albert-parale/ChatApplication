
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
	cors: {origin: "*"}
});

io.on('connection', (socket) => {
	socket.on('user_connected', (user_id) => {
		console.log('user connected ' + user_id);
	});
});
// io.on('connection', (socket) => {
// 	console.log('connection');
// });

// socket.on('disconnect', (socket) => {
// 	console.log('Disconnect');
// });

server.listen(8005, () => {
	console.log('Listening to port 8005');
});