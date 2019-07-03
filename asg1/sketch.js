
var bubbles = [];


function setup() 
{
	createCanvas(500,500);
	for(var i = 0; i < 5; i++)
	{
		var x = random(50,300);
		var y = random(50,300);
		bubbles.push(new Bubble(x,y));
	}
}

function draw() 
{
	//backgorund(220);
	background(0);
	var numOfCircles = 0;
	var corX = random(50, 450);
	var corY = 200;
	var wid = 50;
	var len = 50;
	var speed = 1;
	var active = true;
	for (var j = 0; j < 5; j++)
	{
		bubbles[j].move();
		bubbles[j].display();
	}
	//ellipse(x, y, width, height)
	//ellipse(50, 50, 80, 80);

	//Particle(corX, corY, partWidth, partHeight, partSpeed, born)
	//const P1 = new Particle(corX, corY, wid, len, speed, active);
	//P1.display();
}
