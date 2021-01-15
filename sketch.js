
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var stone1,tree,ground,sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7
var world,engine
var boyImage
var gamestate="onSling"

function preload()
{
	boyImage=loadImage("Images/boy.png")
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone1=new stone(235,420,40);
	mango1=new Mango(1100,100,60);
	mango2=new Mango(1060,130,55);
	mango3=new Mango(1000,140,40);
	mango4=new Mango(995,300,39);
	mango5=new Mango(895,130,40);
	mango6=new Mango(920,155,35)
	mango7=new Mango(1000,300,35);
    mango8=new Mango(900,300,52);
    mango9=new Mango(1100,300,30);
    mango10=new Mango(1100,200,20);
    mango11=new Mango(1200,240,40);
    mango12=new Mango(1000,200,60)
	tree=new Tree(1000,580);
	ground=new Ground(600,550,1200,20);
	slingShot=new SlingShot(stone1.body,{x:235,y:400});

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyImage,200,340,200,300);
 
 
  ground.display();
  tree.display();
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
  mango11.display();
  mango12.display();
  slingShot.display();
  stone1.display();

  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango5)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango6)
  detectCollision(stone1,mango7)
  detectCollision(stone1,mango8)
  detectCollision(stone1,mango9)
  detectCollision(stone1,mango10)
  detectCollision(stone1,mango11)
  detectCollision(stone1,mango12)
}
function mouseDragged(){
    if(gamestate==="onSling"){
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    }
   
}


function mouseReleased(){
    slingShot.fly();
    gamestate="launched"
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if (distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}
function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(stone1.body, {x:233, y:420})
        slingShot.attach(stone1.body)
    }
}



