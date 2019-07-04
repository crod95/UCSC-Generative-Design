//Cristian Rodriguez
function Particle(corX, corY, partWidth, partHeight)
{
	this.x = corX;					//X coordinate (int)
	this.y = corY;					//Y coordinate (int)
	this.radius = partWidth;
	//this.wth = partWidth;			//Width of the particle (int)
	//this.hgt = partHeight;		//Length of the particle (int)
	this.speed = random(1,10);		//Speed of the particle (float)
	this.alive = true;				//If the particle is still alive or not (bool)
	this.lifetime = random(1,5);

	//Draw each ellipse 
	this.display = function()
	{
		fill(random(255),random(255),random(255));
		stroke(random(255), random(255));
		ellipse(this.x, this.y, this.radius, this.radius);
	}

	this.speedChange = function(s)
	{
		this.speed = s * (rms * 25);
	}

	this.move = function()
	{
		//let rms = analyzer.getLevel();
		if(alive = true)
		{
			this.y = this.y + this.speed;
		}
		else
		{
			//Hide the particle off-screen
			this.y = -100;
		}
	}

	this.reset = function()
	{
		if(this.y > 530)
		{
			alive = false;
			this.y = 0;
		}
	}

	this.activate = function()
	{
		alive = !alive;
	}
	
}



/*
//Issue of having all variables undefined when constructed
class Particle
{
	constuctor(corX, corY, partWidth, partHeight, partSpeed, born)
	{
		this.x = corX;					//X coordinate (int)
		this.y = corY;					//Y coordinate (int)
		this.wth = partWidth;			//Width of the particle (int)
		this.hgt = partHeight;		//Length of the particle (int)
		this.speed = partSpeed;			//Speed of the particle (float)
		this.alive = born;				//If the particle is still alive or not (bool)
	}


	update()
	{
		//this.corY+=1;
	}

	display() 
  		{
  			let cx = this.x;
  			let cy = this.y;
  			let cw = this.width;
  			let ch = this.height;
  			//console.log("x " + cx);
  			//console.log("y " + cy);
  			//console.log(random(255), random(255), random(255));
    		fill(random(255));
    		//console.log("width " + cw);
  			//console.log("height " + ch);
    		stroke(random(255), random(255));
    		ellipse(this.x,this.y,this.width,this.height);

    		//test ellipse
    		ellipse(100,200,40,40);
 		}
}

//Bubbles example
function Bubble(x,y)
{
	this.x = x;
	this.y = y;

	this.display = function()
	{

		stroke(255);
		fill(255, 150);
		ellipse(this.x, this.y, 48, 48);
	}

	this.move = function()
	{
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}

	
}

//Old particle class
class Particle
{
	var width = 0;
	var length = 0;
	PVector location;
	PVector velocity;
	PVector acceleration;
	float lifespan;

	Particle(PVector l) 
	{
		location = l.get();
		acceleration = new PVector();
		velocity = new PVector();
    	lifespan = 255;
    	isDead = false;
	}

	void update() 
	{
    	velocity.add(acceleration);
    	location.add(velocity);
    	lifespan-=2.0;
  	}
 
  	void display() 
  	{
    	stroke(0,lifespan);
    	fill(175,lifespan);
    	ellipse(location.x,location.y,8,8)
 	}

	bool isDead()
	{
		if (lifespan < 0.0) 
		{
      		return true;
    	} 
    	else 
    	{
      		return false;
    	}
	}
}
*/