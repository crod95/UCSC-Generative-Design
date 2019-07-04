function ParticleSystem(num,y)
{
	this.size = num;
	this.y = y;

	this.display = function()
	{
		let col = random(255);
		for(var n = 0; n < num; n++)
		{
			fill(col - 20, col -20, col -20);
			stroke(random(255), random(255));
			ellipse(this.x, this.y - (n * 10), this.radius/n, this.radius/n);
		}
	}

	this.move = function()
	{
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}

	
}