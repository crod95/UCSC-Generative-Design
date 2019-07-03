//Cristian Rodriguez
let timeX = 0;
let timeY = 10000;
let k = 0.01;
let width = 500;
let height = 500;
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

	let x = noise(timeX * k) * width;
	let y = noise(timeY * k) * height;

	ellipse(x,y,24,24);
	timeX+=1;
	timeY+=1;
}

