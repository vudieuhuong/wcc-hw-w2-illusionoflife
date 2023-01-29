let angle = 0;
let ava;
let clock;
let cat,catM,mushroom,mushroomM;
let eatIsTrue;
let y_ = 60;
let slider;

let timer = 10;
let displayState = 0;

function preload(){
  cat = loadModel('src/cat.obj')
  catM = loadImage('src/cat_texture.png');
  mushroom = loadModel('src/mushroom.obj');
  mushroomM = loadImage('src/mushroom.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("sketch-container");
  angleMode(DEGREES);
  noStroke();

  createEasyCam();
  noLoop();

  addGUI();
  
  eatIsTrue = false;

}

function draw() {
  loop();

  background(slider.value(), 255, 8);




 
  

  //draw cat
  
  push();
  rotateX(340);
  rotateY(235);
  translate(0, 60, 0);
  scale(150,-150,150);
  texture(catM);
  model(cat);
  pop();
 
}

function addGUI(){

  //avatar
  ava = createImg('src/ava.png', 'avatar');
  ava.parent("gui-container");
  ava.addClass("ava");

   // add clock button
   clock = createButton(timer);
   clock.parent("gui-container");
   clock.addClass("clock");

  if(displayState == 0){
    button = createButton("Out of Time");
  }
  else if(displayState ==1){
    button = createButton("Feed");
  }
  button.addClass("button");
  button.parent("gui-container");
  button.mousePressed(eat);
  if(eatIsTrue){
    mushroomDraw();
  }

  // add a slider
  slider = createSlider(0, 255, 255);
  slider.addClass("slider");
  slider.parent("gui-container");
}

//call mushroom when fed
function eat(){
  eatIsTrue = true;
}
function mushroomDraw() {
  push();
  translate(100, y_,0);
  scale(30,-30,30);
  level += 1;
  texture(mushroomM);
  model(mushroom);  
  y_ -=5;
  //print("y_="+y_);
  pop();  
  if(y_<0){
    eatIsTrue = false;
    y_ = 100;
  }  
}


