var ground;
var bucket1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	paperImage = loadImage("paper.png")
	bdIMG = loadImage("dustbingreen.png")
}

function setup() {
	rectMode(CENTER)

	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bucket1 = createSprite(1200, 510, 80, 80);
	bucket1.addImage(bdIMG);
	bucket1.scale = 0.9;
    
	ground = new Ground(800, 670, 1600, 30);
    
	bucket2 = new Bucket(1090, 510, 5, 225);
	bucket3 = new Bucket(1310, 510, 5, 225)

	paper = new Paper(200, 350, 100)

	slingshot = new Slingshot(paper.body, {x : 300, y : 200})

	Engine.run(engine)
  
}


function draw() 
{
	
	Engine.update(engine)

  background("grey");

  rectMode(CENTER);
  
  bucket2.display();
  bucket3.display();

  ground.display();

  paper.display();
  slingshot.display();
  
  rect(bucket1.position.x, bucket1.position.y, 80, 80)
  
  drawSprites();
 
}
  
function mouseDragged()
{
	Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
}

function mouseReleased()
{
	slingshot.fly();
}