
//Grid(posX, posY, gridSizeX, gridSizeY, cellSize)
let marsWorld = new Grid(20, 20, 19, 14, 40);
let board = document.getElementById("board");
let error = document.getElementById("errorMessage");
let cords = document.getElementById("cords");

function keyTyped(){
  userStartAudio();
}

function setup(){
  cords.innerHTML = marsWorld.getLocalizationMsg();
  createCanvas(800, 600);
  noLoop();
}

function draw(){
  background(0);
  marsWorld.update();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function processChar(letter, index){
  board.innerHTML = index+1 + ": " + letter.toUpperCase();
  marsWorld.driveRover(letter);
  draw();
}

async function onSubmit(event){
  event.preventDefault();
  error.innerHTML = "";
  let commands = document.getElementById("commands").value;

  for(let i=0; i < commands.length; i++){
    processChar(commands[i], i);
    if(marsWorld.collision || marsWorld.invalid){
      alarm.play();
      break;
    }
    success.play();
    cords.innerHTML = marsWorld.getLocalizationMsg();
    await sleep(1000);
  }

  if(marsWorld.invalid){
    error.innerHTML = "MISSION ABORTED: Invalid command!"
  }
  if(marsWorld.collision){
    error.innerHTML ="MISSION ABORTED: Obstacle Found!"

    marsWorld.gridRover.position.set(marsWorld.gridRover.previousPosition.x, marsWorld.gridRover.previousPosition.y);
    draw();
  }

  marsWorld.init();
  cords.innerHTML = marsWorld.getLocalizationMsg();
}
