class CellularAutomata {
    constructor(size, ruleset) {
        this.generation = 0;
        this.cells = new Array(size);
        this.ruleset = ruleset;

        // Initialize cells with all zeros and one in the middle
        for(let i = 0; i < size; i++) {
            this.cells[i] = 0;
        }

        this.cells[size/2] = 1;
     }

     generate() {
         let nextgen = new Array(this.cells.length).fill(0);

         for(let i = 1; i < this.cells.length - 1; i++) {
            let left = this.cells[i - 1];
            let middle = this.cells[i];
            let right = this.cells[i + 1];

            nextgen[i] = this.applyRuleset(left, middle, right);
         }

         this.cells = nextgen;
         this.generation++;
     }

     applyRuleset(left, middle, right) {
         let bitseq = "" + left + middle + right;
         let ix = parseInt(bitseq, 2);
         return this.ruleset[ix];
     }

     draw(w) {
         for (let i = 0; i < this.cells.length; i++) {
             if (this.cells[i] == 1) {
                 fill(0);
             }
             else {
                 fill(255);
             }

             rect(i*w, this.generation*w, w, w);
         }
     }
}



/* //Class Code
class CellularAutomata
{
	constructor(size,ruleset)
	{
		this.size = size;
		this.generation = 0;

		this.cells = new Array(size).fill(0);
		this.cells[size/2] = 1;

		this.ruleset = ruleset;

		console.log(this.cells);
	}

	evolve()
	{
		for(let i = 1; i < this.size - 1; i++)
		{
			let left = this.cells[i-1];
			let middle = this.cells[i];
			let right = this.cells[i + 1];

			this.applyRules(left,middle,right);
		}
	}

	applyRules()
	{
		//Interprets the neightborhood as a binary number
		let bin = "" + left + middle + right;

		//Parses the binary string as a decimal
		let ix = parseString(bin,2);

		return this.ruleset[ix];
	}

	draw(w)
	{
		for(let i = 0; i < this.size; i++)
		{
			if(this.cells[i] == 1)
			{
				fill(0);
			}
			else
			{
				fill(255);
			}
			rect(i+w, this.generation+w,w,w);
		}
	}
}
*/