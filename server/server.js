const express = require("express");
const socket = require('socket.io');
const app = express();
let Player = require("./Player");
const PORT = process.env.PORT || 3333;

let server = app.listen(PORT, () => {
    console.log(`Snekky is running on port ${ PORT }`);
});

app.use(express.static("public"));

let players = [];

//setInterval(updateGame, 16);


let io = socket(server);
io.on("connection", socket => {
  console.log(`New connection ${socket.id}`);
  players.push(new Player(socket.id));

  socket.on("disconnect", function(){
    io.sockets.emit("disconnect", socket.id);
    players = players.filter(player => player.id !== socket.id);
  });

  socket.on('requestUpdate', function(){
    io.sockets.emit("update", players);
  });

  socket.on("updatePlayers", function(updatePlayers){
    io.sockets.emit('update', updatePlayers);
  });
});







function updateGame() {
  io.sockets.emit("update", players);
}
