let time = 0;
let width = 500;
let length = 500;
function setup() 
{
	createCanvas(width,height);
	frameRate(30);
}

function draw() 
{
	clear();
	fill(51);
	//var numOfCircles = 0;
	//ellipse(50, 50, 80, 80);

	let x = noise(time/100) * width;
	let y = height/2;

	ellipse(x,y,24,24);
	time+=1;
}

