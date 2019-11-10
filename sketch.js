let target;
let population;
let lifespan = 100;
let count = 0;
let target_width = 20;
var input;
var button;

function setup() {
  createCanvas(800, 400);
  input = createInput('20')
  button = createButton('change target')
  button.mousePressed(() => {
    target_width = input.value() * 1; //converts to number
    target.dna.w = target_width;

  })
  target = new Circle(new DNA(target_width, 255))
  population = new Population();

}

function draw() {
  background(0);

  target.show();
  population.show();

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
    //This can later be used to make changes to the radius of the circle during it's lifetime
    //Now this is to help visualizing the process
  }



}
