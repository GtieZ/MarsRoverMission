
//Grid(posX, posY, gridSizeX, gridSizeY, cellSize)
let marsWorld = new Grid(15, 20, 19, 14, 40);
let board = document.getElementById("board");

function setup(){
  createCanvas(800, 600);
  noLoop();
}

function draw(){
  background(0);
  marsWorld.update();
}

function processChar(letter, index){
  board.innerHTML = index+1 + ": " + letter.toUpperCase();
  marsWorld.driveRover(letter);
  draw();
}






function onSubmit(event){
  event.preventDefault();
  let instructions = document.getElementById("instructions").value;

  [...instructions].forEach((letter, index) => {
    setTimeout(processChar, 1000*index, letter, index);
  });


  console.log(instructions);
}











function keyTyped(){
  userStartAudio();

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
