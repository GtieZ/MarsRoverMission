
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

  class Grid{
    constructor(cellSize){
      this.cellSize = cellSize;
      this.myCell = new Cell (10, 10, cellSize);
    }

    draw(){
      this.myCell.draw();
    }

  }





  myGrid = new Grid(50);
  console.log(myGrid);


function setup(){
  createCanvas(600, 600);
  background(0);
}



function draw(){

  myGrid.draw();

}
