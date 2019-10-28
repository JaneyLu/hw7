var sounds = [];
var i = [];
var n = [];
var cursorX = [];
var cursorY = [];
var keys = [];

var showText = 0;

//define and load sound file;
function preload() {
  soundFormats("m4a");
  for (var i = -28; i < 36; i++) {
    let sound = loadSound("glockenspiel.m4a");
    sound.rate(0.5 * pow(2, i / 12)); // 12-semitone exponential scale

    sounds.push(sound);
  }
}

function setup() {
  createCanvas(600, 900);
}

function draw() {
  background(300, 240, 240);


  //draw empty sheet lines
  for (n = 10; n <= 50; n += 10) {
    for (var j = 50; j <= 770; j += 90) {
      line(30, n + j, 570, n + j);
      // stroke(240, 210, 200);
      stroke(180, 60, 80);
    }
  }

  cursorX = 50;
  cursorY = 45;
  
  for (k = 0; k < keys.length; k++) {  
      if (cursorX >= 570) {
        cursorY += 90;
        cursorX = 50;
      }
      
      switch (keys[k]) {
        case "a":
          i = 65;
          //text('a', cursorX - 6, j + 85);
          break;
        case "s":
          i = 60;
          // text('s', cursorX - 6, j + 85);
          break;
        case "d":
          i = 55;
          // text('d', cursorX - 6, j + 85);
          break;
        case "f":
          i = 50;
          // text('f', cursorX - 6, j + 85);
          break;
        case "g":
          i = 45;
          // text('g', cursorX - 6, j + 85);
          break;
        case "h":
          i = 40;
          // text('h', cursorX - 6, j + 85);
          break;
        case "j":
          i = 35;
          // text('j', cursorX - 6, j + 85);
          break;
        case "k":
          i = 30;
          // text('k', cursorX - 6, j + 85);
          break;
        case "l":
          i = 25;
          // text('l', cursorX - 6, j + 85);
          break;
        case "q":
          i = 20;
          // text('q', cursorX - 6, j + 85);
          break;
        case "w":
          i = 15;
          // text('w', cursorX - 6, j + 85);
          break;
        case "e":
          i = 10;
          // text('e', cursorX - 6, j + 85);
          break;
        case "r":
          i = 40;
          // text('r', cursorX - 6, j + 85);
          break;
        case "t":
          i = 35;
          // text('t', cursorX - 6, j + 85);
          break;
        case "y":
          i = 30;
          // text('y', cursorX - 6, j + 85);
          break;
        case "u":
          i = 25;
          // text('u', cursorX - 6, j + 85);
          break;
        case "i":
          i = 20;
          // text('i', cursorX - 6, j + 85);
          break;
        case "o":
          i = 15;
          // text('o', cursorX - 6, j + 85);
          break;
        case "p":
          i = 10;
          // text('p', cursorX - 6, j + 85);
          break;
        case "z":
          i = 65;
          // text('z', cursorX - 6, j + 85);
          break;
        case "x":
          i = 60;
          // text('x', cursorX - 6, j + 85);
          break;
        case "c":
          i = 50;
          // text('c', cursorX - 6, j + 85);
          break;
        case "v":
          i = 45;
          // text('v', cursorX - 6, j + 85);
          break;
        case "b":
          i = 40;
          // text('b', cursorX - 6, j + 85);
          break;
        case "n":
          i = 65;
          // text('n', cursorX - 6, j + 85);
          break;
        case "m":
          i = 60;
          // text('m', cursorX - 6, j + 85);
          break;
        case "1":
          i = 50;
          // text('1', cursorX - 6, j + 85);
          break;
        case "2":
          i = 45;
          // text('2', cursorX - 6, j + 85);
          break;
        case "3":
          i = 40;
          // text('3', cursorX - 6, j + 85);
          break;
        case "4":
          i = 65;
          // text('4', cursorX - 6, j + 85);
          break;
        case "5":
          i = 60;
          // text('5', cursorX - 6, j + 85);
          break;
        case "6":
          i = 50;
          // text('6', cursorX - 6, j + 85);
          break;
        case "7":
          i = 45;
          // text('7', cursorX - 6, j + 85);
          break;
        case "8":
          i = 40;
          // text('8', cursorX - 6, j + 85);
          break;
        case "9":
          i = 40;
          // text('9', cursorX - 6, j + 85);
          break;
        case "0":
          i = 35;
          // text('0', cursorX - 6, j + 85);
          break;
      }
    
    if (showText == 1 ){
    stroke(300, 240, 240)
  }
    
    fill(180, 60, 80);
    noStroke();
    //notes' positions;
    ellipse(cursorX, cursorY + i, 13, 10);
    textSize(18);
    text(keys[k], cursorX - 6, cursorY + 90);
    cursorX += 30;
    

}
  

  //draw ellipses;
  // for (i = 0; i < sounds.length; i++) {
  //   let sound = sounds[i];
  //   if (sound.isPlaying()) {
  //     //draw shape of the notes;
  //     fill(180, 60, 80);
  //     noStroke();
  //     //notes' positions;
  //     ellipse(cursorX, cursorY, 16, 10);
  //   }
  // }

}

