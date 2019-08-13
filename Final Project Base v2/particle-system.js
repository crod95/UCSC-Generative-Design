//Cristian Rodriguez
function ParticleSystem(num, x, y, chg)
{
	this.size = num;		//num is the number of particles that follow the parent particle
	this.y = y;	
	this.x = x;			//Increments of how far the other particles follow
	this.move

	this.display = function()
	{
		let color = random(255);
		for(var n = 1; n <= num; n++)
		{
			fill(color - (chg*n), color - (chg*n), color - (chg*n));
			stroke(color - (20*n));
			ellipse(this.x, this.y - (chg*n), this.radius/n, this.radius/n);
		}
	}

	this.move = function()
	{
		this.y = this.y + chg;
	}

	
}