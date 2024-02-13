var c = document.getElementById("test");
var dr= c.getContext("2d");
var c = document.getElementById("test");
var d= c.getContext("2d");
function newwidth(){
        var w = document.getElementById("text").value;
        dr.lineWidth= w;
     }
function drawant(){
        let col= document.getElementById("change").value
        dr.fillstyle=col;
        dr.beginPath();
        dr.moveTo(390,390);
        dr.lineTo(450,550);
        dr.lineTo(590,570);
        dr.lineTo(600,430);
        dr.lineTo(490,290);
        dr.fillStyle = "#EF913E ";
        dr.fill();
        dr.closePath();
        dr.stroke();
// body
        dr.beginPath();
        dr.lineWidth=d;
        dr.roundRect(350,230,130,150,50);
        dr.fillStyle = col;
        dr.fill();
        dr.stroke();
//head
        dr.beginPath();
        dr.arc(300,200,90,2,3*Math.PI);
        dr.fillStyle = "#EF913E ";
        dr.fill();
        dr.stroke();
// a
        dr.moveTo(250,145);
        dr.lineTo(150,100);
        dr.lineTo(150,150);
        dr.stroke();
// b
        dr.moveTo(255,155);
        dr.lineTo(160,110);
        dr.lineTo(158,155);
        dr.stroke();
// c
        dr.moveTo(350,150);
        dr.lineTo(450,100);
        dr.lineTo(440,140);
        dr.stroke();
// d
        dr.moveTo(360,160);
        dr.lineTo(440,110);
        dr.lineTo(430,140);
        dr.stroke();
//circle a
        dr.beginPath();
        dr.arc(150,165,20,0,2*Math.PI);
        dr.fillStyle = "#81450F";
        dr.fill();
        dr.stroke();
//circle b
        dr.beginPath();
        dr.arc(430,155,20,0,2*Math.PI);
        dr.stroke();
        dr.fillStyle = c;
        dr.fill();
//eye1
        dr.beginPath();
        dr.arc(260,190,30,0,2*Math.PI);
        dr.fillStyle = "black";
        dr.fill();
        dr.stroke();

        dr.beginPath();
        dr.arc(260,200,10,0,2*Math.PI);
        dr.fillStyle = "white";
        dr.fill();
        dr.stroke();
//eye2
        dr.beginPath();
        dr.arc(330,190,30,0,2*Math.PI);
        dr.fillStyle = "black";
        dr.fill();
        dr.stroke();

        dr.beginPath();
        dr.arc(325,200,10,0,2*Math.PI);
        dr.fillStyle = "white";
        dr.fill();
        dr.stroke();

//moute f1
        dr.beginPath();
        dr.lineWidth="3";
        dr.moveTo(150,365);
        dr.lineTo(260,240);
        dr.lineTo(260,290);
        dr.lineTo(240,290);
        dr.lineTo(240,310);
        dr.lineTo(220,310);
        dr.lineTo(220,330);
        dr.lineTo(200,330);
        dr.lineTo(200,350);
        dr.lineTo(180,350);
        dr.lineTo(180,370);
        dr.lineTo(170,375);
        dr.fillStyle = "darkred";
        dr.fill();
        dr.closePath();
        dr.stroke();
//moute 2nd
        dr.beginPath();
        dr.lineWidth="3";
        dr.moveTo(340,385);
        dr.lineTo(340,240);
        dr.lineTo(310,280);
        dr.lineTo(320,300);
        dr.lineTo(310,310);
        dr.lineTo(320,330);
        dr.lineTo(310,340);
        dr.lineTo(320,350);
        dr.lineTo(305,370);
        dr.lineTo(320,390);
        dr.fillStyle = "darkred";
        dr.fill()
        dr.closePath();
        dr.stroke();

// leg 1

        dr.moveTo(380,300);
        dr.lineWidth="3";
        dr.lineTo(380,450);
        dr.lineTo(280,550);
        dr.stroke();

        dr.moveTo(370,300);
        dr.lineWidth="3";
        dr.lineTo(360,450);
        dr.lineTo(270,550);
        dr.stroke();
// leg 2

        dr.moveTo(410,330);
        dr.lineWidth="3";
        dr.lineTo(410,470);
        dr.lineTo(330,530);
        dr.stroke();

        dr.moveTo(420,330);
        dr.lineWidth="3";
        dr.lineTo(420,490);
        dr.lineTo(350,530);
        dr.stroke();
// leg 3

        dr.moveTo(450,350);
        dr.lineWidth="3";
        dr.lineTo(480,470);
        dr.lineTo(430,530);
        dr.stroke();

        dr.moveTo(460,360);
        dr.lineWidth="3";
        dr.lineTo(490,480);
        dr.lineTo(450,530);
        dr.stroke();
/// back leg 1

        dr.moveTo(320,300);
        dr.lineTo(200,400);
        dr.lineTo(250,500);
        dr.stroke();
        dr.lineWidth="3";
        dr.moveTo(320,310);
        dr.lineTo(210,400);
        dr.lineTo(250,500);
        dr.stroke();
}
color();
function drawfish(){
        d.beginPath();
        d.lineTo(300,300);
        d.lineTo(300,300);
        d.quadraticCurveTo(-100,200,250,120);
        d.bezierCurveTo(340,20,288,19,288,270);
        d.fillStyle="#9452bd";
        d.fill();
        d.closePath();
        d.stroke();
        //detail

        d.beginPath();
        d.lineTo(255,120);
        d.quadraticCurveTo(220,170,260,265);
        // d.closePath();
        d.fillStyle="#47215e";
        d.fill();
        d.stroke();
        // hong keep

        d.moveTo(130,160);
        d.quadraticCurveTo(200,140,160,240);
        d.stroke();

        //kee
        d.beginPath()
        d.moveTo(180,170);
        d.bezierCurveTo(340,80,258,200,180,215);
        d.fillStyle="#601b8b";
        d.fill();
        d.stroke();

        //details
        d.moveTo(255,160);
        d.lineTo(190,200);
        d.stroke()

        d.moveTo(250,155);
        d.lineTo(185,185);
        d.stroke()
        //kee loum

        d.beginPath();
        d.moveTo(150,250);
        d.lineTo(200,300);
        d.bezierCurveTo(240,280,258,300,180,255);
        d.fillStyle="#3d0d5b";
        d.fill();
        //narm loum

        d.beginPath();
        d.moveTo(280,275);
        d.lineTo(170,250);
        d.closePath();
        d.stroke();
        //details
        d.moveTo(170,260);
        d.lineTo(205,290);
        d.stroke()
        d.moveTo(175,260);
        d.lineTo(215,285);
        d.stroke()
//park
        d.beginPath();
        d.arc(89,204,3,0,2*Math.PI/1);
        d.fillStyle="#00000";
        d.fill();
        d.closePath();
        d.stroke();
        // ta

        d.beginPath();
        d.arc(120,190,5,0,2*Math.PI/1);
        d.fillStyle="white";
        d.fill();
        d.closePath();
        d.stroke()

        d.beginPath();
        d.arc(118,192,2,0,2*Math.PI/1);
        d.lineWidth=w;
        d.fillstyle="black";
        d.fill();
        d.stroke();
}