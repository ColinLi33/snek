const socket = io.connect('http://localhost:3333');
//const socket = io.connect('snekky.herokuapp.com');

let players = [];

socket.on("update", function(playerss){
  updatePlayers(playerss);
});
socket.on("disconnect", function(playerId){
  removePlayer(playerId);
});


function setup() {
  //frameRate(20);
  //socket.emit('requestUpdate');
  createCanvas(460, 460);
}

function draw() {
  socket.emit('requestUpdate');
  background(0);
  //console.log(players);
  for(let i = 0; i < players.length; i++){
    players[i].keyPressed();
    players[i].move();
    players[i].collision();
    players[i].wall();
    players[i].makeSnake();
  }
  socket.emit('updatePlayers', players);
}

function updatePlayers(serverPlayers) {
  for (let i = 0; i < serverPlayers.length; i++) {
    let playerFromServer = serverPlayers[i];
    if (!playerExists(playerFromServer)) {
      players.push(new Player(playerFromServer));
    }
  }
}

function playerExists(playerFromServer) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].id === playerFromServer.id) {
      return true;
    }
  }
  return false;
}

function removePlayer(playerId) {
  players = players.filter(player => player.id !== playerId);
}
