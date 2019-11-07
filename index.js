const express = require('express');
const app = express();
//var socket = require('socket.io');
//var players = [];

app.use(express.static('public'))
/*
io.on('connection', function(socket){
    console.log(`Made socket connection with ${socket.id}`);
    if(players.length < 2){
        players.push(socket.id);
    }else{
        console.log("no you");
    }
    socket.on('ready', function(){
        if(playerCount.length == 2){
            socket.emit("userType", {'type': "snake"});
            io.sockets.emit('startGame', players);
            console.log('Snake Game Started');
        }

    });
/*
    socket.on('position', function(data){
        socket.broadcast.emit('postThis', data);

    });
    socket.on('positionPacmon', function(data){
        socket.broadcast.emit('postThisPacmon', data);
    });
    socket.on('gameover', function(data){
	players = [];
	playerCount = 0;

        io.sockets.emit('gameDone', {statement: `${data.winner} won!`});
    });
	socket.on('removeDot',function(data){
		socket.broadcast.emit("rmvDot", data);
	});
*/
//});


//app.get('/', (req, res) => res.render('index.html'))

app.listen(process.env.PORT || 3333, () => console.log('Example app listening'))
