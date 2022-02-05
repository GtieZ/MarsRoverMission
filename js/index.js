
class Cell {
  constructor (x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
  }

   draw(){
     strokeWeight(1);
    stroke(255);
    noFill(255);
    rect(this.x,this.y, this.size, this.size);
  }

}




 let myCell = new Cell(10,10, 50);
 console.log(myCell)



function setup(){
  createCanvas(600, 600);
  background(0);
}

function draw(){

  myCell.draw();


}
