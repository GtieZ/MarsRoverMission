
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

          let blocked;
          if(x!=0 && y!=0){
            if(Math.random() > 0.93){
              blocked = true;
            } else{
              blocked = false;
            }
          } else{
            blocked = false;
          }

          this.gridMap[x][y] = new Cell(x*this.cellSize+this.posX, y*this.cellSize+this.posY, this.cellSize, blocked);
        }
      }

      this.gridRover = new Rover(0, 0, this.cellSize);
    }


    driveRover(instruction){
      switch(instruction.toUpperCase()){
        case 'F':
          this.gridRover.moveForward();
          if(this.gridRover.position.x < 0){
            this.gridRover.position.set(this.gridSizeX-1, this.gridRover.position.y);
          }
          if(this.gridRover.position.x >= this.gridSizeX){
            this.gridRover.position.set(0, this.gridRover.position.y);
          }
          if(this.gridRover.position.y < 0){
            this.gridRover.position.set(this.gridRover.position.x, this.gridSizeY-1)
          }
          if(this.gridRover.position.y >= this.gridSizeY){
            this.gridRover.position.set(this.gridRover.position.x, 0);
          }
          break;

        case 'L':
          this.gridRover.changeDirection('L');
          break;

        case 'R':
          this.gridRover.changeDirection('R');
          break;

        default:
          alert('error!!!!!');
          break;
      }
    }

    

    draw(){
      for(let x = 0; x < this.gridSizeX; x++){
        for(let y = 0; y < this.gridSizeY; y++){
          this.gridMap[x][y].draw();
        }
      }
      let roverCordsX = this.gridMap[this.gridRover.position.x][this.gridRover.position.y].x;
      let roverCordsY = this.gridMap[this.gridRover.position.x][this.gridRover.position.y].y;
      this.gridRover.draw(roverCordsX, roverCordsY);
    }





  }
