function Population() {
  this.circles = [];
  this.popsize = 10;
  this.matingpool = [];
  for (var i = 0; i < this.popsize; i++) {
    this.circles[i] = new Circle();
  }

}
Population.prototype.show = function() {
  for (var i = 0; i < this.popsize; i++) {
    this.circles[i].show();
  }

}
Population.prototype.evaluate = function() {

  // Iterate through all boxes and calcultes their fitness
  for (var i = 0; i < this.popsize; i++) {
    this.circles[i].calcFitness();
  }
  this.matingpool = [];

  for (var i = 0; i < this.popsize; i++) {
    var n = floor(this.circles[i].fitness * 100);
    for (var j = 0; j < n; j++) {
      this.matingpool.push(this.circles[i]);
    }
  }
}



Population.prototype.selection = function() {
  var newCircles = [];
  for (var i = 0; i < this.popsize; i++) {
    var parent1 = random(this.matingpool).dna;
    var parent2 = random(this.matingpool).dna;
    var child = parent1.crossover(parent2);
    //console.log(child)
    child.mutation();

    newCircles[i] = new Circle(child);
    // console.log("width "+newBoxes[i].dna.w)

  }
  this.circles = newCircles;
  //  console.log(newBoxes)

}
