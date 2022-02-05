
class Cell {
  constructor (x, y, size, obstacle){
    this.x = x;
    this.y = y;
    this.size = size;
    this.obstacle = obstacle;
  }

   draw(){
    strokeWeight(1);
    stroke(100);
    if(this.obstacle){
      fill(255, 0, 0);
    } else{
      noFill();
    }
    rect(this.x,this.y, this.size, this.size);
  }

}
