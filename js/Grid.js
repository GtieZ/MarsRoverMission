
  class Grid{
    constructor(posX, posY, gridSizeX, gridSizeY, cellSize){
      this.posX = posX;
      this.posY = posY;
      this.gridSizeX = gridSizeX;
      this.gridSizeY = gridSizeY;

      this.gridMap = [];
      this.cellSize = cellSize;

      this.collision = false;
      this.invalid = false;

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
      this.gridRover.previousPosition.set(this.gridRover.position.x, this.gridRover.position.y);
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
          this.driveRover('F');
          break;

        case 'R':
          this.gridRover.changeDirection('R');
          this.driveRover('F');
          break;

        default:
          this.invalid = true;
          break;
      }
    }

    init(){
      this.collision = false;
      this.invalid = false;
    }

    update(){
      this.checkCollision();
      this.draw();
    }

    checkCollision(){
        if(this.gridMap[this.gridRover.position.x][this.gridRover.position.y].obstacle){
          this.collision = true;
        }
    }

    getLocalizationMsg(){
      let str1 = "Mars rover is at cordinates (";
      let str2 = ", ";
      let str3 = ") facing to ";
      let str4 = ".";
      let cords;
      if(this.gridRover.direction.x == 1) cords = "East";
      if(this.gridRover.direction.x == -1) cords = "West";
      if(this.gridRover.direction.y == 1) cords = "South";
      if(this.gridRover.direction.y == -1) cords = "North";

      let message = str1+this.gridRover.position.x.toString()+str2+this.gridRover.position.y.toString()+str3+cords+str4;
      return message;
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
