//Cristian Rodriguez
class MarkovChain
{
	constructor(midiFile = undefined, matrix = undefined) 
	{
        if (matrix) 
        {
            this.matrix = matrix;
        }
        else 
        {
            if (midiFile === undefined) 
            {
                this.matrix = new Array(128);
                for (let i = 0; i < this.matrix.length; i++) 
                {
                    this.matrix[i] = new Array(128);
                    for (let j = 0; j < this.matrix[i].length; j++) 
                    {
                        this.matrix[i][j] = Math.floor(Math.random() * 50);
                    }
                }
            } 
            else 
            {
                parseMidiToMatrix(midiFile).then((noteMatrix) => 
                {
                    this.matrix = noteMatrix;
                });
            }
        }
    }

	selectNextNote(note) 
	{
        let nextNoteProbabilities = this.matrix[note];
        let probabilitySum = 0;
        for (let i = 0; i < nextNoteProbabilities.length; i++) {
            probabilitySum += nextNoteProbabilities[i];
        }

        let choice = Math.floor(Math.random() * probabilitySum);
        let currentSum = 0;
        for (let i = 0; i < nextNoteProbabilities.length; i++) {
            currentSum += nextNoteProbabilities[i];
            if (choice < currentSum) {
                return i;
            }
        }

        return this.selectAppearingNote();
    }

    static crossoverAverage(a, b) 
    {
        return Math.floor((a + b) / 2);
    }

    static crossoverRandom(a, b) 
    {
        return Math.random() > 0.5 ? a : b;
    }

    //Used to help copy the matrix
    duplicate() 
    {
        let copyMatrix = new Array(128);
        for (let i = 0; i < copyMatrix.length; i++) 
        {
            copyMatrix[i] = new Array(128);
            for (let j = 0; j < copyMatrix[i].length; j++) 
            {
                copyMatrix[i][j] = this.matrix[i][j];
            }
        }
        return new MarkovChain(undefined, copyMatrix);
    }
}