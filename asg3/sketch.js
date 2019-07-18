//Cristian Rodriguez W1561133
var canWidth = 400;
var canHeight = 400;
var dialogueWidth = 400;
var dialogueHeight = 400;
var player, playerXCor, playerYCor;
var npc, npcX, npcY;
var aCanvas, responseCanvas;
//var colorString;
var playerInput, submitButton, playerDirections;

//Utilize downloaded library p5.play to implement sprites
function setup()
{
	createCanvas(canWidth,canHeight);
	player = createSprite(50, 50, 20, 20);

	//Dialogue box for the player
	playerInput = createInput();
  	playerInput.position(50, 520);
  	submitButton = createButton('submit');
  	submitButton.position(playerInput.x + playerInput.width, 520);
  	submitButton.mousePressed(submitSomething);
  	playerDirections = createElement('h3', 'Use "Arrow Keys" to move the square around and press "Enter" to interact with the circle and then submit your set of your rules into dialogue box underneath the canvas and ');
 	playerDirections.position(50, 525);

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

function submitSomething()
{
	print("*Submit Clicked*");
	const txt = playerInput.value();
  	//greeting.html('hello ' + txt + '!');
  	playerInput.value('');
  	aCanvas.inputString(txt);
  	/*
  	for (let i = 0; i < 10; i++) 
  	{
    	push();
    	fill(random(255), 255, 255);
    	translate(random(width), random(height));
    	rotate(random(2 * PI));
    	text(name, 0, 0);
    	pop();
  	}
  	*/
}

function myInputEvent() 
{
  	console.log('you are typing: ', this.value());
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
