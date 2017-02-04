//noprotect
var num = -1;
$(window).load(function(){
  load();
});
$(window).resize(function(){
  load();
});
 $("#next").click(function(){
   load();
 });

function load(){
    var w = $(window).width();
    var h = $(window).height();

    var c=document.getElementById("myCanvas");
    c.width = w;
    c.height = h-30;
    var ctx=c.getContext("2d");

    var x1;
    var y1;
    var theta;
    var len = 12;
    var thickness=1;


    var array = ["blue", "fuchsia", "chartreuse", "white", "yellow", "cyan", "red", "orange", "purple", "grey"];



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
    num = Math.floor(Math.random()*45);
    switch(num){
      case 0: $(".eq").text("y%x");break;
      case 1: $(".eq").text("y*x");break;
      case 2: $(".eq").text("y/x");break;
      case 3: $(".eq").text("y+x");break;
      case 4: $(".eq").text("-x/y");break;
      case 5:$(".eq").text("tan(x+y)");break;
      case 6:$(".eq").text("tan(x*y)");break;
      case 7:$(".eq").text("atan(x/y)");break;
      case 8:$(".eq").text("atan(-x/y)");break;
      case 9:$(".eq").text("acos(-x/y)");break;
      case 10:$(".eq").text("atan(x*y)");break;
      case 11:$(".eq").text("1/sin(y)");break;
      case 12:$(".eq").text("sin(y+cos(x)-tan(x+y))");break;
      case 13:$(".eq").text("sin(y+cos(x)-tan(x/y))");break;
      case 14:$(".eq").text( "tan(x+cos(x)-tan(x/y))");break;
      case 15:$(".eq").text( "1/sin(e^x)+cos(x)-tan(x/y)");break;
      case 16:$(".eq").text( "y^(cos(x)-tan(x/y))");break;
      case 17:$(".eq").text("|y|^(sin(x)*tan(-x%y))");break;
      case 18:$(".eq").text("|y|^(sin(x)*tan(-x/y))");break;
      case 19:$(".eq").text( "|y|^(sin(y)*tan(-y/x))");break;
      case 20:$(".eq").text("tan(|y|-x*tan(-x%y))");break;
      case 21:$(".eq").text("tan(|y|-x*tan(-y%x))");break;
      case 22:$(".eq").text("tan(|y|/x*tan(-y%x))");break;
      case 23:$(".eq").text( "cos(|x|/y*atan(-y%x))");break;
      case 24:$(".eq").text( "1/acos(|x|/y1*atan(-y%x))");break;
      case 25:$(".eq").text( "1/acos(|x|/y1*cos(y*x))");break;
      case 26:$(".eq").text("1/asin(tan(x)/x*cos(y*x))");break;
      case 27:$(".eq").text("1/asin(tan(x)/x*cos(y/x))");break;
      case 28:$(".eq").text("1/asin(asin(1/y)/x*tan(y/x))");break;
      case 29:$(".eq").text("1/sin(asin(1/y)/x*tan(y/x))");break;
      case 30:$(".eq").text("cos(-x*y)^2");break;
      case 31:$(".eq").text("x^2");break;
      case 32:$(".eq").text("x^2/y");break;
      case 33:$(".eq").text("x/y^2");break;
      case 34:$(".eq").text( "|x/y|");break;
      case 35:$(".eq").text( "sin(x/y)");break;
      case 36:$(".eq").text("1/sin(x*y)");break; 
      case 37:$(".eq").text( "|x*y|^|y/x|");break;
      case 38:$(".eq").text( "cos(x*y)^|y/x|)");break;
      case 39:$(".eq").text( "tan(x%y)^sin(y*x)");break;
      case 40:$(".eq").text("atan(tan(x%y)/sin(y%x))");break;
      case 41:$(".eq").text("ln(x%y)");break;
      case 42:$(".eq").text("ln(x*y)/e^y");break;
      case 43:$(".eq").text("ln(atan(x/y))");break;
      default:$(".eq").text("tan(-x*y)^2*x/y");
    }
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
          case 31:dy = x1*x1;break;
          case 32:dy = x1*x1*y1;break;
          case 33:dy = x1/y1/y1;break;
          case 34:dy = Math.abs(x1/y1);break;
          case 35:dy = Math.sin(x1/y1);break;
          case 36:dy = 1/Math.sin(x1*y1);break;
          case 37:dy = Math.pow(Math.abs(x1*y1),Math.abs(y1/x1));break;
          case 38:dy = Math.pow(Math.cos(x1*y1),Math.abs(y1/x1));break;
          case 39:dy = Math.pow(Math.tan(x1%y1),Math.sin(y1*x1));break;
          case 40:dy = Math.atan(Math.tan(x1%y1)/Math.sin(y1%x1));break;
          case 41:dy = (Math.log(x1%y1));break;
          case 42:dy = (Math.log(x1*y1)/Math.pow(Math.E,y1));break;
          case 43:dy = (Math.log(Math.atan(x1/y1)));break;
          default:dy = Math.pow(Math.tan(-x1*y1),2)*x1/y1;
        }

        var dx = 1;
        theta = Math.atan(-dy/dx);
        drawLine(x-len*Math.cos(theta),y-len*Math.sin(theta),x+len*Math.cos(theta),y+len*Math.sin(theta),array[Math.floor(Math.random()*(array.length))],thickness);

      }
    }
  }
}
