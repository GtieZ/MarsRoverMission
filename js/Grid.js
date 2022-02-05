
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
          this.gridMap[x][y] = new Cell(x*this.cellSize+this.posX, y*this.cellSize+this.posY, this.cellSize, this.returnRandomObstacle(x, y));
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
          alert('comando no válido');
          break;
      }
    }

    init(){
      this.gridRover.position.set(0,0);
      this.gridRover.direction.set(1,0);
      for(let x = 0; x < this.gridSizeX; x++){
        for(let y = 0; y < this.gridSizeY; y++){
          this.gridMap[x][y].obstacle = this.returnRandomObstacle(x, y);
        }
      }

    }

    update(){
      this.draw();
      if(this.checkCollision()){
        this.init();
      }
    }

    checkCollision(){
        if(this.gridMap[this.gridRover.position.x][this.gridRover.position.y].obstacle){
          alert("colision!!!!!!");
          return true;
        }
        return false;
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

    returnRandomObstacle(x, y){
      let obstacle;
      if(x!=0 && y!=0){
        if(Math.random() > 0.93){
          obstacle = true;
        } else{
          obstacle = false;
        }
      } else{
        obstacle = false;
      }
      return obstacle;
    }
  }
