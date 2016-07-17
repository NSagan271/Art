//noprotect
var num = -1;
$(window).load(function(){
  var w = $(window).width();
  var h = $(window).height();

  var c=document.getElementById("myCanvas");
  c.width = w;
  c.height = h-60;
  var ctx=c.getContext("2d");

  var x1;
  var y1;
  var theta;
  var len = 12;



  var array = ["blue", "fuchsia", "chartreuse", "white", "yellow", "cyan","red","orange","purple","grey"];



  function drawLine(x1,y1,x2,y2,color,width){
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }

  // drawLine(0,h/2,w,h/2,"white",3);
 // drawLine(w/2,0,w/2,h,"white",3);
  draw();
  function draw(){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,w,h);
  num = Math.floor(Math.random()*31);
  for(var x = 0;x<w;x+=5){
    for(var y = 0;y<h;y+=5){
      x1 = (x-w/2)/80;
      y1 = -(y-h/2)/80;
      //var slope = (x1)+0.0;
      //drawLine(x-len/slope, y-len*slope, x+len/slope, y+len*slope, array[Math.floor(Math.random()*(array.length))], 1);
      var dy;
      switch(num){
        case 0: dy = y1% x1;break;
        case 1: dy = y1*x1;break;
        case 2: dy = y1/x1;break;
        case 3: dy = x1+y1;break;
        case 4: dy = -x1/y1;break;
        case 5:dy = Math.tan(x1+y1);break;
        case 6:dy = Math.tan(x1*y1);break;
        case 7:dy = Math.atan(x1/y1);break;
        case 8:dy = Math.atan(-x1/y1);break;
        case 9:dy = Math.acos(-x1/y1);break;
        case 10:dy = Math.atan(x1*y1);break;
        case 11:dy = 1/Math.sin(y1);break;
        case 12:dy = Math.sin(y1+Math.cos(x1)-Math.tan(x1+y1));break;
        case 13:dy = Math.sin(y1+Math.cos(x1)-Math.tan(x1/y1));break;
        case 14:dy = Math.tan(x1+Math.cos(x1)-Math.tan(x1/y1));break;
        case 15:dy = 1/Math.sin(Math.pow(Math.E,x1)+Math.cos(x1)-Math.tan(x1/y1));break;
        case 16:dy = Math.pow(y1,Math.cos(x1)-Math.tan(x1/y1));break;
        case 17:dy = Math.pow(Math.abs(y1),Math.sin(x1)*Math.tan(-x1%y1));break;
        case 18:dy = Math.pow(Math.abs(y1),Math.sin(x1)*Math.tan(-x1/y1));break;
        case 19:dy = Math.pow(Math.abs(y1),Math.sin(y1)*Math.tan(-y1/x1));break;
        case 20:dy = Math.tan(Math.abs(y1)-x1*Math.tan(-x1%y1));break;
        case 21:dy = Math.tan(Math.abs(y1)-x1*Math.tan(-y1%x1));break;
        case 22:dy = Math.tan(Math.abs(y1)/x1*Math.tan(-y1%x1));break;
        case 23:dy = Math.cos(Math.abs(x1)/y1*Math.atan(-y1%x1));break;
        case 24:dy = 1/Math.acos(Math.abs(x1)/y1*Math.atan(-y1%x1));break;
        case 25:dy = 1/Math.acos(Math.abs(x1)/y1*Math.cos(y1*x1));break;
        case 26:dy = 1/Math.asin(Math.tan(x1)/x1*Math.cos(y1*x1));break;
        case 27:dy = 1/Math.asin(Math.tan(x1)/x1*Math.cos(y1/x1));break;
        case 28:dy = 1/Math.asin(Math.asin(1/y1)/x1*Math.tan(y1/x1));break;
        case 29:dy = 1/Math.sin(Math.asin(1/y1)/x1*Math.tan(y1/x1));break;
        case 30:dy = Math.pow(Math.cos(-x1*y1),2);break;
        default:dy = Math.pow(Math.tan(-x1*y1),2)*x1/y1;
      }

      var dx = 1;
      theta = Math.atan(-dy/dx);
      drawLine(x-len*Math.cos(theta),y-len*Math.sin(theta),x+len*Math.cos(theta),y+len*Math.sin(theta),array[Math.floor(Math.random()*(array.length))],1);

    }
  }
}

 $("#next").click(function(){
   draw();
 });



});
