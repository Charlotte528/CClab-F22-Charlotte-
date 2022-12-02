let img;
//let img2, img3;

function preload() {
  img = loadImage("asset/picture1.png");
  //   img2 = loadImage("asset/picture2.jpg");
  //   img3 = loadImage("asset/picture3.png");
}



function setup() {
  let canvas = createCanvas(800, 700);
  canvas.parent("canvasContainer");
  //background(220);
}

function draw() {
  background(200, 180, 150);


  image(img, x, y, w, h);
  // ImageBitmapRenderingContext(CENTER);
  // image(img, 90, 60, 150, 180);
  // image(img2, 570, 90, 150, 180);
  // image(img3, 250, 250, 150, 200);

  fill(180, 0, 0);
  beginShape();
  vertex(250, 700);
  vertex(370, 700);
  vertex(490, 340);
  vertex(370, 340);
  endShape(CLOSE);

  //line(250,700,370,340)
  //line(370,700,490,340)
  fill(160, 80, 0)
  rect(370, 143, 120, 200)
  fill(255, 175, 0)
  circle(470, 243, 10)

  fill(180, 80, 0)
  rect(140, 300, 130, 200)
  beginShape()
  vertex(270, 300)
  vertex(270, 500)
  vertex(320, 480)
  vertex(320, 290)
  endShape(CLOSE);

  beginShape()
  vertex(140, 300)
  vertex(270, 300)
  vertex(320, 290)
  vertex(190, 290)
  endShape(CLOSE);

  fill(180, 80, 0)
  rect(80, 450, 130, 200)
  beginShape()
  vertex(210, 450)
  vertex(210, 650)
  vertex(260, 640)
  vertex(260, 440)
  endShape(CLOSE);

  beginShape()
  vertex(80, 450)
  vertex(210, 450)
  vertex(260, 440)
  vertex(130, 440)
  endShape(CLOSE);

  fill(255, 195, 0, 150)
  rect(80, 50, 170, 200)
  fill(255, 255, 255)
  rect(90, 60, 150, 180)

  fill(255, 195, 0, 150)
  rect(560, 80, 170, 200)
  fill(255, 255, 255)
  rect(570, 90, 150, 180)

  //right up
  fill(180, 80, 0)
  rect(510, 330, 130, 200)
  beginShape()
  vertex(640, 330)
  vertex(640, 530)
  vertex(690, 510)
  vertex(690, 320)
  endShape(CLOSE);

  beginShape()
  vertex(510, 330)
  vertex(640, 330)
  vertex(690, 320)
  vertex(560, 320)
  endShape(CLOSE);

  //right down
  fill(180, 80, 0)
  rect(460, 480, 130, 200)
  beginShape()
  vertex(590, 480)
  vertex(590, 680)
  vertex(640, 670)
  vertex(640, 470)
  endShape(CLOSE);

  beginShape()
  vertex(460, 480)
  vertex(590, 480)
  vertex(640, 470)
  vertex(510, 470)
  endShape(CLOSE);

}