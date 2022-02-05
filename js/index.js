
  //Grid(posX, posY, gridSizeX, gridSizeY, cellSize)
  marsWorld = new Grid(10, 10, 10, 8, 20);
  console.log(marsWorld);


function setup(){
  createCanvas(300, 300);
  background(0);
}



function draw(){

  marsWorld.draw();

}
