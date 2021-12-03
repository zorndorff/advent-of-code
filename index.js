const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const program = new Command();

program
  .version('0.0.1')
  .argument('<file>')
  .option('-d, --day <daytoprocess>', 'day of the advent')
  .option('--debug', 'enable debugging')
  .action((file, options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command,  options);
    }
    console.log(`executing advent day ${file}`);

    const input = fs.readFileSync(path.join(__dirname, file)).toString().split('\n');
    const adventProcessor = require(path.join(__dirname,`day_${options.day}`));
    adventProcessor.process(input);
  })
  .parse();
