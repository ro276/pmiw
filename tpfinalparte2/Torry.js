class Torry {
  constructor(imgs) {
    this.imgs = imgs;
    this.x = width / 2;
    this.y = height - 121;
    this.sizex = 61;
    this.sizey = 119;
  }

  dibujar() {
    image(this.imgs[0], this.x, this.y, this.sizex, this.sizey);
  }

  mover() {
    // control de mouse, limitado al area central (150 a 450)
    this.x = constrain(mouseX, 150, 450 - this.sizex);
    this.y = constrain(mouseY, 0, height - this.sizey);
  }

  chocaCon(obj) {
    return (
      this.x < obj.x + obj.tam &&
      this.x + this.sizex > obj.x &&
      this.y < obj.y + obj.tam &&
      this.y + this.sizey > obj.y
    );
  }
}
