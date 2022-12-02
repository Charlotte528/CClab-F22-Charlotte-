let img;
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);
}

function preload() {
  img = (loadImage("assets/下载.png"))
}
function draw() {
  //
  background(220);
  Image(img, mouseX, mouseY, 30, 30);
}