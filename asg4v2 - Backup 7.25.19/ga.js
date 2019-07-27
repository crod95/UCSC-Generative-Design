//Cristian Rodriguez
class Individual 
{
    constructor(indSize) 
    {
        //Size of the index (How many genes each individual has)?
        this.indSize = indSize;
        //An array that represents the chromosome of the individual
        this.gens = new Array(indSize);
        //Utilty variable used to grade each individual
        this.fitness = 0;

        this.init();
    }

    //So far set for random initialization
    init() 
    {
        //Create the new array to hold the values for the features in the car;
        let carFeats = new Array(this.indSize);
        carFeats = Car.randomFeatures();

        for(let i = 0; i < this.indSize; i++) 
        {
            //Original randomization between 1 and 0
            //this.gens[i] = int(random(2));
            //Copy each of the carFeats into this geneotype
            this.gens[i] = carFeats[i];
            //console.log("Individual carFeats[" + i + "]: " + carFeats[i]);
            //console.log("Individual gens[" + i + "]: " + this.gens[i]);
        }
    }
    //Return gene at a certain index
    returnGene(index)
    {
        this.gens[index];
    }

    returnGenotype()
    {
        return this.gens;
    }
}

//
class GeneticAlgorithm {
    constructor(popSize, indSize, fitFunc, mutationRate) 
    {
        //Individual size
        this.indSize = indSize;
        //Population size
        this.popSize = popSize;
        //Utility Function
        this.fitFunc = fitFunc;
        //Rate of mutation for the cars
        this.mutationRate = mutationRate;

        this.init();
    }

    //Create the popSize number of individuals each of size indSize(for genotype)
    init() 
    {
        this.population = new Array(this.popSize);
        for(let i = 0; i < this.popSize; i++) {
            // Initialize individual i randomly
            //console.log("GeneticAlgorithm created: car" + i);
            this.population[i] = new Individual(this.indSize);
        }
        //console.log("Genetic Algorithm for Population constructed");
    }

    //Set the fitness value for the car at index
    setFitness(fitScore, index)
    {
        this.population[index].fitness = fitScore;
    }

    //Get the fitness value for the car at index
    getFitness(index)
    {
        return this.population[index].fitness;
    }

    //Get the genotype for the car
    getGenotype(index)
    {
        let carGeno = this.population[index].returnGenotype();
        return carGeno;
    }

    evolve() 
    {
        this.evaluate();

        let matingPool = this.select();
        let newPopulation = this.reproduce(matingPool);
        this.mutate(newPopulation);

        this.population = newPopulation;

        this.evaluate();
        return this.best();
    }

    evaluate() 
    {
        for(let i = 0; i < this.popSize; i++) 
        {
            let individual = this.population[i];
            individual.fitness = this.fitFunc(individual.gens)
        }
    }

    select() 
    {
        let matingPool = new Array();

        // Select this.popSize Individual to be the parents
        for(let i = 0; i < this.popSize; i++) {
            let survivor = this.rouletteWheel();
            matingPool.push(survivor);
        }

        return matingPool;
    }

    //Randomiztion choice for getting a new generation of cars depending on the performance parent cars
    rouletteWheel() 
    {
        //To look at a car's progress, iterate through this.population[i] with each
        //of them being indviduals
        //Calculating the total progress that all cars made 
        let totalProgress = 0;
        for(let i = 0; i < this.popSize; i++) 
        {
            totalProgress = totalProgress + this.population[i].fitness;
        }

        //Determine the percentage chance of choosing each of the 
        for(let j = 0; j < this.popSize; j++) 
        {
            this.population[j].fitness /= totalProgress;
        }

        //Here all the fitnesses sum up to 1
        let choice = random();
        let fitnessSoFar = 0;

        //Go through the fitness until we reach the value of choice
        for(let k = 0; k < this.popSize; k++) 
        {
            fitnessSoFar += this.population[k].fitness;

            if(choice < fitnessSoFar) 
            {
                return this.population[k];
            }
        }

        return this.population[this.population.length - 1];
    }

    //Have the mating reproduce offspring reliant on what matingpool is given in the parameters
    //Returns the new array of the population
    reproduce(matingPool) 
    {
        //Set the new array for the new offspring
        let newPopulation = new Array(this.popSize);

        //Using the crossover function cross matingPool A and matingPool B
        for(let i = 0; i < this.popSize; i++) 
        {
            let a = int(random(this.popSize));
            let b = int(random(this.popSize));

            newPopulation[i] = this.crossover(matingPool[a], matingPool[b]);
        }

        return newPopulation;
    }

    //Returns a child from parent A and parent B
    crossover(parentA, parentB)
    {
        //Create new individual
        let child = new Individual(this.indSize);

        let midPoint = int(random(this.indSize));
        for(let i = 0; i < this.indSize; i++) 
        {
            if(i < midPoint) 
            {
                child.gens[i] = parentA.gens[i];
            }
            else 
            {
                child.gens[i] = parentB.gens[i];
            }
        }

        return child;
    }

    //Mutate each of the new individuals in the new population if their random 
    //chance is less than mutationRate
    mutate(newPopulation) 
    {
        for(let i = 0; i < this.popSize; i++) 
        {
            for (let j = 0; j < this.indSize; j++) 
            {
                if (random() < this.mutationRate) 
                {
                    newPopulation[i].gens[j] = int(random(2));
                }
            }
        }
    }

    //Return the best individual in the population (this.population[bix])
    best() 
    {
        let max = -1;
        let bix = 0;

        for(let i = 0; i < this.popSize; i++) 
        {
            if(this.population[i].fitness > max) 
            {
                max = this.population[i].fitness;
                bix = i;
            }
        }

        return this.population[bix];
    }
}