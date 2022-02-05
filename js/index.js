
  //Grid(posX, posY, gridSizeX, gridSizeY, cellSize)
  marsWorld = new Grid(15, 20, 19, 10, 40);

function setup(){
  createCanvas(800, 500);
}

function draw(){
  background(0);
  marsWorld.draw();
}

function keyTyped(){
  if(keyCode == ENTER){
    marsWorld.driveRover('f');
  }
  if(key == 'q'){
    marsWorld.driveRover('l');
  }
  if(key == "w"){
    marsWorld.driveRover('r');
  }
}
