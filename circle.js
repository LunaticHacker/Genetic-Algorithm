function Circle(dna) {

  this.x = random(width);
  this.y = random(height);
  if (dna)
    this.dna = dna
  else this.dna = new DNA();
  this.fitness = 0;

}
Circle.prototype.show = function() {
  fill(this.dna.color, 0, 255)
  ellipse(this.x, this.y, this.dna.w);

}

Circle.prototype.calcFitness = function() {

  var d = target_width - this.dna.w;
  if (d < 0) d *= -1;
  if (d == 0) this.fitness = 1;
  else this.fitness = 1 / d;
  // console.log(this.fitness)



}
