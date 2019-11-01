canvasWidth = 460;
canvasHeight = 460;
//You got this!
function setup(){
  frameRate(20);
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
