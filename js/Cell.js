
class Cell {
  constructor (x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
  }

   draw(){
    strokeWeight(1);
    stroke(255);
    noFill();
    rect(this.x,this.y, this.size, this.size);
  }

}
