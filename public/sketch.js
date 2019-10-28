canvasWidth = 760;
canvasHeight = 760;
//You got this!
function setup(){
  frameRate(20);
  createCanvas(canvasWidth,canvasHeight);
  snake = new Snake(300, 300, 20, 0);
  apple1 = new Apple(200, 200, 20);
}

function draw(){
  fill(120);
  rect(0, 0, canvasWidth, canvasHeight);


  apple1.show();
  snake.show();
  snake.move();
  snake.wall();

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
