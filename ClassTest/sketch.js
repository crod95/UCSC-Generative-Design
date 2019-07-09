

function setup() 
{
    createCanvas(600, 600);

    w = 10;
    ruleset = [0,1,0,1,1,0,1,0];
    ca = new CellularAutomata(width/w, ruleset);
}

function draw() 
{
    ca.draw(w);
    ca.generate();

    if(ca.generation > 50) 
    {
        noLoop();
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