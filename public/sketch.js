//const socket = io.connect('http://localhost:3333');
const socket = io.connect('snekky.herokuapp.com');

let players = [];

socket.on("update", players => updatePlayers(players));
socket.on("disconnect", playerId => removePlayer(playerId));


function setup() {
  frameRate(20);
  createCanvas(460, 460);
}

function draw() {
  background(0);
  players.forEach(player => player.makeSnake());
  players.forEach(player => player.keyPressed());
  players.forEach(player => player.move());

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
