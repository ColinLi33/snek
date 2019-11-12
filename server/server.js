const express = require("express");
const socket = require('socket.io');
const app = express();
let Player = require("./Player");
const PORT = process.env.PORT || 3333;

let server = app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

app.use(express.static("public"));


let io = socket(server);

let players = [];

setInterval(updateGame, 16);

io.sockets.on("connection", socket => {
  console.log(`New connection ${socket.id}`);
  players.push(new Player(socket.id));

  socket.on("disconnect", () => {
    io.sockets.emit("disconnect", socket.id);
    players = players.filter(player => player.id !== socket.id);
  });
});


io.sockets.on("disconnect", socket => {
  io.sockets.emit("disconnect", socket.id);

  players = players.filter(player.id !== socket.id);
});



function updateGame() {
  io.sockets.emit("update", players);
}
