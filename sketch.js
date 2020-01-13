var speaker;
var counter = 0;
var party_music;
var classic;
var background_image;

function preload(){
  party_music = loadSound('assets/metal.mp3');
  classic = loadSound('assets/furelise.mp3');
  background_image = loadImage('assets/background.jpg');
  speaker = loadModel("assets/Speaker.obj", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

//cliccando la prima pagina, questa si toglie
  var background = select('#background');
  background.mouseClicked(start);
}

function draw() {
  background(0);
  counter++;
  specularMaterial(25,0,35);

//creo un contatore che faccia alternare le luci
if(counter>=0 && counter<8){
  ambientLight(30,30,70);
  directionalLight(255, 0, 255, 0.5, 1, 0);
  pointLight(0,255,255, height / 2, width / 2, 0);
}

else if(counter>=8 && counter<16){
  ambientLight(70,30,50);
  directionalLight(255, 0, 10, 1, 0.5, 0);
  pointLight(0,255,0, height / 2, width / 2, 0);
}

else if(counter>=16 && counter<24){
  ambientLight(30,70,30);
  directionalLight(0, 255, 100, 0.8, 0.2, 0);
  pointLight(255,0,0, height / 2, width / 2, 0);
}

else if (counter == 24){
  counter=0;
}

//se il contatore è 25 le luci sono ferme
if (counter>=25){
  ambientLight(120,120,120);
  directionalLight(70, 70,70, 0.8, 0.2, 0);
  pointLight(100, 100,100, height / 2, width / 2, 0);
}

//creo stereo e sfondo
  noStroke();
  translate(0,0,200);
  push();
  texture(background_image);
  box(width,height,10);
  pop();
  rotateZ(180);
  rotateY((-mouseX*0.05)+39);
  rotateX((mouseY*0.05)-15);
  model(speaker);
}

//faccio alternare la musica al click
function mouseClicked() {
  if (classic.isPlaying()) {
    party_music.play();
    classic.pause();
    counter = 0;
  } else{
    classic.play();
    party_music.pause();
    counter = 25;
  }
}

function start(){
  console.log(start);
  var background = select('#background');
  background.removeClass('centered');
  background.addClass('eliminated');
}
