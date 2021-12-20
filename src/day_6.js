const { filledArray, sumArrayMembers } = require('./functions');

class Aquarium {
  constructor(initialFishes){
    this.fishes = filledArray(9, 0);
    initialFishes.forEach(age => {
      this.fishes[age] ++;
    });
  }
  step() {
    const timedOutFishes = this.fishes.shift();

    this.fishes.push(timedOutFishes);
    this.fishes[6] += timedOutFishes;
    console.log(this.fishes.join(','));
  }
  count() {
    return sumArrayMembers(this.fishes);
  }
}

module.exports = {
  process: (inputs, days=256) => {
    const fishAges = inputs[0].split(',').map((fishAge) => parseInt(fishAge));
    const aq = new Aquarium(fishAges);

    for (let step = 0; step < days; step++) {
      aq.step();
    }

    console.log(`${aq.count()} fishes`);
    return aq.count();
  }
}