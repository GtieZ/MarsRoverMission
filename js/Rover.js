class Rover{
  constructor(posX, posY, size){
    this.posX = posX;
    this.posY = posY;
    this.size = size;
  }

  draw(x, y){
    stroke(255);
    fill(250);
    circle(x-this.size/2, y-this.size/2, this.size);
  }



}
