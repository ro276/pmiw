//Com1_Arri Rosario-122595/8
//https://youtu.be/KlTNNk5LCwE

let img;
function preload(){
  img=loadImage('data/optArt_30.png');
 
}
function setup() {
  createCanvas(800, 400);
 background(255);
     image(img,0,0,400,400);
     

}
  

  

let mas=0;
function draw() {

   mas+=9;

if (key == ' '){
fondo(12,12);
  
  }else{
  
   
  }


      
     patron(12,12);
 agujero(0,0);
   
}

   function agujero(centerx, centery){
     
      let ll= map(mas,0,150, 50, 20);
      
noStroke();

 fill(9,ll);
         translate(600,200);
      ellipse(centerx,centery,240+mas,140+mas);
     fill(14);
    
      ellipse(centerx,centery,240,150);
     
   }
function fondo(x,y){
 
        for( let bob=405; bob<width; bob+=25){ 
   for( let pa=7; pa<height; pa+=25){
    
     noStroke();
     fill(0,2);
   
     ellipse(bob+x,pa,30,30);
     ellipse(bob,pa+y,30,30);
     

   }}}


function patron(xr, yr){
       for( let bob=405; bob<width; bob+=25){ 
   for( let pa=7; pa<height; pa+=25){
    
     noStroke();
     fill(0);
   
     ellipse(bob+xr,pa,15,9);
     ellipse(bob,pa+yr,15,9);
   }}   
}




