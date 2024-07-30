var font;

function preload() {
  font = loadFont("BlackOpsOne-Regular.ttf");
}

var points;
var colors;

function setup() {
  createCanvas(800, 600);
  background(30, 30, 30);
  fill(0, 100);
  noStroke();

  // Generate points from the text
  points = font.textToPoints('BATH SPA', 100, 300, 100, {
    sampleFactor: 0.3,
  });

  // Generate a random color for each point
  colors = points.map(() => color(random(100, 255), random(50, 200), random(150, 255), 200));
}

function draw() {
  background(30, 30, 30);

  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var c = colors[i];
    
    fill(c);
    ellipse(p.x + random(-2, 2), p.y + random(-2, 2), random(5, 20), random(5, 20));
  }
}
