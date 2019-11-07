class Snake {
	score = 1;
	tail = [];
	xVel = 0;
	yVel = 0;
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	show() {
		fill('#00ff00');
		rect(this.x, this.y, this.size, this.size);
	//console.log(this.tail[0]);
		for(let i = 0; i < this.score; i++){
			//console.log(this.tail[i].x);
			//console.log(this.tail[i].y);
			rect(this.tail[i].x, this.tail[i].y, this.size, this.size);
		}
	}

	reset(){
		this.tail = [];
		this.score = 1;
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

	collision(){
		for(let i = 1; i < this.score; i++){
			if(this.x + this.size > this.tail[i].x && this.x < this.tail[i].x + this.size && this.y < this.tail[i].y + this.size && this.y + this.size > this.tail[i].y){
				this.reset();
		}
	}
}
/*
	move() {
		if(this.dir == 'RIGHT')
			this.x += this.size;
		if(this.dir == 'LEFT')
			this.x -= this.size;
		if(this.dir == 'UP')
			this.y -= this.size;
		 if(this.dir == 'DOWN')
			this.y += this.size;
	} */

  wall(){
    if(this.x <= 0 - this.size)
      this.x = 460 - this.size;

    if(this.y <= 0 - this.size)
      this.y = 460 - this.size;

    if(this.x >= 460)
      this.x = 0;

    if(this.y >= 460)
      this.y = 0;
    }
}
