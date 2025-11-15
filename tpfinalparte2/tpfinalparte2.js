//https://youtu.be/_hxG9E8NZfk   Com1
//Rosario Arri_122595/8
let juego;


function preload() {
 
  juego = new Juego();
  juego.cargarImagenes();
  juego.cargarSonido();
}

function setup() {
  createCanvas(640, 480);
  
  juego.iniciar();

}

function draw() {
  background(173, 86, 19);
  juego.actualizar();
}

function keyPressed() {
  juego.teclas(key, keyCode);
}

