function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL)
  // put setup code here
}

function draw() {
  background('black');
  noStroke();

  push();
  translate(0,0,500);
  ambientLight(50,50,50);
  //directionalLight(v1,v2,v3,position), the position need units between 0 to 1
  directionalLight(255,255, 50, 0.5,1, -1);
  pointLight(255,255,50, 0,0, 0);
  box(200, 200);
  pop();

  push();
  translate(0,0,500);
  ambientLight(50,50,50);
  //directionalLight(v1,v2,v3,position), the position need units between 0 to 1
  directionalLight(255,50, 50, 0.5,1, -1);
  sphere(20,20);
  pop();


  // put drawing code here
}
