function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);
  frameRate(6)
}

function draw() {
  //
  background(140, 200, 220);

  for (let i = 0; i < 120; i++) {
    let x = random(width / 2)
    let y = random(height)
    let dia = map(y, 400, 0, 5, 30)
    circle(x, y, dia)
    noStroke()
    fill(180, 120, 100)

    rect(225, 300, 200, 200)
    fill(220, 200, 100)

    triangle(225, 300, 400, 300, 300, 200)
    fill(200, 150, 180)


    rect(280, 330, 50, 30)
    circle(300, 190, 20)
    fill(250, 100, 80)

    freq = frameCount * 0.09
    let sinVal = sin(freq)
    let size = map(sinVal, -1, 1, 50, 150)
    circle(400, 0, size);
    fill(random(255), random(255), random(255))


  }
}

function buttonClicked() {
  console.log("Button Clicked!");
  background(random(255));
}
