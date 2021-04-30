
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var form;
var canvas, backgroundImage;

function preload()
{
	backgroundImage = loadImage("City.jpg");
}

function setup() {
	canvas = createCanvas(displayWidth - 10, displayHeight-135);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	form = new Form();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  
form.display();

  drawSprites();
 
}



