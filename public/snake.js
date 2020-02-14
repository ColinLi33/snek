//let updateScore = false;

class Snake {
	score = 1;
	tail = [];
	xVel = 0;
	yVel = 0;
	player = 0;
	win = 0; //1 = p1 wins, 2 = p2 wins, 3 = tie

	constructor(x, y, size, player) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.player = player;
		this.win = null;
		this.tail = [];
	}

	show() {
		if(this.player == 1)
			fill('#00ff00');
		if(this.player == 2)
			fill('#FFA500');
		rect(this.x, this.y,this.size, this.size);
	//console.log(this.tail[0]);
		for(let i = 0; i < this.score; i++){
			//console.log(this.tail[i].x);
			//console.log(this.tail[i].y);
			rect(this.tail[i].x, this.tail[i].y, this.size, this.size);
		}
	}

	trail() {
		for(let i = this.score; i > 0; i--){
			this.tail[i] = this.tail[i-1];
		}
		let moveVec = createVector(this.x, this.y);
		this.tail[0] = moveVec;
	}

	eat(apple){
		if(this.x + this.size > apple.x && this.x < apple.x + apple.size && this.y < apple.y + this.size && this.y + this.size > apple.y){
			this.score++;
			apple.move();
		}
	}

	randomizer(thing) {
	    let randomNumber = Math.random() * thing;
	    return randomNumber - (randomNumber % 20);
	}

	collision(snake){
		var d = dist(this.x, this.y, snake.x, snake.y);
		console.log(d);
		if(d == 0){
			this.win = 3;
	//		lose();
		}
		for(let i = this.score - 1; i > 0; i--){
			console.log(this.score);
			d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
			console.log(d);
			if(d == 0){
				this.win = 2;
			//	lose();
			}
		}
		for(let i = snake.score - 1; i > 0; i--){
			d = dist(this.x, this.y, snake.tail[i].x, snake.tail[i].y);
			console.log(d);
			if(d == 0){
				this.win = 2;
			//	lose();
			}
		}
	}

	move() {
		if(this.dir == 'RIGHT')
			this.x += this.size;
		if(this.dir == 'LEFT')
			this.x -= this.size;
		if(this.dir == 'UP')
			this.y -= this.size;
		 if(this.dir == 'DOWN')
			this.y += this.size;
	}
  wall(){
    if(this.x <= 0 - this.size)
      //this.x = 460 - this.size;
			this.win = 2

    if(this.y <= 0 - this.size)
      //this.y = 460 - this.size;
				this.win = 2
    if(this.x >= 460)
    //  this.x = 0;
				this.win = 2
    if(this.y >= 460)
  //    this.y = 0;
			this.win = 2
    }
}
