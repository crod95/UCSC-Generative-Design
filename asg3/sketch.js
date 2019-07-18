//Cristian Rodriguez W1561133
var canWidth = 400;
var canHeight = 400;
var dialogueWidth = 400;
var dialogueHeight = 300;
var player;
var playerXCor;
var playerYCor;
var aCanvas;
var responseCanvas;
var colorString;

//Utilize downloaded library p5.play to implement sprites
function setup()
{
	createCanvas(canWidth,canHeight);
	player = createSprite(50, 50, 20, 20);

	//DialogBox(width,height);
	aCanvas = new DialogBox(dialogueWidth,dialogueHeight);
	//newCanvas = document.createElement("CANVAS");
	//let canContext = newCanvas.getContext("2d");
}

function draw()
{
	background(20);
	player.shapeColor = color(255);
	noStroke();
	drawSprites();
	//orbitControl();
}

//Controls the looping of draw
function keyPressed() 
{
	if(keyCode === ENTER)
	{
		print("*Enter pressed*");
		aCanvas.randomizeColor();
		aCanvas.printCanvas();
	}
	if(keyCode === TAB)
	{
		playerXCor = player.position.x;
		playerYCor = player.position.y;
		//print("Player x coordinate: " + playerXCor);
		//print("Player y coordinate: " + playerYCor);
	}
	if(keyCode === UP_ARROW)
	{
		player.setSpeed(1.5, 270);
		playerXCor = player.position.x;
		playerYCor = player.position.y;
		//print("Player x coordinate: " + playerXCor);
		//print("Player y coordinate: " + playerYCor);
	}
	else if(keyCode === DOWN_ARROW)
	{
		player.setSpeed(1.5, 90);
		playerXCor = player.position.x;
		playerYCor = player.position.y;
		//print("Player x coordinate: " + playerXCor);
		//print("Player y coordinate: " + playerYCor);
	}
	else if(keyCode === LEFT_ARROW)
	{
		player.setSpeed(1.5, 180);
		playerXCor = player.position.x;
		playerYCor = player.position.y;
		//print("Player x coordinate: " + playerXCor);
		//print("Player y coordinate: " + playerYCor);
	}
	else if(keyCode === RIGHT_ARROW)
	{
		player.setSpeed(1.5, 0);
		playerXCor = player.position.x;
		playerYCor = player.position.y;
		//print("Player x coordinate: " + playerXCor);
		//print("Player y coordinate: " + playerYCor);
	}
    return false;
}

function keyReleased()
{
	if(keyCode === UP_ARROW)
	{
		player.setSpeed(0, 270);
		playerXCor = player.position.x;
		playerYCor = player.position.y;
		//print("Player x coordinate: " + playerXCor);
		//print("Player y coordinate: " + playerYCor);
	}
	else if(keyCode === DOWN_ARROW)
	{
		player.setSpeed(0, 90);
		playerXCor = player.position.x;
		playerYCor = player.position.y;
		//print("Player x coordinate: " + playerXCor);
		//print("Player y coordinate: " + playerYCor);
	}
	else if(keyCode === LEFT_ARROW)
	{
		player.setSpeed(0, 180);
		playerXCor = player.position.x;
		playerYCor = player.position.y;
		//print("Player x coordinate: " + playerXCor);
		//print("Player y coordinate: " + playerYCor);
	}
	else if(keyCode === RIGHT_ARROW)
	{
		player.setSpeed(0, 0);
		playerXCor = player.position.x;
		playerYCor = player.position.y;
		//print("Player x coordinate: " + playerXCor);
		//print("Player y coordinate: " + playerYCor);
	}
	return false;
}
