const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const program = new Command();

program
  .version('0.0.1')
  .option('<inputFile>')
  .option('-d, --day <daytoprocess>', 'day of the advent')
  .argument('-p, --part <part>', 'Which part to process 1, or 2')
  .option('--debug', 'enable debugging')
  .action((file, options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command,  options);
    }
    console.log(`executing advent day ${file}`);

    const input = fs.readFileSync(path.join(__dirname, file)).toString().split('\n');
    const adventProcessor = require(path.join(__dirname, 'src', `day_${options.day}`));
    adventProcessor.process(input);
  })
  .parse();
