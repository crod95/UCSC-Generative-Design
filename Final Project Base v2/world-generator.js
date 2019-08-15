//Cristian Rodriguez

class WorldGenerator
{
	constructor(mapSize,boxSize, mHeight)
	{
		this.mSize = mapSize;
		this.bSize = boxSize;
		this.laneSize = 4;
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
			for(let z = 0; z < this.laneSize; z++)
			{
				//var newX = x * 10;
				//var newZ = z * 10;
				this.cells[x][z] = 0;
      			fill(0,0,0);
			}
		}
	}

	//Randomize the cell noise for each of the cells
	randomizeCells()
	{
		for (let x = 0; x < this.mSize; x++)
		{
			for(let z = 0; z < this.laneSize; z++)
			{
				//var noiseVar = noise(x, z) * this.maxHeight;
				var noiseVar = noise(x,z);
				this.cells[x][z] = noiseVar;
				//console.log("randomizeCells() noiseVar: " + noiseVar);
				//console.log("randomizeCells() Cell Value: " + this.cells[x][z]);
			}
		}
	}

	musicVariate(spectrumHeights)
	{
		//Math.floor(Math.random() * 100);
		for (let x = 0; x < this.mSize; x++)
		{
			let amp = spectrumHeights[x];
			for(let z = 0; z < this.laneSize; z++)
			{
				let laneModifier;
				let laneAddon;
				if(z%4 == 0)
				{
					laneModifier = 1;
					laneAddon = -(Math.floor(Math.random() * 100));
				}
				else if(z%4 == 1)
				{
					laneModifier = 1;
					laneAddon = 0;
				}
				else if(z%4 == 2)
				{
					laneModifier = -1;
					laneAddon = 0;
				}
				else if(z%4 == 3)
				{
					laneModifier = 1;
					laneAddon = Math.floor(Math.random() * 100);
				}
				this.cells[x][z] = amp/8 * laneModifier + laneAddon;
			}
		}
	}

	//calculate the noise between each cell and draw the boxes
	calculateNoise()
	{
		for (let x = 0; x < this.mSize; x++)
		{
			for(let z = 0; z < this.laneSize; z++)
			{
				let rCol = random(255);
				let gCol = random(255);
				let bCol = random(255);
				var newX = x * 10;
				var newZ = z * 10;
				var newY = this.cells[x][z];
				//fill(newY, 255 - newY, 255 - newY);
				fill(rCol * newY, gCol, bCol);
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
			for(let z = 0; z < this.laneSize; z++)
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

	//Change color of the blocks depending on their sound
	changeColor()
	{

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