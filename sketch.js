var box,box2;

function setup() {
  createCanvas(400, 400);

box ={
 x: 100,
 y: 100, 
 w: 50,
 h: 50,
 cor: ["blue","green","red","yellow","orange","purple"],
 vx:2,
 vy:2,
}
box2 = new Box();
}

function draw() {
  background(0);
  
rectMode(CENTER);
fill (box.cor[5])
rect (box.x,box.y,box.w,box.h)
box.x = box.x + box.vx;
box.y = box.y + box.vy;

box2.display();

}