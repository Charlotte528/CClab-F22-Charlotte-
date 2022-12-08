let img;
let song;
function preload() {
  img = loadImage("asset/image1.png");
  img2 = loadImage("asset/image2.png");
  img3 = loadImage("asset/picture3.png");
  img4 = loadImage("asset/picture4.png");
  img5 = loadImage("asset/picture5.png");
  img6 = loadImage("asset/picure6.png");
  img7 = loadImage("asset/picture1full.jpg");
  img8 = loadImage("asset/image3.png")
  img9 = loadImage("asset/picture9.png")
  img10 = loadImage("asset/picture10.jpg")
  img11 = loadImage("asset/picture2.jpg")

  song = loadSound("asset/music1.mp3");
  song2 = loadSound("asset/music2.wav")
  song3 = loadSound("asset/music3.wav")
  song4 = loadSound("asset/music4.wav")
  song5 = loadSound("asset/music5.wav")
  song6 = loadSound("asset/music7.mp3")
}
function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(240, 240, 235);
  //background(110,110,110)
  //building structure
  line(216, 123, 569, 123)
  line(216, 123, 216, 343)
  line(569, 123, 569, 343)
  line(216, 343, 569, 343)

  line(216, 123, 0, 0)
  line(569, 123, 800, 0)

  line(216, 343, 0, 700)
  line(569, 343, 800, 700)

  image(img9, 330, 20, 180, 140)

  //image(img10,370,340,80,500)

  // board
  // push();
  // fill(255);
  // rect(335, 145, 150, 30);
  // fill(240,200,20);
  // textSize(18);
  // text("她 TA", 389, 165);
  // pop();

  fill(240, 240, 230);
  beginShape();
  vertex(250, 700);
  vertex(510, 700);
  vertex(456, 340);
  vertex(370, 340);
  endShape(CLOSE);


  if (frameCount < 1900) {
    fill(170, 170, 170);
    rect(370, 190, 85, 150);
    fill(100, 100, 100);
    circle(440, 260, 10);
  } else if (frameCount > 1900) {
    fill(0)
    rect(370, 190, 85, 150)
    image(img8, 350, 180, 160, 180)



    fill(170, 170, 170);
    beginShape();
    vertex(370, 190);
    vertex(420, 190);
    vertex(420, 320);
    vertex(370, 343);
    endShape(CLOSE);
    fill(100, 100, 100);
    circle(410, 260, 10);
    // line(370,190,460,187)
    // line(460,187,456,340)
    fill(100, 100, 100);
    //image(img8,410,235,55,100)

  }

  //rect(435,230,55,100)

  // paintings
  fill(255)
  beginShape()
  vertex(20, 103)
  vertex(20, 353)
  vertex(134, 287)
  vertex(134, 147)
  endShape(CLOSE)

  image(img, 20, 103, 130, 250)
  image(img2, 640, 103, 130, 250)

  push()
  strokeWeight(0.2)

  //left top
  fill(220, 220, 220, 80);
  rect(140, 300, 130, 200);
  beginShape();
  vertex(270, 300);
  vertex(270, 500);
  vertex(320, 480);
  vertex(320, 290);
  endShape(CLOSE);

  beginShape();
  vertex(140, 300);
  vertex(270, 300);
  vertex(320, 290);
  vertex(190, 290);
  endShape(CLOSE);

  image(img3, 130, 170, 190, 130);

  //left bottom
  fill(220, 220, 220, 80);
  rect(40, 450, 130, 200);
  beginShape();
  vertex(170, 450);
  vertex(170, 650);
  vertex(220, 640);
  vertex(220, 440);
  endShape(CLOSE);

  beginShape();
  vertex(40, 450);
  vertex(170, 450);
  vertex(220, 440);
  vertex(90, 440);
  endShape(CLOSE);
  image(img5, 70, 275, 120, 190);

  //right top
  fill(220, 220, 220, 80);
  rect(510, 300, 130, 200);
  beginShape();
  vertex(510, 300);
  vertex(510, 500);
  vertex(480, 470);
  vertex(480, 270);
  endShape(CLOSE);

  beginShape();
  vertex(510, 300);
  vertex(640, 300);
  vertex(610, 270);
  vertex(480, 270);
  endShape(CLOSE);

  image(img4, 480, 120, 170, 200);

  //right bottom
  fill(220, 220, 220, 80);
  //rect(553, 480, 130, 200);
  rect(620, 480, 130, 200);
  beginShape();
  vertex(620, 480);
  vertex(620, 680);
  vertex(590, 650);
  vertex(590, 450);
  endShape(CLOSE);

  beginShape();
  vertex(620, 480);
  vertex(750, 480);
  vertex(720, 450);
  vertex(590, 450);
  endShape(CLOSE);

  image(img6, 600, 330, 160, 150);


  //Start page 
  if (frameCount < 180) {
    fill(240, 240, 235)
    rect(0, 0, 800, 700)

    push()
    fill(255)
    rect(230, 200, 350, 100)
    fill(240, 200, 100)
    textSize(20)
    text("Ladies and gentleman~", 300, 220)
    text("Welcome to this magical exhibition!", 240, 250)
    text("Hope you can enjoy it!", 300, 280)
    pop()

    push();
    fill(255);
    rect(320, 345, 150, 30);
    fill(10);
    textSize(18);
    text("她 TA", 370, 365);
    pop();

    fill(170, 170, 170)
    rect(320, 400, 150, 298)
    fill(100, 100, 100)
    circle(440, 560, 10)

  }

  if (180 <= frameCount && frameCount < 250) {
    fill(240, 240, 235)
    rect(0, 0, 800, 700)
    //board
    push();
    fill(255);
    rect(320, 345, 150, 30);
    fill(10);
    textSize(18);
    text("她 TA", 370, 365);
    pop();

    fill(255)
    rect(320, 400, 150, 298)
    fill(170, 170, 170)
    beginShape();
    vertex(320, 400);
    vertex(440, 400);
    vertex(440, 665);
    vertex(320, 703);
    endShape(CLOSE);
    fill(100, 100, 100)
    circle(420, 560, 10);
  }

  //dialogue box
  push()
  noStroke()
  if (400 < frameCount && frameCount < 1900) {
    fill(0, 160, 200, 60);
    ellipse(200, 140, 180, 50);
    fill(0);
    text("How are you guys today?", 135, 140);
    textSize(13);
  }

  if (600 < frameCount && frameCount < 1900) {
    fill(0, 160, 200, 60);
    ellipse(580, 140, 220, 50);
    fill(0);
    text("Today many people praised me~", 480, 140);
    //text("for my beauty~",450,165)
  }

  if (800 < frameCount && frameCount < 1900) {
    fill(0, 160, 200, 60);
    ellipse(380, 200, 200, 59);
    fill(0);
    text("I really like the little boy who", 285, 200);
    text("watched me for 20 minutes!", 300, 215);
  }

  if (1000 < frameCount && frameCount < 1900) {
    fill(0, 160, 200, 60);
    ellipse(450, 270, 200, 50);
    fill(0);
    text("I felt no one really love me.", 380, 270);
  }

  if (1200 < frameCount && frameCount < 1900) {
    fill(0, 160, 200, 60);
    ellipse(310, 360, 200, 60);
    fill(0);
    text("Don't say that. You are the", 220, 355);
    text("treasure of the history!", 220, 370);
    text("We all love you~", 250, 385);
  }

  if (1400 < frameCount && frameCount < 1900) {
    fill(0, 160, 200, 60);
    ellipse(490, 440, 200, 60);
    fill(0);
    text("I can't wait to see the visitors", 395, 440);
    text("tomorrow! They are so cute!", 403, 455);
  }
  pop()

  //information page
  //rect(20,105,120,240)
  if (
    mouseIsPressed &&
    20 < mouseX &&
    mouseX < 140 &&
    105 < mouseY &&
    mouseY < 345
  ) {
    fill(200, 180, 150);
    rect(0, 0, 800, 700);
    //rect(20, 20, 350, 600);
    //circle(200,200,30)

    image(img7, 10, 40, 420, 560);
    //rect(400,20,360,250)
    fill(0);
    textSize(25);
    text("Basic Information:", 460, 45);
    textSize(20);
    fill(0);
    text("Ladies Cooling off. By Qian Xuan ", 460, 70);
    text("(1235-1303).Ink and color on silk. ", 460, 100);
    text("H x W: 22.4 x 21.7 cm. Southern", 460, 130);
    text(" Song dynasty. Taipei National ", 460, 160);
    text("Palace Museum.", 460, 190);

    //fill(255)
    //rect(400,230,360,450)
    fill(0);
    textSize(25);
    text("Intrduction:", 460, 260);
    textSize(20);
    text("In Ladies Cooling off, Qian Xuan ", 460, 290);
    text("illustrates two elegant ladies taking ", 460, 320);
    text("a walk in the garden, going past ", 460, 350);
    text("flower trees and a garden rock. The ", 460, 380);
    text("ladies are holding fans, having their ", 460, 410);
    text("hair tied up and well decorated. The ", 460, 440);
    text("peaceful look on their face conveys", 460, 470);
    text(" a serene and virtuous atmosphere.", 460, 500);
    text("The flower trees indicate both the ", 460, 530);
    text("loveliness and fragility of women, ", 460, 560);
    text("catering to the male dominated ", 460, 590);
    text("society’s expectations of women.", 460, 620);
  }

  //rect(650,110,130,240)
  if (
    mouseIsPressed &&
    650 < mouseX &&
    mouseX < 780 &&
    110 < mouseY &&
    mouseY < 350
  ) {
    fill(255);
    fill(200, 180, 150);
    rect(0, 0, 800, 700);
    rect(80, 80, 200, 300);
    circle(200, 200, 30);

    image(img11, 20, 20, 350, 600);
    //rect(400,20,360,250)
    fill(0);
    textSize(25);
    text("Basic Information:", 420, 45);
    textSize(20);
    fill(0);
    text("The Lady Carrying a Lute, Wu Wei (1459", 420, 70);
    text("- 1508), Ming Dynasty, 1470-1499, ink  ", 420, 100);
    text("on paper49-1/4 x 24-1/4 in. (image), ", 420, 130);
    text(" 115 x 31 in. (installed). Museum of Art.", 420, 160);
    text("Gift of Mr. and Mrs. Eli Lilly.", 420, 190);

    //fill(255)
    //rect(400,230,360,450)
    fill(0);
    textSize(25);
    text("Intrduction:", 420, 260);
    textSize(20);
    text("The Lady Carrying a Lute by the early ", 420, 290);
    text("Ming master, Wu Wei shows the ", 420, 320);
    text("well-dressed and shy-looking lady who  ", 420, 350);
    text("is walking with her lute on her ", 420, 380);
    text("shoulder. Based on the adoption of a  ", 420, 410);
    text("theme from an ancient poem, the lady  ", 420, 440);
    text("may represent the central character in ", 420, 470);
    text("The Lute Song (Pipa xing) by the Tang ", 420, 500);
    text("poet Bo Ju'i.conveys.", 420, 530);
    text("The lute is seen to be wrapped around ", 420, 570);
    text("in cloth on her shoulder with a ", 420, 600);
    text("sorrowful expression on her face.", 420, 630);
  }

  //rect(140,200,200,100)
  if (
    mouseIsPressed &&
    140 < mouseX &&
    mouseX < 320 &&
    180 < mouseY &&
    mouseY < 290
  ) {
    fill(240, 240, 235);
    rect(0, 0, 800, 700);
    //rect(80, 80, 200, 300);
    //circle(100, 100, 30);

    image(img3, 150, 20, 460, 300);
    //rect(400,20,360,250)
    fill(0);
    textSize(25);
    text("Basic Information:", 20, 360);
    textSize(20);
    fill(0);
    text("Three dragons and two phoenix crowns: ", 20, 390);
    text("Queen Xiaojing's crown, 31.7 cm high, ", 20, 420);
    text("34 cm wide at the top, 19 cm outer ", 20, 450);
    text("caliber, 17 cm inner caliber, 23 cm ", 20, 480);
    text("long and 5 cm wide at the temples.", 20, 510);
    text("Qing dynasty,the Palace Museum.", 20, 540);

    //fill(255)
    //rect(400,230,360,450)
    fill(0);
    textSize(25);
    text("Intrduction:", 420, 360);
    textSize(20);
    text("The inside of the crown is made of ", 420, 390);
    text("lacquered bamboo silk into a round ", 420, 420);
    text("frame with a gold ring around the ", 420, 450);
    text("edge. The crown is decorated with ", 420, 480);
    text("three golden dragons and two emerald ", 420, 510);
    text("phoenixes.This artifact uses a", 420, 540);
    text("variety of precious materials and is ", 420, 570);
    text("exquisite, demonstrating the high ", 420, 600);
    text("level of craftsmanship of the time.", 420, 630);
  }

  //rect(480,140,160,160)
  if (
    mouseIsPressed &&
    480 < mouseX &&
    mouseX < 640 &&
    160 < mouseY &&
    mouseY < 320
  ) {
    fill(240, 240, 235);
    rect(0, 0, 800, 700);
    //rect(80, 80, 200, 300);
    //circle(100, 100, 30);

    image(img4, 20, 20, 350, 600);
    //rect(400,20,360,250)
    fill(0);
    textSize(25);
    text("Basic Information:", 420, 45);
    textSize(20);
    fill(0);
    text("Horse and Female Rider. Anonymous. ", 420, 70);
    text("Unfired Clay with Pigment. Tang  ", 420, 100);
    text("dynasty, 7th century. Astana,  ", 420, 130);
    text("Xinjiang. the New York Metropolitan ", 420, 160);
    text("Museum of Art.", 420, 190);

    //fill(255)
    //rect(400,230,360,450)
    fill(0);
    textSize(25);
    text("Intrduction:", 420, 260);
    textSize(20);
    text("The artifact is believed to be from  ", 420, 290);
    text("Astana, Xinjiang, reflecting the ", 420, 320);
    text("political power of the Tang empire ", 420, 350);
    text("expanding its reach into Central Asia  ", 420, 380);
    text("as well as the influence that the West ", 420, 410);
    text("has on the Tang fashions.Different ", 420, 440);
    text("from previous dynasties, women were no ", 420, 470);
    text("longer confined to their home. Like ", 420, 500);
    text("the artifact has shown, they instead ", 420, 530);
    text("had the freedom of going to public ", 420, 560);
    text("places, wearing male-style clothes and ", 420, 590);
    text("riding horses.", 420, 620);
  }

  //rect(100,300,140,150)
  if (
    mouseIsPressed &&
    100 < mouseX &&
    mouseX < 240 &&
    300 < mouseY &&
    mouseY < 450
  ) {
    fill(240, 240, 235);
    rect(0, 0, 800, 700);
    //rect(80, 80, 200, 300);

    image(img5, 20, 20, 350, 620);
    //rect(400,20,360,250)
    fill(0);
    textSize(25);
    text("Basic Information:", 420, 45);
    textSize(20);
    fill(0);
    text("Painted female figurine, Tang dynasty, ", 420, 70);
    text("9.5cm wide, 10cm thick, 38cm high, ", 420, 100);
    text("Tang dynasty, pottery, Hainan ", 420, 130);
    text("Provincial Museum", 420, 160);
    //text("Museum of Art.",420,190)

    //fill(255)
    //rect(400,230,360,450)
    fill(0);
    textSize(25);
    text("Intrduction:", 420, 220);
    textSize(20);
    text("A thousand years earlier, during the ", 420, 250);
    text("Tang Dynasty in China, the women of ", 420, 280);
    text("Chang'an City were pioneers in ", 420, 310);
    text("fashionable decoration. Painted female ", 420, 340);
    text("figurines of the Tang Dynasty have ", 420, 370);
    text("plump faces, lightly powdered, long ", 420, 400);
    text("eyebrows and thin eyes, straight noses ", 420, 430);
    text("and small cherry mouths. The hair ", 420, 460);
    text("style is a fluffy and lightly hanging ", 420, 490);
    text("bun, with two sideburns holding the ", 420, 520);
    text("face and the head slightly to the ", 420, 550);
    text("right. Wearing a long skirt, her hands ", 420, 580);
    text("are arched in front of her chest, and ", 420, 610);
    text("her body is full of vivid posture.", 420, 640);
  }

  //rect(590,330,140,150)
  if (
    mouseIsPressed &&
    590 < mouseX &&
    mouseX < 730 &&
    330 < mouseY &&
    mouseY < 480
  ) {
    fill(240, 240, 235);
    rect(0, 0, 800, 700);
    //rect(80, 80, 200, 300);

    image(img6, 20, 120, 360, 350);
    //rect(400,20,360,250)
    fill(0);
    textSize(25);
    text("Basic Information:", 420, 45);
    textSize(20);
    fill(0);
    text("Bronze mirror with mother-of-pearl ", 420, 70);
    text("inlay in the pattern of Gao Shi ", 420, 100);
    text("Banquet, 23.9 cm in diameter, Tang ", 420, 130);
    text("dynasty, bronze, National Museum of ", 420, 160);
    text("China.", 420, 190);

    //fill(255)
    //rect(400,230,360,450)
    fill(0);
    textSize(25);
    text("Intrduction:", 420, 260);
    textSize(20);
    text("Round mirror with rounded knobs and ", 420, 290);
    text("lacquered shell decorations. The upper ", 420, 320);
    text("part of the knob is decorated with a ", 420, 350);
    text("tree with lush branches and petals in ", 420, 380);
    text("full bloom. A bright moon peeks out ", 420, 410);
    text("from the top of the tree, and a small ", 420, 440);
    text("cat squats beneath it. Both sides of ", 420, 470);
    text("longer confined to their home. Like ", 420, 500);
    text("the tree are decorated with birds and ", 420, 530);
    text("parrots.The two Gao shi are seated on ", 420, 560);
    text("the ground across the knob.", 420, 590);
  }

  //music

  if (400 < frameCount && frameCount < 800) {
    if (song.isPlaying() == false) {
      song.play();
    }
  }

  if (800 < frameCount && frameCount < 1000) {
    if (song2.isPlaying() == false) {
      song2.play();
    }
  }

  if (1000 < frameCount && frameCount < 1200) {
    if (song3.isPlaying() == false) {
      song3.play();
    }
  }

  if (1200 < frameCount && frameCount < 1280) {
    if (song4.isPlaying() == false) {
      song4.play();
    }
  }

  if (1400 < frameCount && frameCount < 1650) {
    if (song5.isPlaying() == false) {
      song5.play();
    }
  }

  // if (frameCount < 250) {
  //   if (song6.isPlaying() == false) {
  //     song6.play();
  //   }
  // }


}

//function mousePressed() {
  //console.log(mouseX, mouseY);
//}
