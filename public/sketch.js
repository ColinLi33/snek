canvasWidth = 460;
canvasHeight = 460;
let snake;
let snake2;
let apple;
/*var socket = io.connect("localhost:3333");

socket.on('player', function(data){
  data = snake;

});*/
//You got this!
function setup(){
  frameRate(60);
  createCanvas(canvasWidth,canvasHeight);
  snake = new Snake(randomizer(canvasWidth), randomizer(canvasHeight), 20);
  apple = new Apple(randomizer(canvasWidth), randomizer(canvasHeight), 20);
}

function randomizer(thing){
    let randomNumber = Math.random()*thing;
    return randomNumber - (randomNumber % 20);
}

function draw(){
  fill(120);
  rect(0, 0, canvasWidth, canvasHeight);

  apple.show();
  snake.move();
  snake.wall();
  snake.collision();
  snake.trail();
  snake.eat(apple);
  snake.show();
/*
  socket.emit('snake1', snake);
  socket.emit('snake2', snake1);
  socket.emit('apple', apple);*/
}

function keyPressed() {
  if (keyCode === UP_ARROW && snake.dir != 'DOWN') {
    snake.dir = 'UP'
  } else if (keyCode === DOWN_ARROW && snake.dir != 'UP') {
    snake.dir = 'DOWN';
  }
  if (keyCode === LEFT_ARROW && snake.dir != 'RIGHT') {
    snake.dir = 'LEFT';
  } else if (keyCode === RIGHT_ARROW && snake.dir != 'LEFT') {
    snake.dir = 'RIGHT';
  }
}
