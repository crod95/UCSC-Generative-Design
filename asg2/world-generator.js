//Cristian Rodriguez

class WorldGenerator
{
	constructor(cX,cY,cZ,cL)
	{
		this.wgX = cX;
		this.wgY = cY;
		this.wgZ = cZ;
		this.wglen = cL;
	}

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
		//console.log("display() function running");
		fill(0,0,255);
		box(this.wgX,this.wgY,this.wgZ);
	}

	randomize()
	{
		//console.log("rotate() function running");
	}
}