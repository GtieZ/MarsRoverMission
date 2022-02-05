class Rover{
  constructor(posX, posY, size){
    this.position = new p5.Vector(posX, posY);
    this.direction = new p5.Vector(1, 0);
    this.size = size;
  }

  moveForward(){
    this.position += this.direction;
  }

  draw(x, y){
    stroke(255);
    fill(250);
    circle(x-this.size/2, y-this.size/2, this.size);
  }



}
