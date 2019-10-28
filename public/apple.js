class Apple{

  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show(){
    fill('#ff0000')
    rect(this.x, this.y, this.size, this.size);
  }
}
