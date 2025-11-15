class Juego {
  constructor() {
    // estados: 0=inicio, 1=jugando, 2=ganaste, 3=perdiste
    this.estado = 0;

    //objetos
    this.hojas = [];
    this.huesos = [];
    this.imgMovi = [];

  

    // control para reproducir intro una sola vez cuando llega a pantalla inicio
    this._introMostrado = false;
    this._musicaSonando = false;
  }

  // carga de imagenes y sonidos dp
  cargarRecursos() {
    for (let i = 0; i < 3; i++) {
      this.imgMovi[i] = loadImage("data/torry" + i + ".png");
    }
    this.hojaImg = loadImage("data/hoja.png");
    this.huesoImg = loadImage("data/hueso.png");

    // sonidos
    this.s_intro = loadSound("data/intro.mp3");
    this.s_musica = loadSound("data/musica.mp3");
    this.s_hoja = loadSound("data/hojaganada.mp3");
    this.s_ganaste = loadSound("data/sganaste.mp3");
    this.s_perdiste = loadSound("data/sperdiste.mp3");

    // nivel de volumen
    this.s_intro.setVolume(0.6);
    this.s_musica.setVolume(0.5);
    this.s_hoja.setVolume(0.7);
    this.s_ganaste.setVolume(0.8);
    this.s_perdiste.setVolume(0.8);
  }

  // inicio partida
  iniciar() {
    this.tiempo = new Tiempo(10); // 10 segundos
    this.torry = new Torry(this.imgMovi);
    this.hojas = [];
    this.huesos = [];

    // caida de hojas y huesos
    for (let i = 0; i < 5; i++) {
      this.hojas.push(new Hoja(this.hojaImg));
    }
    for (let i = 0; i < 3; i++) {
      this.huesos.push(new Hueso(this.huesoImg));
    }

    // reset controles de sonido
    this._introMostrado = false;
    this._musicaSonando = false;
    // reiniciar puntos
    if (this.tiempo) this.tiempo.reiniciarPuntos();
  }

  // dibujo de fondo
  dibujarFondo(px1, py1, px2, py2) {
    fill(211, 150, 28);
    rectMode(CORNER);
    rect(px1, py1, px2, py2);
  }

  //pantallas
  dibujar() {
    // fondo central
    this.dibujarFondo(150, 0, 300, height);

    if (this.estado == 0) {
      // pantalla inicio
      fill(255);
      textAlign(CENTER);
      textSize(24);
      text("El Emisario", width / 2, 120);
      textSize(15);
      text("Move el mouse para guiar a Torry", width / 2, 160);
      text("Evita los huesos y junta 10 hojas en 10 segundos", width / 2, 190);
      text("Presiona ENTER para comenzar", width / 2, 230);
      textSize(12);
      text("Hecho por Hernan Cortez - Arri Rosario", width / 2, 460);

      // reproducir intro una sola vez al mostrar pantalla
      if (!this._introMostrado) {
        if (this.s_musica && this.s_musica.isPlaying()) {
          this.s_musica.stop();
        }
        if (this.s_intro && !this.s_intro.isPlaying()) {
          this.s_intro.play();
        }
        this._introMostrado = true;
      }
    }

    if (this.estado == 1) {
      // juego en curso
      this.tiempo.mostrar();
      this.torry.dibujar();
      for (let i = 0; i < this.hojas.length; i++) {  //hojas y huesos
        this.hojas[i].dibujar();
      }
      for (let i = 0; i < this.huesos.length; i++) {
        this.huesos[i].dibujar();
      }

      if (!this._musicaSonando) { // chequeo de musica de juego que este sonando
      if (this.s_intro && this.s_intro.isPlaying()) {
          this.s_intro.stop();
        }
        if (this.s_musica && !this.s_musica.isPlaying()) {
          this.s_musica.loop();
        }
        this._musicaSonando = true;
      }}
    if (this.estado == 2) {
      // user gano
      fill(255);
      textAlign(CENTER);
      textSize(25);
      text("¡Ganaste!", width / 2, height / 2);
      textSize(15);
      text("Presiona ESPACIO para reiniciar", width / 2, height / 2 + 30);

      //sonido de victoria solo una vez
      if (this.s_musica && this.s_musica.isPlaying()) {
        this.s_musica.stop();
      }
      if (this.s_ganaste && !this.s_ganaste.isPlaying()) {
        this.s_ganaste.play();
      }}
    if (this.estado == 3) {
      // user perdio
      fill(255);
      textAlign(CENTER);
      textSize(25);
      text("Perdiste", width / 2, height / 2);
      textSize(15);
      text("Presiona ESPACIO para reiniciar", width / 2, height / 2 + 30);

      //sonido de derrota solo una vez
      if (this.s_musica && this.s_musica.isPlaying()) {
       this.s_musica.stop();
      }
      if (this.s_perdiste && !this.s_perdiste.isPlaying()) {
        this.s_perdiste.play();
      }}}

  // colisiones, movimiento y control
  actualizar() {
    if (this.estado == 1) {
      // mover Torry
      this.torry.mover();

      // Hojas: caer y colisión
      for (let i = 0; i < this.hojas.length; i++) {
        this.hojas[i].caer();
        // colision
        if (this.torry.chocaCon(this.hojas[i])) {
          this.hojas[i].reiniciar();
          this.tiempo.sumarPunto();
          if (this.s_hoja && !this.s_hoja.isPlaying()) {   // sonido tocar hoja
            this.s_hoja.play();
          } else if (this.s_hoja) {
            this.s_hoja.play();
          }}}

      // Huesos: caer y la colisión
      for (let i = 0; i < this.huesos.length; i++) {
        this.huesos[i].caer();
        if (this.torry.chocaCon(this.huesos[i])) {
          this.estado = 3;  // pierde inmediatamente al chocar con un hueso
        }}

      if (this.tiempo.gano()) {  // chequeo de ganar mas el tiempo
        this.estado = 2;
      }
      if (this.tiempo.termino()) {
        this.estado = 3;
      } } }

  // Manejo de las teclas
  teclas(tecla, codigo) {
    if ((tecla === " " || codigo === 32) && (this.estado === 2 || this.estado === 3)) {   // Reinicio con ESPACIO
      // detener sonidos finales si estan sonando
      if (this.s_ganaste && this.s_ganaste.isPlaying()) this.s_ganaste.stop();
      if (this.s_perdiste && this.s_perdiste.isPlaying()) this.s_perdiste.stop();
      this.estado = 0;
      this.iniciar();
    }
    if (codigo === ENTER && this.estado === 0) {     // comienza el juego con ENTER desde pantalla inicio
      this.estado = 1;
      this.tiempo.iniciar();
      // chequeo de intro que no siga sonando y que la musica empiece
      if (this.s_intro && this.s_intro.isPlaying()) this.s_intro.stop();
      if (this.s_musica && !this.s_musica.isPlaying()) this.s_musica.loop();
      this._musicaSonando = true;
    }
  }
}
