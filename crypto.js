const cryp = require("cryptocompare");
const request = require("request");

var getCrypto = (crypto, cb) =>{
	request(
	{
		url: `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR`,
		json: true 
		
	},
	(error, response, body) => {
		if(error)	{
			cb("unable to connect to the cryptocompare api server!");
		}else {
			cb(undefined, {
				all: body
				
			});
		}
	 }
	);
	
};

module.exports = {
	getCrypto
};
	