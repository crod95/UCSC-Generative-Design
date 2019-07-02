
public class Particle
{
	float width;
	float length;
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