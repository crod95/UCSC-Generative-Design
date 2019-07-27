//Cristian Rodriguez
class npc
{
	constructor(startX,startY)
	{
		
	}

	//Checks if the player is close enough to the npc to interact
	sensePlayer(px, py, nx, ny)
	{
		let xDif = abs(px-nx);
		let yDif = abs(py-ny);
		if((xDif < 10) || (yDif < 10))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	talk()
	{

	}
}