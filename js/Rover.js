class Rover{
  constructor(posX, posY, size){
    this.position = new p5.Vector(posX, posY);
    this.direction = new p5.Vector(1, 0);
    this.size = size;
  }

  moveForward(){
    this.position.add(this.direction);
  }

  changeDirection(option){
    if(this.direction.x == 1){
      if(option == 'L'){
        this.direction.set(0, -1);
      } else{
        this.direction.set(0, 1);
      }
    }
    else if(this.direction.x == -1){
      if(option == 'L'){
        this.direction.set(0, 1);
      } else{
        this.direction.set(0, -1);
      }
    }
    else if(this.direction.y == 1){
      if(option == 'L'){
        this.direction.set(1, 0);
      } else{
        this.direction.set(-1, 0);
      }
    }
    else if(this.direction.y == -1){
      if(option == 'L'){
        this.direction.set(-1, 0);
      } else{
        this.direction.set(1, 0);
      }
    }
  }

  draw(x, y){
    stroke(255);
    fill(250);
    circle(x+this.size/2, y+this.size/2, this.size);
  }



}
