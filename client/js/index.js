
setCanvasSize();
drawMoon();

var rocket = {
  image: new Image(),
  x: 100,
  y: 100,
  images: 8,
  imageNumber: 0,
  speed: 10
};

rocket.image.src = '/images/rocket.png';
rocket.image.onload = function() {
  rocket.x = window.innerWidth/2 - rocket.image.width/8;
  rocket.y = window.innerHeight - rocket.image.height/2;

  drawRocket();

  setInterval(function() {
    rocket.y--;
    redraw();
  }, rocket.speed);
};

$(window).resize(function(){
  setCanvasSize();
  clearCanvas();
  drawMoon();
  drawRocket()
});

function setCanvasSize() {
	var canvas = $('canvas');
	canvas.attr('width', window.innerWidth);
	canvas.attr('height', window.innerHeight);
}

function redraw() {
  clearCanvas();
  drawMoon();
  drawRocket();
}

function clearCanvas() {
  var canvas = $('canvas')[0];
  var context = canvas.getContext('2d');

  context.clearRect(0,0,canvas.width, canvas.height);
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

function drawRocket() {
  var canvas = $('canvas')[0];
  var context = canvas.getContext('2d');

  var sprite = {
    x: rocket.image.width/4 * (rocket.imageNumber%4),
    y: rocket.image.height/2 * Math.floor(rocket.imageNumber/4),
    width: rocket.image.width/4,
    height: rocket.image.height/2
  };

  var draw = {
    x: rocket.x,
    y: rocket.y,
    width: rocket.image.width/4,
    height: rocket.image.height/2
  };

  context.drawImage(rocket.image, 
      sprite.x, sprite.y,
      sprite.width, sprite.height,
      draw.x, draw.y, 
      draw.width, draw.height
    );

  rocket.imageNumber = (rocket.imageNumber + 1) % rocket.images;
}