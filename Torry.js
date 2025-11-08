class Torry{
  
     constructor(x,y,sizex,sizey) {
    x=this.x = width/2;
    y=this.y = height-121;
   sizex= this.sizex = 61;
    sizey=this.sizey = 119;
  }

  mostrar() {
    image(imgMovi,this.x,this.y,this.sizex,this.sizey);
  }
    mover() {
     if (mouseX && mouseY >0)
     this.x=mouseX;
     this.y =mouseY;
   
      }
  
  
}
