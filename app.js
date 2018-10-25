const crypto = require("cryptocompare");
const yargs = require("yargs");

const argv = yargs
  .options({
    a: {
      describe: "To fetch crypto info for",
      demand: true,
      alias: "address",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;
  