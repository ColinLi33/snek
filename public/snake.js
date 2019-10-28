class Snake {
	dir = 'RIGHT';
	constructor(x, y, size, boxValue) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.boxValue = boxValue;
	}

	show() {
		fill('#00ff00');
		rect(this.x, this.y, this.size, this.size);
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
      this.x = 760 - this.size;

    if(this.y <= 0 - this.size)
      this.y = 760 - this.size;

    if(this.x >= 760)
      this.x = 0;

    if(this.y >= 760)
      this.y = 0;
    }


}
