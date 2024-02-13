var c = document.getElementById("Testing"); 
var ctx = c.getContext("2d");
function drawtrans(){
ctx.fillStyle = "red";
ctx.fillRect(100,100,50,50);
//Testing Translation
ctx.setTransform(1,0,0,1,0,0);
var x = 100; var y = 100;
var width = 50; var height = 50;
ctx.translate(100,10);
ctx.fillStyle = "red";
ctx.fillRect(100,100,50,50);
}
drawtrans();
 function serrotate(){
//draw Rectangle
ctx.fillStyle = "red";
ctx.fillRect(100,100,50,50);
  //Testing Rotation
ctx.setTransform(1,0,0,1,0,0);
 var angleRadians = 45*Math.PI/180;
 ctx.rotate(angleRadians);
 ctx.fillStyle = "red";
 ctx.fillRect(100,100,50,50);
}
function drawGraphics(){
 //draw Rectangle
ctx.fillStyle = "red";
ctx.fillRect(100,100,50,50);
//Testing Translate and Rotation
ctx.setTransform(1,0,0,1,0,0);
var angleRadians = 45*Math.PI/180;
var x = 100; var y = 100;
var width = 50; var height = 50;
ctx.translate(x+0.5*width,y+0.5*height);
ctx.rotate(angleRadians);
ctx.fillStyle = "red";
ctx.fillRect(-0.5*width,-0.5*height,width,height);
}
serrotate();
drawGraphics();