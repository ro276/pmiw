let juego;
let torry = [];
let hoja,hueso;
let sound;

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
