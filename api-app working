const crypto = require("./crypto");
const yargs = require("yargs");
//my function coin so I can have different coins  I am going to try to store it in another file like we did with notes
//var coin = {  symbol: "",price: 0};
const coins = require("./coins")
var coi;
const argv = yargs
  .options({
    c: {
      describe: "the symbol of the crypto",
      demand: true,
      alias: "crypto",
      string: true
    }
  })
 
  .help()
  .alias("help", "h").argv;
  
  var i=0;
  //console.log("yargs", yargs);
 crypto.getCrypto(argv.c, argv.n, (err, results) => {
	  if(err){
		  console.log(err)
	  } else { 
		
		
		const cstr = JSON.stringify(results);
		const splitStr=cstr.split(":");
		
		var token=argv.c;
	//	console.log(splitStr[2]);
		coi = splitStr[3].substring(0,(splitStr[2].length-2));
		coi=parseFloat(coi);
	console.log(token);
		var number=parseFloat(argv.n);
		number*=coi;
	
			console.log(`your ${token} coins are worth ${number}$` );
	
		  }
	  
  });
 // console.log("coin 1=", coins[0])