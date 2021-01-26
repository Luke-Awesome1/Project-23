const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1Sprite,rect2Sprite,rect3Sprite;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);
	
	var options = {
		isStatic: true
	}
	packageSprite=createSprite(width/2, 80, 10,10,options);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.restitution = 0;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	rect1Sprite=createSprite(300,600,20,100);
	rect1Sprite.shapeColor = "red";
	rect2Sprite=createSprite(400,650,200,20);
	rect2Sprite.shapeColor = "red";
	rect3Sprite=createSprite(500,600,20,100);
	rect3Sprite.shapeColor = "red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
  	background(0);
	Engine.update(engine);  
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	packageSprite.collide(rect1Sprite);
	packageSprite.collide(rect2Sprite);
	packageSprite.collide(rect3Sprite);

  	drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false)
    
  }
}



