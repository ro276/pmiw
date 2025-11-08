
class Juego{
  Jugador (){
    torry = new Torry();
    torry.mostrar(mouseX,mouseY,91,116);
torry.mover();
  }
  Fondo(px1,py1,px2,py2){
   px1= this.posx1;
    py1=this.posy1;
    px2=this.posx2;
    py2=this.posy2;

   fill(211,150,28);
   rectMode(CORNER);
rect(this.posx1,this.posy1,this.posx2,this.posy2);
    
  }
}
