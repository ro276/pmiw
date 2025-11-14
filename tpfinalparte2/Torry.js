class Torry {
  constructor(imgs) {
    this.imgs = imgs;
    this.x = width / 2;
    this.y = height - 121;
    this.sizex = 61;
    this.sizey = 119;
  }

  mostrar() {
    image(this.imgs[0], this.x, this.y, this.sizex, this.sizey);
  }

  mover() {
    if (mouseX >130  && mouseX < 400){
      
    this.x = mouseX
    constrain(mouseX, 150, 450 - this.sizex);
    this.y =mouseY 
    constrain(mouseY, 0, height - this.sizey);
    }}
  toca(obj) {
    return (
      this.x < obj.x + obj.tam && this.x + this.sizex > obj.x &&this.y < obj.y + obj.tam &&this.y + this.sizey > obj.y
    );
    
  }
}
