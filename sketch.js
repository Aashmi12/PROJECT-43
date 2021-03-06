function setup() {
  createCanvas(650,650);
  angleMode(DEGREES);
}

function draw() {
background("white");

translate(200,200)
rotate (-90);

let hr = hour();
let min = minute();
let sec = second();
  
strokeWeight(8);
stroke("blue");
noFill();
let end = map(sec,0,60,0,360);
arc(0,0,300,300,0,end);
  
stroke("red");
let end2 = map(min,0,60,0,360);
arc(0,0,280,280,0,end2);
  
stroke("green");
let end3 = map(hr%12,0,12,-0,360);
arc(0,0,260,260,0,end3);
  
  

push();
rotate(end);
stroke("blue");
strokeWeight(4);
line(0,0,50,0);
pop();
  
  
push();
rotate(end2);
stroke("red");
strokeWeight(6);
line(0,0,100,0);
pop();
  
push();
rotate(end3);
stroke("green");
strokeWeight(8);
line(0,0,75,0);
pop();
  
stroke("black");
point (0,0);
}