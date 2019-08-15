//Cristian Rodriguez W1561133

//Canvas setup variables
let canWidth = 600;
let canHeight = 600;
let inconsolata;

//Map parameters, (h,w,d) respectively for height, width, and depth
//Represents the grid of the map which is (mapSize x mapSize x mapHeight)
let mapSize = 128;
let mapHeight = 10;

//Sizes of the boxes to be generated
let boxSize = 10;

//let grass, snow, water, dirt;

//Particle System variables
var particles = [];
var particleSystems = [];
var amplitude;
var mapMax = 2.0;
var num = 20;
var time = 0;

//FFT and world generator variables
let newWorld;
var fft;
var button1;
var slider1;
var bandWidth;
var smoothingFactor;

//Song variables
var songList;
var songListSize;
var currentSongIndex;
var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;


function preload()
{
	songListSize = 10;
	songList = new Array(songListSize);
	inconsolata = loadFont('fonts/inconsolata-Bold.otf');
	//globalSong = loadSound('Phlex_TakeMeHomeTonightfeat.CaitlinGare.mp3');
	//globalSong = loadSound(songName);
	/*
	for(let t = 0; t < songListSize; t++)
	{
		//Load the songs into a list
		var songName = "songs/song" + t + ".mp3"; 
		//songList[t] = loadSound(songName);
	}
	*/

	//Random traack from 10 songs
	var trackNum = Math.floor(Math.random() * songListSize);
	if(trackNum == 0)
	{
		globalSong = loadSound('songs/song0.mp3');
	}
	else if(trackNum == 1)
	{
		globalSong = loadSound('songs/song1.mp3');	
	}
	else if(trackNum == 2)
	{
		globalSong = loadSound('songs/song2.mp3');	
	}
	else if(trackNum == 3)
	{
		globalSong = loadSound('songs/song3.mp3');	
	}
	else if(trackNum == 4)
	{
		globalSong = loadSound('songs/song4.mp3');	
	}
	else if(trackNum == 5)
	{
		globalSong = loadSound('songs/song5.mp3');	
	}
	else if(trackNum == 6)
	{
		globalSong = loadSound('songs/song6.mp3');	
	}
	else if(trackNum == 7)
	{
		globalSong = loadSound('songs/song7.mp3');	
	}
	else if(trackNum == 8)
	{
		globalSong = loadSound('songs/song8.mp3');	
	}
	else if(trackNum == 9)
	{
		globalSong = loadSound('songs/song9.mp3');	
	}

	/*
	s0 = loadSound('songs/song0.mp3');
	s1 = loadSound('songs/song1.mp3');
	s2 = loadSound('songs/song2.mp3');
	s3 = loadSound('songs/song3.mp3');
	s4 = loadSound('songs/song4.mp3');
	s5 = loadSound('songs/song5.mp3');
	s6 = loadSound('songs/song6.mp3');
	s7 = loadSound('songs/song0.mp3');
	s8 = loadSound('songs/song0.mp3');
	s9 = loadSound('songs/song0.mp3');
	*/

	//currentSongIndex = 0;
	//globalSong = loadSound(songList[currentSongIndex]);
}

function setup()
{
	//colorMode(HSB);
	//console.log("Running setup");
	createCanvas(canWidth,canHeight,WEBGL);
	textFont(inconsolata);

	//Instructions
	
	//let s = 'Testing for the text box sucks lol sdaksjfjefxnamd';
	//fill(50);
	//text('Hello World Hello World Hello World Hello World Hello World ', 700, 60); // Text wraps within text box
	

	//Pause and play button
	button1 = createButton('Play/Pause');
	button1.position(620,580);
	button1.mousePressed(toggleSong);



	globalSong.play();

	//Create a new FFT object (FFT([smoothing], [bins]))
	smoothingFactor = 0.8;
	fft = new p5.FFT(smoothingFactor,mapSize);
	bandWidth = mapSize;

	//camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])
	camera((width/2.0) / tan(PI*30.0 / 180.0), 0, (height/2.0) / tan(PI*30.0 / 180.0), width, 0, 0, 0, 1, 0);
	//pixelDensity(1);
	//cameraLocation = createVector(0, 100, (height/2.0) / tan(PI*30.0 / 180.0));
  	//sketchLocation = createVector(0, 0,0);
  	//console.log("Setup Completed!");
}

function draw()
{
	background(0);
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
	var spectrum = fft.analyze();
	//console.log(spectrum);
	//console.log(spectrum.length);

	//Each spectrum[a] represents the strength of a particular bandwidth
	for(let a = 0; a < spectrum.length; a++)
	{
		var newHeight = spectrum[a];
		//console.log("spectrum[" + a "]: " + spectrum[a]);
	}

	//console.log("newWorld creation started!");
	newWorld = new WorldGenerator(mapSize,boxSize,mapHeight);
	//console.log("newWorld created!");
	newWorld.initialize();
	//console.log("newWorld initialized!");
	newWorld.musicVariate(spectrum);
	//console.log("newWorld music incorporated!");
	newWorld.calculateNoise();

	/*
	//*******************Original*******************
	newWorld = new WorldGenerator(mapSize,boxSize,mapHeight);
	while(newWorld.generationDone() == false)
	{
		newWorld.initialize();
		newWorld.randomizeCells();
		newWorld.musicVariate();
		newWorld.calculateNoise();
	}
	*/

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

function toggleSong()
{
	if(globalSong.isPlaying())
	{
		globalSong.pause();
	}
	else
	{
		globalSong.play();
	}
}

function nextSong()
{
	if(s0.isPlaying()) {s0.stop(); s1.play;}
	if(s1.isPlaying()) {s1.stop(); s2.play;}
	if(s2.isPlaying()) {s2.stop(); s3.play;}
	if(s3.isPlaying()) {s3.stop(); s4.play;}
	if(s4.isPlaying()) {s4.stop(); s5.play;}
	if(s5.isPlaying()) {s5.stop(); s6.play;}
	if(s6.isPlaying()) {s6.stop(); s7.play;}
	if(s7.isPlaying()) {s7.stop(); s8.play;}
	if(s8.isPlaying()) {s8.stop(); s9.play;}
	if(s9.isPlaying()) {s9.stop(); s0.play;}

	globalSong.pause();
	currentSongIndex++;
	if(currentSongIndex > songListSize)
	{
		currentSongIndex = 0;
	}
	//Load the songs into a list
	///var nextSong = songList[currentSongIndex];
	//globalSong = loadSound(nextSong);
	//globalSong.play();
	
}