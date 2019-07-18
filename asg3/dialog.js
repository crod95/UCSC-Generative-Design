//Cristian Rodriguez
class DialogBox
{
	constructor(width,height)
	{
		this.canWidth = width;
		this.canHeight = height;
		this.canColor;
		//this.newCanvas = document.createElement("SMALLCANVAS");
		//this.canContext = newCanvas.getContext("2d");
		//canContext.fillStyle = "#FFFFFF";
		//canContext.fillRect(20, 20, 150, 100);
		//document.body.appendChild(newCanvas);
		this.newCanvas = document.createElement("CANVAS");
		this.canContext = this.newCanvas.getContext("2d");
		this.canContext.canvas.width  = width;
  		this.canContext.canvas.height = height;
	}

	//Randomize colors in hexadecimal
	randomizeColor()
	{
		var letters = '0123456789ABCDEF';
  		var color = '#';
  		for (var i = 0; i < 6; i++) 
  		{
    		color += letters[Math.floor(Math.random() * 16)];
    	}
		this.color = color;
		//document.body.appendChild(this.newCanvas);
  		//return color;
	}

	//Print out the canvas
	printCanvas()
	{
		print("Canvas is working!");
    	this.canContext.fillStyle = this.color;
		this.canContext.fillRect(0, 0, 400, 400);
		document.body.appendChild(this.newCanvas);
	}

	boundaryWidth()
	{
		return this.canWidth;
	}

	boundaryHeight()
	{
		return this.canHeight;
	}
}
