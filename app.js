let shapes = [];
let islands = [];
let  bx = 0;
let  by = 0;
let  plywX = 0.0;
let  plywY = 0.0;
let ocean;

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}


function preload() {

  for (i = 0; i <= 11; i++) {
    numerek = i + 1;
    shapes[i] = loadImage("./shapes/" + numerek + ".png");
  }
  soundFormats('ogg', 'mp3');
  ocean = loadSound('sea-sound.mp3', );
}

function setup() {
  pixelDensity(1)

  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("body");

  textFont("Averia Sans Libre");
  textAlign(CENTER);

  for (i = 0; i < 12; i++) {
    islands[i] = new Wyspa (shapes[i]);
  }

  ocean.loop(0, 1, 0.5);
}

function draw() {

  if (windowWidth > windowHeight) {
     u = windowWidth/48;
  } else {
     u = windowHeight/24;
  }

  background(224);
  translate(windowWidth / 2+bx, windowHeight /2 +by);

  noFill();
  stroke(32);
  strokeWeight(0.5);
  let diameter = u*7;
  circle(0, 0, diameter);

  for (let i = 1; i <= 12; i++) {
    circle(0, 0, diameter * i);
  }

  for (let i = 1; i <= 12; i++) {
    push();
    rotate(i * (TWO_PI / 12));
    line(0, diameter / 2, 0, windowHeight*2);
    pop();
  }

  for (i = 0; i < 12; i++) {
    islands[i].draw(u*5);
  }

  fill(32);
  noStroke();
  textSize(u);
  text("Listen to\nthe Islands", noise(plywX)*10, 0);

  plywX = plywX + 0.01;
  plywY = plywY + 0.01;
}

function Wyspa(plik) {
  this.plik = plik;
  this.width = plik.width;
  this.height = plik.height;
  this.x = random(-windowWidth/2 , windowWidth/2);
  this.y = random(-windowHeight/2, windowHeight/2);

  this.draw = function (size) {
    push();
    translate(-this.width / 2, -this.height / 2);
    image(this.plik, this.x, this.y, size, size);
    pop();
  };
}

function touchStarted() {
  locked = true;
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function touchMoved() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function touchEnded() {
  locked = false;
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
