
  class Grid{
    constructor(posX, posY, gridSizeX, gridSizeY, cellSize){
      this.posX = posX;
      this.posY = posY;
      this.gridSizeX = gridSizeX;
      this.gridSizeY = gridSizeY;

      this.cellSize = cellSize;

      this.gridMap = [];
      for(let x=0; x<this.gridSizeX; x++){
        this.gridMap[x] = new Array(this.gridSizeY);
      }

      for(let x = 0; x < this.gridSizeX; x++){
        for(let y = 0; y < this.gridSizeY; y++){
          this.gridMap[x][y] = new Cell(x * this.cellSize, y * this.cellSize, this.cellSize);
        }
      }

    }


    draw(){
      for(let x = 0; x < this.gridSizeX; x++){
        for(let y = 0; y < this.gridSizeY; y++){
          this.gridMap[x][y].draw();
        }
      }
    }





  }
