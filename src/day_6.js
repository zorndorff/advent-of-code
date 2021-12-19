class Aquarium {
  constructor(initialAges){
    this.fishes = initialAges.map((age) => new Fish(age));
  }
  step() {
    for (const fish of this.fishes) {
      const step = fish.step();
      if (step !== null){
        this.fishes.push(step);
      }
    }
  }
}

class Fish {
  constructor(initialTimer) {
    this.initialTimerValue = initialTimer;
    this.timer = initialTimer;
  }
  step(){
    if(this.timer <= 0){
      this.timer = 6;
      return new Fish(9);
    }
    this.timer --;
    return null;
  }
}

module.exports = {
  process: (inputs, days=256) => {
    const fishAges = inputs[0].split(',').map((fishAge) => parseInt(fishAge));
    const aq = new Aquarium(fishAges);

    for (let step = 0; step < days; step++) {
      aq.step();
    }

    console.log(`${aq.fishes.length} fishes`);
    return aq;
  }
}