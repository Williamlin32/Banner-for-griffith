var angle = 0;
var N;
var letters =['C','R','E','A','T','I','V', 'E'];
var l = ['C','O', 'D', 'I', 'N', 'G']
let img;
function preload() {
  img = loadImage('./images/Griffith-College-Logo-STACKED-International-RGB1-700x700-removebg-preview.png');
}
function setup() {
  createCanvas(900, 400);
 N = letters.length;
 B = l.length
  
}
function draw(){
  drawBackground();
  drawSquares(100,75,8,100,20,20)
  drawHeading(90,85,N);
  drawSquares(200,125,6,150,40,50)
  drawHeading(190,135,B)
  image(img, 600,0,300,300) 
  drawBox(mouseX, mouseY);
}
function drawBox(x,y){
  noStroke()
   fill(200,0,50)
  rect(25,310,150,50,30)
  stroke(2)
  fill(200,150,150)
  text("Learn More",30,340)
  if(x > 25 && x <150 && y >310 && y<360){
    noStroke()
    fill(255,0,100)
    rect(25,310,150,50,30)
     stroke(2)
  fill(200,150,150)
    text("Learn More",30,340)
    if(mouseIsPressed){
      window.open("https://www.griffithcollege.edu.au/")
    }
  }
}

function drawSquares(x,y,num,r, g, b){
  strokeWeight(2)
    for(var i = 0; i < num*50; i= i +50){
    push();
    translate(x+i,y)
    rectMode(CENTER)
    rotate(angle)
    fill(r + i, g + 0.4*i, b)
    stroke(255,0,50)
    rect(0,0,50,50)
    pop();
  }
  angle = angle +0.02
}

function drawBackground(){
  fill(50,50,50)
  stroke(200,0,10)
  strokeWeight(10)
  rect(0,0,width,height)
  fill(255,255,255)
  noStroke()
  rect(600,10,290,380)
}

function drawHeading(x, y, N){
  textSize(30)
  textFont('Tahoma')
  for (var i = 0; i < N; i++){
  stroke(5 + x,255,153)
  fill(5 +x,255,153)
    if(N >6){
      text(letters[i], x,y)
    }
    else {
      text(l[i], x,y)
    }
    x = x +50;
  }
  textSize(28)
  textFont('Times News Roman')
  stroke(100,0,100)
  fill(200,150,150)
  text("Trimester 2 starting soon", 25,260)
  text("Enrollments open on Tuesday 28 June",25,290)
}