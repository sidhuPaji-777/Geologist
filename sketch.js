const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Creating variables
var hammerImg;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// Creating Hammer
	hammer1 = new hammer(10, 100);
	World.add(world, hammer1);
	
	// Creating Stone
	
	stone1 = new stone(height/2+200, 150, 50, 50, {'density':5.0, 'friction':1.0, 'restitution':0.4});
	World.add(world, stone1);
	
	// Creating Ball
	ball1 = new Ball(height/2+50, 80, 55, {'density':1, 'friction':5, 'restitution':0.99});
	World.add(world, ball1);
	
	
	// Creating Iron
	iron1 = new iron(100, 100, 60, 35, {'density':8, 'friction':1.0, 'restitution':0.5});
	World.add(world, iron1);
	
	// Creating Sand 
	for(var i = 0; i<6; i=i+1)
	{
		
		sand1 = new sand(height/2+320, 20, 20, {'density':0.2, 'friction':3, 'restitution':0.5});
		World.add(world, sand1);
	}
	// This^ line is not working___________________________________________ 
	
	// Creating Ground
	ground1 = new ground(height/2+150, 580, 900, 15, {"isStatic" : true});
	World.add(world, ground1);
	
	Engine.run(engine);
	
}


function draw() {
	background(0, 102, 204);
	rectMode(CENTER);
	
	hammer1.body.position.x = mouseX;
	hammer1.body.position.y = mouseY;
	
	ball1.debug = true;
	hammer1.display();
	stone1.display();
	ball1.display();
	
	iron1.display();
	sand1.display();
	
	ground1.display();
	
	// rect(100, 100, 100, 15);  
	// drawSprites();
}
