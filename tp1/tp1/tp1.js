//Com1_Rosario Arri_122595/8
//
let img;
function preload(){
 img=loadImage('30.png'); 
}
function setup() {
  createCanvas(800, 400);
   
 background(255);

}
  

  


function draw() {
image(img,400,400);
     if (key == ' '){
fondo();
  
  }else{
   
  }

      
     patron();
 agujero(0,0);
   
}
let mas=0;
   function agujero(centerx, centery){
   let i,ii;
     
     mas+=9;
   i=600;
   ii=height/2;
   if (mouseIsPressed)
      {
        centerx =mouseX; centery = mouseY;
      }
        
      let ll= map(mas,0,150, 50, 20);
      
noStroke();

 fill(9,ll);
         translate(i,ii);
      ellipse(centerx,centery,240+mas,140+mas);
     fill(14);
    
      ellipse(centerx,centery,240,150);
     
   }
function fondo(){
        for( let bob=405; bob<width; bob+=25){ 
   for( let pa=7; pa<height; pa+=25){
    
     noStroke();
     fill(0,2);
   
     ellipse(bob+12,pa,30,30);
     ellipse(bob,pa+12,30,30);

   }}}


function patron(){
       for( let bob=405; bob<width; bob+=25){ 
   for( let pa=7; pa<height; pa+=25){
    
     noStroke();
     fill(0);
   
     ellipse(bob+12,pa,15,9);
     ellipse(bob,pa+12,15,9);
   }}   
}

