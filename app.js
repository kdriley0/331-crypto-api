const crypto = require("./crypto");
const yargs = require("yargs");
//my function coin so I can have different coins
var coin = {  symbol: "",price: 0};
var coins= [];//hopefully so i can have multiple coins 
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
  
  var i=0;
  //console.log("yargs", yargs);
  crypto.getCrypto(argv.c, (err, results) => {
	  if(err){
		  console.log(err)
	  } else { console.log(typeof(results)), console.log(`your_crypto: ${argv.c},  \nyour_current_state_is:  
		${JSON.stringify(results)},`//key "USD" dictonary
		);
		
		
		var pointNum = parseFloat(results);
		console.log(pointNum);//NaN
		//let coinV = results.price;//undefined
//	console.log(`your coin is ${argv.c} and its price is ${coinV}`);
		
	
		  }
	  
  });
 // console.log("coin 1=", coins[0])