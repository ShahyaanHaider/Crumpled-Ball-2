
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, basket

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	
	
	//Create the Bodies Here.
	paper = new PaperClass(200, 450, 70);
	
	basket = new DustBinClass(1200, 650);
	
	ground = Bodies.rectangle(800,670,width,20,{isStatic: true})
	World.add(world,ground)
	Engine.run(engine);
	
	
}


function draw() {
	rectMode(CENTER);
	background(255);
	paper.display();
	basket.display();
	rect(ground.position.x,ground.position.y,width,20)
	
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30})
	}

}


