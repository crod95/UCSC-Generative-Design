let world;
let race;
let camera;
let newGen;

//Genetic Algorithm Generation
let popSize;      //Size of the population
let geneSize;     //Size of each individual's chromsome in the population
let mutRate;      //The rate at which the individuals in the population mutate
let carVectors, carWheels;

function setup() {
  createCanvas(640, 400, WEBGL);
  setAttributes('antialias', true);

  //Initialize popSize, geneSize, and defining a car
  popSize = 10;
  carVectors = 8;
  carWheels = 2;
  geneSize = (carVectors*2) + (carWheels*2);    //16+4=20 genes total

  // Initialize box2d physics and create the world
  world = createWorld();
  camera = createCamera();

  // Create Camera
  camera.ortho(-width / 2, width / 2, -height / 2, height /2, 0, 10);
  camera.setPosition(0, 0, 0);

  //Genetic Algorithm at work
  //New implementation
  //Use the Genetic Algorithm to take the randomized set of cars originally
  //GeneticAlgorithm(popSize, indSize, fitFunc, mutationRate);
  //popSize: population size
  //indSize: size of the genotype
  //genAlg: fucntion to be called to create the fittest next generation
  //mutationRate: the rate of mutation for the cars

  //Produce a population of 10 cars that each have 20 genes in their genotype then
  //call the genAlg function at the end and a mutation function to help modify them
  newGen = new GeneticAlgorithm(popSize,geneSize,raceOverCallback, mutRate);
  //newGen.init();

  // Create a list of cars [original]
  let cars = [];
  for(let i = 0; i < 10; i++) 
  {
      let feats = Car.randomFeatures();
      let pos = createVector(0, -100);
      let car = new Car(pos.x, pos.y, "car" + i, feats);
      cars.push(car);
  }

  // Create a terrain [original]
  let pos = createVector(-width/2, 10);
  terrain = new Terrain(pos.x, pos.y, 100, 100, 1);

  // Create a world to manage the cars [original]
  race = new Race(terrain, cars, raceOverCallback);
  race.start();
}

function draw() 
{
    if (race.running) 
    {
        background(240);
    }

    race.update();
    race.draw();

    if(race.running) 
    {
        // Update physics. 2nd and 3rd arguments are velocity and position iterations
        let timeStep = 1.0 / 30;
        world.Step(timeStep, 10, 10);

        // Get race leaderboards
        let leaderboard = race.getLeaderboards();

        // Follow first car with the camera
        let firstCar = leaderboard[0].car;

        if (firstCar) 
        {
            let firstPos = firstCar.getPosition();
            camera.setPosition(firstPos.x + width/5, firstPos.y, camera.eyeZ);
        }
    }
}

// ========================================
// Callback function for when the race is over
// ========================================
function raceOverCallback(finalLeaderboards) 
{
    console.log("race over!");
    console.log(finalLeaderboards);

    // Get race leaderboards
    let newLeaderboard = race.getLeaderboards();

    for(let i = 0; i < popSize; i++)
    {
      //Temporary variable for the car to access each of their variables
      let tempCar = newLeaderboard[i].car;

      //Set the new fitness for each of the new cars in newGen
      //newGen.setFitness(race.getCarProgress(tempCar),i);
    }
    //newGen.evolve();
    /*
    // Restart race with new cars
    let cars = []
    for(let i = 0; i < 10; i++) 
    {
        let feats = Car.randomFeatures();
        let pos = createVector(0, -100);
        let car = new Car(pos.x, pos.y, "car" + i, feats);
        cars.push(car);
    }
    */

    console.log("End of CallBack");
    //Own separate function for checking each of the cars
    //race.setCars(cars);
    //race.start();
}

//Testing Function
function genAlg()
{
  //console.log("Running genAlg()");
  //console.log(race.getLeaderboards());
  
  // Get race leaderboards
  let newLeaderboard = race.getLeaderboards();

  for(let a = 0; a < popSize; a++)
  {
    //Temporary variable for the car to access each of their variables
    let tempCar = newLeaderboard[a].car;

    //Set the new fitness for each of the new cars in newGen
    newGen.setFitness(race.getCarProgress(tempCar),a);
    //console.log("car" + a + " newGen.Fitness: " +  newGen.getFitness(a));
    //console.log(tempCar.name + " " + tempCar.feats);


    //Looks at the car progress for fitness : race.getCarProgress(tempCar)
    //console.log("Car " + a + " " + race.getCarProgress(tempCar));

    //Looks at the car feats for its features : race.getCarProgress(tempCar)
    // Load angles/magnitues and sort them by angle
    //console.log("Car " + a + " Feats:  " + race.getCarFeatures(a));

  }

  //Evolve the newGen 
  newGen.evolve();
}