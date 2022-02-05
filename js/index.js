
  //Grid(posX, posY, gridSizeX, gridSizeY, cellSize)
  marsWorld = new Grid(15, 20, 19, 10, 40);
  console.log(marsWorld);



function setup(){
  createCanvas(800, 500);
  background(0);
}



function draw(){

  marsWorld.draw();



}
