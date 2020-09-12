var slingshot;
var attacker;
var blocks;


function setup() {
  createCanvas(800,400);
  
  slingshot = new SlingShot(200, 100, 50, 100);
attacker = new Attacker(200, 100, 20, 10)

}

function draw() {
  background(255,255,255);  
   
  slingshot.display();
  attacker.display();
  blocks.dislay();

  drawSprites();
}