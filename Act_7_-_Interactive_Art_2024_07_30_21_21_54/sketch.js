let shapes = ['circle', 'square', 'triangle'];
let prevX, prevY;

function setup() {
  createCanvas(600, 600);
  background(30);
  noStroke();
  prevX = mouseX;
  prevY = mouseY;
}

function draw() {
  // Fade the background slightly each frame to create trails
  fill(30, 20); // Semi-transparent fill for fading effect
  rect(0, 0, width, height);
  
  // Calculate the speed of the mouse
  let mouseSpeed = dist(mouseX, mouseY, prevX, prevY);
  prevX = mouseX;
  prevY = mouseY;
  
  if (mouseIsPressed) {
    // Draw dynamic shapes
    let shapeType = random(shapes);
    let size = map(mouseSpeed, 0, 50, 10, 100); // Size based on speed
    let r = random(50, 200);
    let g = random(50, 200);
    let b = random(200, 255);
    fill(r, g, b, 200); // Color with higher transparency

    push();
    translate(mouseX, mouseY);
    let angle = random(TWO_PI);
    rotate(angle);
    
    if (shapeType === 'circle') {
      ellipse(0, 0, size, size);
    } else if (shapeType === 'square') {
      rectMode(CENTER);
      rect(0, 0, size, size);
    } else if (shapeType === 'triangle') {
      triangle(-size / 2, size / 2, size / 2, size / 2, 0, -size / 2);
    }
    
    pop();
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(30); // Clear the canvas
  }
}
