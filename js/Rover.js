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
    let xCord, yCord;
    imageMode(CENTER)

    push();
    if(this.direction.x < 0){
      scale(-1,1);
      xCord = (-x-this.size)+this.size/2;
    }
    else{
      xCord = x+this.size/2;
    }

    translate(xCord, y + this.size/2);
    if(this.direction.y == 1){
      rotate(PI/2);
    }
    if(this.direction.y == -1){
      rotate(-PI/2);
    }

    image(roverIcon, 0, 0, this.size, this.size);
    pop();
  }



}
