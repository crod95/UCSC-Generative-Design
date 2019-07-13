//Cristian Rodriguez W1561133
let newWorld;
let terrainCubes = [];
let testObj;
let canWidth = 600;
let canHeight = 600;
let mapSize = 32;
let boxSize = 10;
let mapHeight = 32;
//Map parameters, (h,w,d) respectively for height, width, and depth

function preload()
{
	this.grass = loadImage('grassTexture.jpg');
		//this.dirt = loadImage('dirtTexture.jpg');
		//this.snow = loadImage('snowTexture.jpg');
		//this.water = loadImage('waterTexture.jpg');
}

function setup()
{
	createCanvas(canWidth,canHeight,WEBGL);
	//pixelDensity(1);
	//cameraLocation = createVector(0, 100, (height/2.0) / tan(PI*30.0 / 180.0));
  	//sketchLocation = createVector(0, 0,0);
}

function draw()
{
	background(200);
	//updateCameraLocation();
	orbitControl();
	//loadPixels();
 	//console logging camera location helps to conceptialize what's happening
  	//console.log(`Camera: x:${cameraLocation.x}, y:${cameraLocation.y}, z:${cameraLocation.z}`)
  	//camera(cameraLocation.x, cameraLocation.y, cameraLocation.z, sketchLocation.x, sketchLocation.y, sketchLocation.z, 0, 1, 20);
	//camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ]);
	//rotateX(frameCount * 0.01);
	//rotateY(frameCount * 0.01);
	//let camX = map(mouseX,0,width,-200,0);
	//let camY = map(0,mouseY,height,-200,0);
	//camera(camX,0,(height/2)/tan(PI/6),camX,0,0,0,1,1);
	//translate(100,100,100);
	//terrainCubes.push(new WorldGenerator(10,10,10,10));
	//terrainCubes[j] = new WorldGenerator(10,10,10,10);
	//terrainCubes[j].display();

	newWorld = new WorldGenerator(mapSize,boxSize,mapHeight);
	while(newWorld.generationDone() == false)
	{
		newWorld.initialize();
		newWorld.randomizeCells();
		newWorld.calculateNoise();
	}

}

//Unused camera section
function updateCameraLocation() 
{
  if (keyIsDown(LEFT_ARROW)) cameraLocation.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) cameraLocation.x += 5;
  if (keyIsDown(UP_ARROW)) cameraLocation.z -= 5;
  if (keyIsDown(DOWN_ARROW)) cameraLocation.z += 5;
}

//Controls the looping of draw
function keyPressed() 
{
	if(keyCode == ENTER)
	{
		noLoop();
	}
	else if(keyCode == CONTROL)
	{
		loop();
	}
}

