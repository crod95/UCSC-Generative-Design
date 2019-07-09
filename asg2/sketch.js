//Cristian Rodriguez W1561133
let textureCube;
let terrainCubes = [];
let testObj;
//Map parameters, (h,w,d) respectively for height, width, and depth
let h, w, d;

function setup()
{
	let canWidth = 600;
	let canHeight = 600;
	h = 10;
	w = 10;
	d = 10;
	createCanvas(canWidth,canHeight,WEBGL);
}

function draw()
{
	//console.log("Draw Running");
	//box([width], [Height], [depth], [detailX], [detailY])
	background(200);
	//camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ]);
	//rotateX(frameCount * 0.01);
	//rotateY(frameCount * 0.01);
	camera(100,100,100,0,0,0,0,0,45);
	//textureCube = new WorldGenerator(10,10,10,100);
	for (i = 0; i < h; i++)
	{
		terrainCubes.push(new WorldGenerator(10,10,10));
		//terrainCubes[i] = new WorldGenerator(10,10,10)
		terrainCubes[i].display();
	}
	//textureCube.display();
	//textureCube.tester();
}

class Test
{
	constructor()
	{
		this.x = 0;
		this.y = 0;
	}

	display()
	{
		fill(210);
		box(300,100,100);
	}
}