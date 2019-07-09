let width;
let height;

function setup() 
{
	width = 500;
	height = 500;
    createCanvas(width, height);

    cellSize = 10;
    ruleset = [0,1,0,1,1,0,1,0];
    ca = new CellularAutomata(width/cellSize, ruleset);
}

function draw() 
{
    ca.draw(cellSize);
    ca.generate();

    if(ca.generation > width/cellSize) 
    {
        //noLoop();
        ruleSet = [1,1,1,1,1,1,1,1]
        for (let i = 0; i < ruleset; i++)
        {
        	ruleset[i]= random() < 0.5 ? 0: 1;        
        }
        ca = new CellularAutomata(width/cellSize, ruleset);
    }
}


/* //Class Code
let cellW = 10;
let width = 10;
let size = width/cellW;

function setup()
{
	createCanvas(800,500);
	strokeWeight(1);

	let size = width/cellW;
	let ruleSet = [0,1,0,1,1,0,1,0]

	ca = new CellurlarAutomata(size, ruleSet);
}

function draw()
{
	ca.draw()(cellW);
	ca.evolve();
}
*/