
  class Grid{
    constructor(posX, posY, gridSizeX, gridSizeY, cellSize){
      this.posX = posX;
      this.posY = posY;
      this.gridSizeX = gridSizeX;
      this.gridSizeY = gridSizeY;

      this.gridMap = [];
      this.cellSize = cellSize;

      for(let x=0; x<this.gridSizeX; x++){
        this.gridMap[x] = new Array(this.gridSizeY);
      }

      for(let x = 0; x < this.gridSizeX; x++){
        for(let y = 0; y < this.gridSizeY; y++){
          this.gridMap[x][y] = new Cell(x*this.cellSize+this.posX, y*this.cellSize+this.posY, this.cellSize, false);
        }
      }

      this.gridRover = new Rover(10, 5, this.cellSize);

    }


    draw(){
      for(let x = 0; x < this.gridSizeX; x++){
        for(let y = 0; y < this.gridSizeY; y++){
          this.gridMap[x][y].draw();
        }
      }

      let roverCordsX = this.gridMap[this.gridRover.posX][this.gridRover.posY].x;
      let roverCordsY = this.gridMap[this.gridRover.posX][this.gridRover.posY].y;
      this.gridRover.draw(roverCordsX, roverCordsY);
    }





  }
