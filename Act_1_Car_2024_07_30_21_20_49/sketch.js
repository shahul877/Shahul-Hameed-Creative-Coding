function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240); // light gray background
  
  // body of the car 
  fill(255, 69, 0); // orange-red color
  rect(50, 200, 300, 50); // main body
  rect(120, 170, 160, 30); // front part
  
  // wheels 
  fill(0); // black color
  ellipse(100, 250, 60, 60); // front wheel
  ellipse(300, 250, 60, 60); // back wheel
  
  // roof 
  fill(255, 69, 0); // orange-red color
  rect(130, 140, 140, 30); // roof
  
  // windows
  fill(135, 206, 250); // sky blue color
  rect(140, 145, 50, 20); // left window
  rect(210, 145, 50, 20); // right window
  
  // headlights
  fill(255, 255, 0); // yellow color
  ellipse(50, 220, 20, 20); // left headlight
  ellipse(350, 220, 20, 20); // right headlight
  
  // taillights
  fill(255, 0, 0); // red color
  ellipse(80, 230, 20, 20); // left taillight
  ellipse(320, 230, 20, 20); // right taillight
  
  // Adding a spoiler
  fill(255, 69, 0); // orange-red color
  rect(140, 120, 120, 10); // spoiler
}
