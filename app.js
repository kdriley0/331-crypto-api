
const crypto = require("./crypto");
const yargs = require("yargs");
//my function coin so I can have different coins  I am going to try to store it in another file like we did with notes
//var coin = {  symbol: "",price: 0};



//const coins = require("./coins") // a failed attempt at doing what you showed us in the note file

//declaring variables to be used later
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
  
  //console.log("yargs", yargs);
 crypto.get_crypto(argv.c, argv.n, (err, results) => {
	  if(err){
		  console.log(err)
	  } else { 
		
			
			const cstr = JSON.stringify(results);//assigning the string version of results to the const cstr or constant string
			const splitStr=cstr.split(":");		 //splitting the string by : 
			var token=argv.c;
			
			
			coi = splitStr[3].substring(0,(splitStr[2].length-2));   //grabbing the USD value of the str
			coi=parseFloat(coi);								     // and making it into a float
		//console.log(token); 
			var number=parseFloat(argv.n);						     // making a float out of the numbed given 
			number*=coi;										     //seting the number equal to the total worth of the coins
		
			console.log(`your ${token} coins are worth ${number}$` );//showing the result
	
		  }
	  
  });
 // console.log("coin 1=", coins[0])