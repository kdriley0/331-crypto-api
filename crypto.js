const cryp = require("cryptocompare");//not needed?
const request = require("request");
/*
* my caller to the cryptocompare API gets back my tokens price in BTC, ETH, and USD
* I will only use the USD part for this assignment
*/
var get_crypto = (crypto, number, cb) =>{
	request(
	{
		url: `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=BTC,USD,ETH`,
		json: true 
		
	},
	(error, response, body) => {
		if(error)	{
			cb("unable to connect to the cryptocompare api server!");
		} else if (!error && response.statusCode === 200) {
			cb(undefined, {
				all: body
				
			});
		}
	 }
	);
	
};

module.exports = {
	get_crypto//make sure to export it so it can be used in other files
};
