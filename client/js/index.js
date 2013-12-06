
setCanvasSize();
drawMoon();


var rocket = new Image();
rocket.src = '/images/rocket.png';
rocket.onload = function() {
  console.log(rocket)
  drawRocket(200,200);
};

$(window).resize(function(){
  setCanvasSize();
  drawMoon();
});

function setCanvasSize() {
	var canvas = $('canvas');
	canvas.attr('width', window.innerWidth);
	canvas.attr('height', window.innerHeight);
}

function drawMoon() {
  var canvas = $('canvas')[0];
  var context = canvas.getContext('2d');
  
  var multipier = 5;
  var radius = canvas.width*multipier;

  var centerX = canvas.width / 2;
  var centerY = canvas.height+radius-40;

  context.beginPath();
  context.arc(centerX, centerY, radius, Math.PI,2 *  Math.PI, false);
  context.fillStyle = 'rgb(80, 80, 80)';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = 'rgb(85,85,85)';
  context.stroke();
}
var width = 100;
var height = 150;

function drawRocket(x,y) {
  var canvas = $('canvas')[0];
  var context = canvas.getContext('2d');

  //$('body').append(rocket);

  context.drawImage(rocket, 
      0,0,
      width, height,
      x, y, 
      width, height
    );
}