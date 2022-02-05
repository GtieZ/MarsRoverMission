
  class Grid{
    constructor(cellSize){
      this.cellSize = cellSize;
      this.myCell = new Cell (10, 10, cellSize);
    }

    draw(){
      this.myCell.draw();
    }

  }
