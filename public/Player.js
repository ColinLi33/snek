class Player {
  constructor(player) {
    this.x = player.x;
    this.y = player.y;
    this.size = 20;
    this.id = player.id;
    this.rgb = player.rgb;
    this.dir = "NONE";
  }


  makeSnake() {
    fill(this.rgb.r, this.rgb.g, this.rgb.b);
    rect(this.x, this.y, 20, 20);
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

  keyPressed() {
    if (keyCode === UP_ARROW && this.dir != 'DOWN') {
      this.dir = 'UP'
    } else if (keyCode === DOWN_ARROW && this.dir != 'UP') {
        this.dir = 'DOWN';
    }
    
    if (keyCode === LEFT_ARROW && this.dir != 'RIGHT') {
      this.dir = 'LEFT';
    } else if (keyCode === RIGHT_ARROW && this.dir != 'LEFT') {
        this.dir = 'RIGHT';
    }
  }

}
