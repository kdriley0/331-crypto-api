const fs= require("fs");
var coins;
var fetchNotes= () =>{
    try{
        var coinString= fs.readFileSync('coins-data.json');
        return JSON.parse(coinString);
    }catch(e){
        return[];
    }
}

var saveCoins= (coins) => {
    fs.writeFileSync('coins-data.json', JSON.stringify(coins));
}

var addCoin = (symbol,totalPrice)=>{
 var notes=fetchNotes();
 
 var coin={
	 symbol,
	 totalPrice
 };
 try {
     var coinString=fs.readFileSync('coins.data');
     coins=JSON.parse(coinString);
     
 }catch(e){
     
 }
 //we dont want duplicates 
 var dup=coins.filter(coin=> coin.symbol===symbol);
 
 if(dup.length===0){
		coins.push(coin);
    saveCoins(coin);
     return coin;
 } 
};
module.exports={
	addCoin
}