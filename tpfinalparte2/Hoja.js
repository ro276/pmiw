class Hoja {
  constructor(img) {
    this.img = img;
    this.x = random(150, 450);
    this.y = random(-200, -50);
    this.tam = 40;
    this.vel = random(2, 4);
  }

  dibujar() {
    image(this.img, this.x, this.y, this.tam, this.tam);
  }

  caer() {
    this.y += this.vel;
    if (this.y > height) {
      this.reiniciar();
    }
  }

  reiniciar() {
    this.x = random(150, 450);
    this.y = random(-200, -50);
  }
}
