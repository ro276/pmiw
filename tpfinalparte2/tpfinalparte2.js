let torry;
let juego;
let imgMovi=[];
function setup() {
createCanvas(640,480);
background(173,86,19);
torry = new Torry();
}
function preload (){
  for(i=0;i<3;i++){
  imgMovi = loadImage("data/torry"+i+".png");
  }
}

function draw() {
  fill(211,150,28);
rect(150,0,300,height);
torry.mostrar(mouseX,mouseY,91,116);
torry.mover();
}
