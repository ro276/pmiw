class Juego {
  constructor() {
    this.estado = 0; // 0=inicio, 1=jugando, 2=ganaste, 3=perdiste
    this.hojas = [];
    this.huesos = [];
    this.imgMovi = [];
  }

  // cargar imagenes
  cargarImagenes() {
    for (let i = 0; i < 3; i++) {
      this.imgMovi[i] = loadImage("data/torry" + i + ".png");
    }
    this.hojaImg = loadImage("data/hoja.png");
    this.huesoImg = loadImage("data/hueso.png");
  }
  cargarSonido(){
    
  this.sonidoHoja= loadSound('data/agarrado.mp3');
  
  }

  // inicio del juego y objetos
  iniciar() {
    this.tiempo = new Tiempo(10);
    this.torry = new Torry(this.imgMovi);
    this.hojas = [];
    this.huesos = [];

    for (let i = 0; i < 5; i++) {
      this.hojas.push(new Hoja(this.hojaImg));
    }
    for (let i = 0; i < 3; i++) {
      this.huesos.push(new Hueso(this.huesoImg));
    }
  }

  // dibujo deñ fondo central
  Fondo(px1, py1, px2, py2){
    fill(211, 150, 28);
    rectMode(CORNER);
    rect(px1, py1, px2, py2);
  }

  // actualizacion todo segun el estado
  actualizar() {
    this.Fondo(150, 0, 300, height);

    if (this.estado == 0) {
      // pantalla de inicio
      fill(255);
      textAlign(CENTER);
      textSize(20);
      text("El Emisario", width / 2, 120);
      textSize(15);
      text("Move el mouse para guiar a Torry", width / 2, 160);
      text("Evita los huesos y junta 10 hojas en 10 segundos", width / 2, 190);
      text("Presiona ENTER para comenzar", width / 2, 230);
      textSize(12);
      text("Desarrollado por Hernan Cortez - Arri Rosario", width / 2, 460);
    }

    if (this.estado == 1) {
      // juego en curso
      this.tiempo.mostrar();
      this.torry.mostrar();
      this.torry.mover();

      // Hojas
      for (let i = 0; i < this.hojas.length; i++) {
        this.hojas[i].caer();
        this.hojas[i].mostrar();
        if (this.torry.toca(this.hojas[i])) {
          this.hojas[i].reiniciar();
          this.tiempo.sumarPunto();
        }
      }

      // Huesos
      for (let i = 0; i < this.huesos.length; i++) {
        this.huesos[i].caer();
        this.huesos[i].mostrar();
        if (this.torry.toca(this.huesos[i])) {
          this.estado = 3;
        }
      }

      // chequeo si gana o pierde
      if (this.tiempo.gano()) {
        this.estado = 2;
      }
      if (this.tiempo.termino()) {
        this.estado = 3;
      }
    }

    if (this.estado === 2) {
      // Ganó
      fill(255);
      textAlign(CENTER);
      textSize(25);
      text("¡Ganaste!", width / 2, height / 2);
      textSize(15);
      text("Presiona R para reiniciar", width / 2, height / 2 + 30);
    }

    if (this.estado === 3) {
      // Perdió
      fill(255);
      textAlign(CENTER);
      textSize(25);
      text("Perdiste", width / 2, height / 2);
      textSize(15);
      text("Presiona R para reiniciar", width / 2, height / 2 + 30);
    }
  }

  // manejo de las teclas
  teclas(tecla, codigo) {
    if (tecla == "r" || tecla == "R") {
      this.estado = 0;
      this.iniciar();
    }
    if (codigo == ENTER && this.estado == 0) {
      this.estado = 1;
      this.tiempo.iniciar();
    }
  }
}