function mousePressed () {
  showText = 1;
}
  
//set up key board;
function keyPressed() {
  //c note;
  if (key == "a") {
    sounds[0].play();
    keys.push(key);
  }

  //c# note;
  if (key == "z") {
    sounds[1].play();
    keys.push(key);
  }

  //d note;
  if (key == "s") {
    sounds[2].play();
    keys.push(key);
  }

  //d# note;
  if (key == "x") {
    sounds[3].play();
    keys.push(key);
  }

  //e note;
  if (key == "d") {
    sounds[4].play();
    keys.push(key);
  }

  //f note;
  if (key == "f") {
    sounds[5].play();
    keys.push(key);
  }

  //f# note;
  if (key == "c") {
    sounds[6].play();
    keys.push(key);
  }

  //g note;
  if (key == "g") {
    sounds[7].play();
    keys.push(key);
  }

  //g# note;
  if (key == "v") {
    sounds[8].play();
    keys.push(key);
  }

  //a note;
  if (key == "h") {
    sounds[9].play();
    keys.push(key);
  }

  //a# note;
  if (key == "b") {
    sounds[10].play();
    keys.push(key);
  }

  //b note;
  if (key == "j") {
    sounds[11].play();
    keys.push(key);
  }

  //c note;
  if (key == "k") {
    sounds[12].play();
    keys.push(key);
  }

  //c# note;
  if (key == "n") {
    sounds[13].play();
    keys.push(key);
  }

  //d note;
  if (key == "l") {
    sounds[14].play();
    keys.push(key);
  }

  //d# note;
  if (key == "m") {
    sounds[15].play();
    keys.push(key);
  }

  //e note;
  if (key == "q") {
    sounds[16].play();
    keys.push(key);
  }

  //f note;
  if (key == "w") {
    sounds[17].play();
    keys.push(key);
  }

  //f# note;
  if (key == "1") {
    sounds[18].play();
    keys.push(key);
  }

  //g note;
  if (key == "e") {
    sounds[19].play();
    keys.push(key);
  }

  //g# note;
  if (key == "2") {
    sounds[20].play();
    keys.push(key);
  }

  //a note;
  if (key == "r") {
    sounds[21].play();
    keys.push(key);
  }

  //a# note;
  if (key == "3") {
    sounds[22].play();
    keys.push(key);
  }

  //b note;
  if (key == "t") {
    sounds[23].play();
    keys.push(key);
  }

  //c note;
  if (key == "y") {
    sounds[24].play();
    keys.push(key);
  }

  //c# note;
  if (key == "4") {
    sounds[25].play();
    keys.push(key);
  }

  //d note;
  if (key == "u") {
    sounds[26].play();
    keys.push(key);
  }

  //d# note;
  if (key == "5") {
    sounds[27].play();
    keys.push(key);
  }

  //e note;
  if (key == "i") {
    sounds[28].play();
    keys.push(key);
  }

  //f note;
  if (key == "o") {
    sounds[29].play();
    keys.push(key);
  }

  //f# note;
  if (key == "6") {
    sounds[30].play();
    keys.push(key);
  }

  //g note;
  if (key == "p") {
    sounds[31].play();
    keys.push(key);
  }

  //g# note;
  if (key == "7") {
    sounds[32].play();
    keys.push(key);
  }

  //a note;
  if (key == "8") {
    sounds[33].play();
    keys.push(key);
  }

  //a# note;
  if (key == "9") {
    sounds[34].play();
    keys.push(key);
  }

  //b note;
  if (key == "0") {
    sounds[35].play();
    keys.push(key);
  }
}
