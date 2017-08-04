//My Solution
function checkCashRegister(price, cash, cid) {
  var change = cash - price; //0.50
  var changeArr = [];
  var quantCoins = 0;
  //console.log(cid[8][1]);
  var cidObj = {
  	100 : cid[8][1],
  	20 : cid[7][1],
  	10 : cid[6][1],
  	5 : cid[5][1],
  	1 : cid[4][1],
  	0.25 : cid[3][1],
  	0.10 : cid[2][1],
  	0.05: cid[1][1],
  	0.01: cid[0][1]
  };
  for(var key in cidObj){
  	if(change > key){
  		quantCoins = change/key;
  		changeArr.push([,quantCoins*key])
  	}

  		//console.log("I am "+ key);

  }
  //console.log(cidObj);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));