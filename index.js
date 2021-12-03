const program = require("commander");
program
  .version("0.0.1")
  .argument("<day>")
  .option("-d, --debug", "enable debugging")
  .option("-")
  .action((day, options, command) => {
    if (options.debug) {
      console.error("Called %s with options %o", command.day(), options);
    }
    const title = options.title ? `${options.title} ` : "";
    console.log(`executing advent day ${day}`);
  });
