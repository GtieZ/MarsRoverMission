


//Grid(posX, posY, gridSizeX, gridSizeY, cellSize)
marsWorld = new Grid(15, 20, 19, 14, 40);

function setup(){
  createCanvas(800, 600);
}

function draw(){
  background(0);
  marsWorld.update();

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
