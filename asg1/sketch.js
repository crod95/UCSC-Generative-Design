//Cristian Rodriguez
var particles = [];
var amplitude;
var mapMax = 1.0;
var num = 20;

function preload() 
{
  globalSong = loadSound('Phlex_TakeMeHomeTonightfeat.CaitlinGare.mp3');
}

function setup() 
{
	createCanvas(500,500);
	//Create a new Amplitude analyzer
	globalSong.loop();
	analyzer = new p5.Amplitude();
	//Patch the input to an volume analyzer
	analyzer.setInput(globalSong);
	for(var i = 0; i < num; i++)
	{
		var pRadius = random(30,60);
		var x = random(20,480);
		var y = random(-20,0);
		particles.push(new Particle(x,y,pRadius,pRadius));
	}
}

function draw() 
{
	background(0);

	//Get the average (root mean square) amplitude
	rms = analyzer.getLevel();
	let min = rms;
	let max = rms;
	for (var j =0; j < num; j++)
	{
		particles[j].speedChange(rms);
		particles[j].move();
		particles[j].display();
		particles[j].reset();
	}
	console.log("rms: " + rms);
	
}


//Bubble example setup
/*
//var bubbles = [];
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
	for (var j = 0; j < 5; j++)
	{
		bubbles[j].move();
		bubbles[j].display();
	}
	ellipse(x, y, width, height)
	ellipse(50, 50, 80, 80);

	Particle(corX, corY, partWidth, partHeight, partSpeed, born)
	const P1 = new Particle(corX, corY, wid, len, speed, active);
	P1.display();
}
*/