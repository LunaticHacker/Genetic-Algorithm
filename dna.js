function DNA(w, color) {
  if (w) {
    this.w = w;
  } else this.w = floor(random(51));

  if (color) this.color = color;
  else this.color = 50;


  this.mutation = function() {
    if (random(1) < 0.01) {
      this.w = floor(random(target_width + 50));
    }

  }
  this.crossover = function(dna) {
    var w = (this.w + dna.w) / 2
    return new DNA(w)

  }
}
//here w is the gene and crossovers are simplified
