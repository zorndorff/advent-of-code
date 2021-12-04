
const { getPowerConsumption } = require('./functions');

module.exports = {
  process: (inputs) => {
    
    const powerConsumption = getOxygen(inputs);

    console.log(`oxygen gen rating : ${oxygen}`);
  }
}