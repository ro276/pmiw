class Hueso {
  constructor(img) {
    this.img = img;
    this.x = random(150, 450);
    this.y = random(-300, -50);
    this.tam = 45;
    this.vel = random(3, 5);
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
    this.y = random(-300, -50);
  }
}
