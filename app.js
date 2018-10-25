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
  
  crypto.getCrypto(argv.c, (err, results) => {
	  if(err){
		  console.log(err)
	  } else { cosole.log(`your crypto: ${argv.c},  \ncurrent state is:  
		${results})`
		  
	   }
	  );
  }