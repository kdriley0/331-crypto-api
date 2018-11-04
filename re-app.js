const crypto = require("./crypto");
const yargs = require("yargs");
//my function coin so I can have different coins--  I am going to try to store it in another file like we did with notes
//var coin = {  symbol: "",price: 0};
const coins = require("./coins")
var coi;
let argva = yargs.argv;
let command= argva._[0];
console.log(command);
var input="";
var num=0;
while(input!=0){            //i was trying to do a loop


    input=prompt("please enter your coin symbol or enter list to get your lising of coins/nor type 0 to exit");// I found this online so I thought it would work
    if(input===0){
        break;
    }else if(input==='getAll'){
        console.log("get alll");
    }else{
        num= prompt(`how many ${input} do you have`);
        
         crypto.getCrypto(input, num, (err, results) => {
	  if(err){
		  console.log(err)
	  } else { 
		
		
		const cstr = JSON.stringify(results);
		const splitStr=cstr.split(":");
		
		var token=input;;
	//	console.log(splitStr[2]);
		coi = splitStr[3].substring(0,(splitStr[2].length-2));
		coi=parseFloat(coi);
	//console.log(token);
		var number=parseFloat(num);
		number*=coi;
	var coin =coins.addCoin(token, number);
	

			console.log(`your ${token} coins are worth ${number}$` );
	
		  }
	  
  });
  
    }
    
}
 
      
  

 // console.log("coin 1=", coins[0])