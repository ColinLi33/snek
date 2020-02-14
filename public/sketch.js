canvasWidth = 460;
canvasHeight = 460; //460
let snake;
let snake2;
let apple;
let winString;
let currCanv = 1;
let winText;
/*var socket = io.connect("localhost:3333");

socket.on('player', function(data){
  data = snake;

});*/
//You got this!
function setup() {
  frameRate(13);
  createCanvas(canvasWidth + 50, canvasHeight + 50);
  snake = new Snake(randomizer(canvasWidth), randomizer(canvasHeight), 20, 1);
  snake2 = new Snake(randomizer(canvasWidth), randomizer(canvasHeight), 20, 2);
  apple = new Apple(randomizer(canvasWidth), randomizer(canvasHeight), 20);
}
/*
function displayScore() {
  let s = "Score: " + snake.getScore();
  fill(50);
  textSize(20);
  noStroke();
  text(s, canvasWidth - 260, canvasHeight + 20);

}*/

function randomizer(thing) {
    let randomNumber = Math.random() * thing;
    return randomNumber - (randomNumber % 20);
}

function draw(){
if(currCanv == 1){
//  background(255);
  fill(75);
  rect(0, 0, canvasWidth, canvasHeight);
  apple.show();

  snake.move();
  snake2.move();
  snake.wall();
  snake2.wall();
  snake.trail();
  snake2.trail();
  snake.show();
  snake2.show();
  snake.collision(snake2);
  snake2.collision(snake);
  if(snake.win == 1 || snake2.win == 2){
    setup();
    winString = "Player 1 Wins!\nPress space to play again."
    currCanv = 2;
  } else if(snake.win == 2 || snake2.win == 1){
    setup();
    winString = "Player 2 Wins!\nPress space to play again."
    currCanv = 2;
  } else if(snake.win == 3 || snake2.win == 3){
    setup();
    winString = "Tie Game!\nPress space to play again."
    currCanv = 2;
  }

  snake.eat(apple);
  snake2.eat(apple);
//  background(255);

} else if(currCanv == 2){
  textAlign(CENTER, CENTER);
  fill(75);
  rect(0, 0, canvasWidth, canvasHeight);
  textSize(20);
  text(winString, canvasWidth - 260, canvasHeight + 24)
}

/*
  socket.emit('snake1', snake);
  socket.emit('snake2', snake1);
  socket.emit('apple', apple);*/
}

function keyPressed() {
  if (keyCode === UP_ARROW && snake2.dir != 'DOWN') {
    snake2.dir = 'UP'
  } else if (keyCode === DOWN_ARROW && snake2.dir != 'UP') {
    snake2.dir = 'DOWN';
  }
  if (keyCode === LEFT_ARROW && snake2.dir != 'RIGHT') {
    snake2.dir = 'LEFT';
  } else if (keyCode === RIGHT_ARROW && snake2.dir != 'LEFT') {
    snake2.dir = 'RIGHT';
  }

  if (keyCode === 87 && snake.dir != 'DOWN') {
    snake.dir = 'UP'
  } else if (keyCode === 83 && snake.dir != 'UP') {
    snake.dir = 'DOWN';
  }
  if (keyCode === 65 && snake.dir != 'RIGHT') {
    snake.dir = 'LEFT';
  } else if (keyCode === 68 && snake.dir != 'LEFT') {
    snake.dir = 'RIGHT';
  }

  if(keyCode === 32 && currCanv == 2){
    currCanv = 1;
    setup();
  }
}
