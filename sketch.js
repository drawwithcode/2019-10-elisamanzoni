var speaker;
var counter = 0;
var party_music;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  party_music = loadSound('assets/party-music.mp3')
  speaker = loadModel("assets/Speaker.obj", true); // If true, scale the model to a standardized size when loading (normalization)
  angleMode(DEGREES);
}

function draw() {
  background(0);
  counter++;
  // camera(width/2, height/2, 0, 0, 0, 0, 0, 1, 0);

  // normalMaterial(255);
specularMaterial(50,50,50);


  //give a basic color
  //directionalLight(v1,v2,v3,position), the position need units between 0 to 1

if(counter>=100000 && counter<100008){
  ambientLight(30,30,70);
  directionalLight(255, 0, 255, 0.5, 1, 0);
  pointLight(0,255,255, height / 2, width / 2, 0);
}

else if(counter>=100008 && counter<100016){
  ambientLight(70,30,50);
  directionalLight(255, 0, 10, 1, 0.5, 0);
  pointLight(0,255,0, height / 2, width / 2, 0);
}

else if(counter>=100016 && counter<100024){
  ambientLight(30,70,30);
  directionalLight(0, 255, 100, 0.8, 0.2, 0);
  pointLight(255,0,0, height / 2, width / 2, 0);
}

else if (counter == 100024){
  counter=100000;
}

if (counter<100008){
  ambientLight(70,70,70);
  directionalLight(70, 70,70, 0.8, 0.2, 0);
  pointLight(100, 100,100, height / 2, width / 2, 0);
}


  noStroke();
  box(width,height,10);
  rotateZ(180);
  rotateY((-mouseX*0.05)+45);
  rotateX((mouseY*0.05)-10);

  model(speaker);
}

function mouseClicked() {
  if (party_music.isPlaying()) {
    party_music.pause();
    counter = 0;
  } else {
    party_music.play();
    counter = 100000;


  }
}
