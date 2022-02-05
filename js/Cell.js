
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
    noFill();
    rect(this.x,this.y, this.size, this.size);

    if(this.obstacle){
      fill(255,0,0);
      rect(this.x,this.y, this.size, this.size);
      imageMode(CENTER);
      image(dinosaur, this.x +this.size/2, this.y+this.size/2, this.size, this.size)
    }
  }

}
