
const { getPowerConsumption } = require('./functions');

module.exports = {
  process: (inputs) => {
    
    const powerConsumption = getPowerConsumption(inputs);

    console.log(`power consumption : ${powerConsumption}`);
  }
}