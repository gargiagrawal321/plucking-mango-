const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ground,tree,treeI;
var boy,boyI;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
  treeI=loadImage("tree.png");
  boyI=loadImage("boy.png");
}


function setup() {
  createCanvas(1200,780);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground();

  stone=new Stone(100,460,50);

  
  
  mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
  mango10=new Mango(980,305,35);

  attach=new Throw(stone.body,{x:100,y:465});

  

	boy=createSprite(160,550);
	boy.addImage(boyI);
	boy.scale=0.5;

	Engine.run(engine);
 
 
  
}

function draw() {
  rectMode(CENTER)
  imageMode(CENTER)
  background("rose");
  
  image(treeI,775,368)

  fill(" #808080");
  textSize(18);
  text("- Press space for getting one chance again -",50,50);
  
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  attach.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites();

  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		attach.Launch(stone.body);
	}
}

function detectCollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mango.body.position.x,mango.body.position.y)
  //console.log(mango.diametre+stone.diameter);
if(distance<=mango.diameter+stone.diameter)
{
  Matter.Body.setStatic(mango.body,false);
}
}