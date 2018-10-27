const crypto = require("./crypto");
const yargs = require("yargs");

const argv = yargs
  .options({
    c: {
      describe: "To fetch crypto info for",
      demand: true,
      alias: "crypto",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;
  
  //console.log("yargs", yargs);
  crypto.getCrypto(argv.c, (err, results) => {
	  if(err){
		  console.log(err);
	  } else { console.log(`your_crypto: ${argv.c},  \ncurrent_state_is:  
		${console.log(JSON.stringify(results))})`
		);
		  }
	  
  });