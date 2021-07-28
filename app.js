/*function preload {

}*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Arial");
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  background(220);
  translate(windowWidth / 2, windowHeight / 2);

  fill(32);
  noStroke();
  text("Archipelago", 0, 0);
  plusik(0, 20);

  noFill();
  stroke(224, 32, 32);
  let diameter = 200;
  circle(0, 0, diameter);

  for (let i = 1; i <= 12; i++) {

    circle (0, 0, diameter*i)
  }

  for (let i = 1; i <= 12; i++) {
    push();
    rotate(i * (TWO_PI / 12));
    line(0, diameter / 2, 0, windowHeight);
    pop();
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function plusik(x, y) {
  noFill();
  stroke(32);
  circle(x, y, 20);
  line(x, y-5, x, y+5);
  line(x-5, y, x+5, y);
}
