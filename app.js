let shapes = [];
let islands = [];
let  bx = 0;
let  by = 0;

function preload() {
  for (i = 0; i <= 11; i++) {
    numerek = i + 1;
    shapes[i] = loadImage("./shapes/" + numerek + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Averia Sans Libre");
  textAlign(CENTER);
  textSize(24);

  for (i = 0; i < 12; i++) {
    islands[i] = new Wyspa (shapes[i]);
  }

}

function draw() {
  background(224);
  translate(windowWidth / 2+bx, windowHeight /2 +by);

  fill(32);
  noStroke();
  text("Archipelago", 0, 0);
  plusik = new Plusik(0, 20);

  noFill();
  strokeWeight(0.5);
  stroke(224, 32, 32);
  let diameter = 200;
  circle(0, 0, diameter);

  for (let i = 1; i <= 12; i++) {
    circle(0, 0, diameter * i);
  }

  for (let i = 1; i <= 12; i++) {
    push();
    rotate(i * (TWO_PI / 12));
    line(0, diameter / 2, 0, windowHeight);
    pop();
  }

  for (i = 0; i < 12; i++) {
    islands[i].draw();
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Plusik(x, y) {
  noFill();
  stroke(32);
  circle(x, y, 20);
  line(x, y - 5, x, y + 5);
  line(x - 5, y, x + 5, y);
}

function Wyspa(plik) {
  this.plik = plik;
  this.width = plik.width;
  this.height = plik.height;
  this.x = random(-windowWidth , windowWidth);
  this.y = random(-windowHeight, windowHeight);

  this.draw = function () {
    push();
    translate(-this.width / 2, -this.height / 2);
    image(this.plik, this.x, this.y);
    pop();
  };
}

function mousePressed() {
  locked = true;
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}
