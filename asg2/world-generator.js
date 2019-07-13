//Cristian Rodriguez

class WorldGenerator
{
	constructor(mapSize,boxSize, mHeight)
	{
		this.mSize = mapSize;
		this.bSize = boxSize;
		this.maxHeight = mHeight;
		this.cells = new Array(mapSize);
		this.noiseScale = 0.02;
		this.inc = 0.01;
		this.isFinished = false;

		//Load in all of the textures for the map
		//this.grass = loadImage('grassTexture.jpg');
		//this.dirt = loadImage('dirtTexture.jpg');
		//this.snow = loadImage('snowTexture.jpg');
		//this.water = loadImage('waterTexture.jpg');

		// Initialize cells with all zeros
        for(let a = 0; a < mapSize; a++) 
        {
            this.cells[a] = new Array(mapSize);
        }
	}

	//Initialize the values of the 2D array to 0
	initialize()
	{
		for (let x = 0; x < this.mSize; x++)
		{
			for(let z = 0; z < this.mSize; z++)
			{
				//var newX = x * 10;
				//var newZ = z * 10;
				this.cells[x][z] = 0;
      			fill(0,0,255);
			}
		}
	}

	//Randomize the cell noise for each of the cells
	randomizeCells()
	{
		for (let x = 0; x < this.mSize; x++)
		{
			for(let z = 0; z < this.mSize; z++)
			{
				//var noiseVar = noise(x, z) * this.maxHeight;
				var noiseVar = noise(x,z);
				this.cells[x][z] = noiseVar;
				//console.log("randomizeCells() noiseVar: " + noiseVar);
				//console.log("randomizeCells() Cell Value: " + this.cells[x][z]);
			}
		}
	}

	//calculate the noise between each cell and draw the boxes
	calculateNoise()
	{
		for (let x = 0; x < this.mSize; x++)
		{
			for(let z = 0; z < this.mSize; z++)
			{
				var newX = x * 10;
				var newZ = z * 10;
				var newY = this.cells[x][z];
				//console.log("calculateNoise: " + temp);
				newY = int(newY*this.bSize);
				//newY = int(newY*20);
				translate(newX,newY,newZ);
				box(this.bSize);
				translate(-newX,-newY,-newZ)
			}
		}
		this.isFinished = true;
	}

	//Resets all of the noise values for the 2D array and clears the scene
	reset()
	{
		clear();
		for (let x = 0; x < this.mSize; x++)
		{
			for(let z = 0; z < this.mSize; z++)
			{
				this.cells[x][z] = 0;
			}
		}
	}

	//Add texture maps to the blocks depending on their noiseval
	addTexture(noiseVal)
	{
		if(noiseVal < 0.2)
		{
			//console.log("Water texture added");
			//texture(this.water);
		}
		else if(noiseVal >= 0.2 && noiseVal < 0.5)
		{
			//console.log("Grass texture added");
			//return this.grass;
		}
		else if(noiseVal >= 0.5 && noiseVal < 0.8)
		{
			//console.log("Dirt texture added");
			//return this.dirt;
		}
		else
		{
			//console.log("Snow texture added");
			//return this.snow;
		}
	}

	//Alerts that the generation for the map is done
	generationDone()
	{
		return this.isFinished;
	}
	/*
	step()
	{
		var stepX = int(random(3))-1;
		var stepY = int(random(3))-1;
		var stepZ = int(random(3))-1;
		cX+=stepX;
		cY+=stepY;
		cZ+=stepZ;
	}
	
	display()
	{
		//var inc = 0.02;
		//let zOff = 0;
		for (let x = 0; x < this.mSize; x++)
		{
			//var xOff = 0;
			for(let z = 0; z < this.mSize; z++)
			{
				var newX = x * 10;
				var newZ = z * 10;
				//var noiseVar = noise(xOff, zOff) * this.mHeight;
				//var newY = noiseVar;
				this.cells[x][z] = 0;
				//console.log(noiseVar);
      			
      			//box([width], [Height], [depth], [detailX], [detailY])
      			fill(0,0,255);
				translate(newX,0,newZ);
				box(this.bSize);
				translate(-newX,0,-newZ)
      			//xOff += inc;
			}
			//zOff += inc;
		}
	}	

	*/
}