//My Solution
function checkCashRegister(price, cash, cid) {
  var change = cash - price; //96.74
  var changeArr = [];
  var cidObj = [
  	 [100, cid[8][1], "ONE HUNDRED"], //100.00
  	 [20, cid[7][1], "TWENTY"], //60
  	 [10, cid[6][1], "TEN"], //20.00
  	 [5, cid[5][1], "FIVE"],//55.00
  	 [1, cid[4][1], "ONE"], //90.00
  	 [0.25, cid[3][1], "QUARTER"], //4.25
  	 [0.10, cid[2][1], "DIME"], //3.10
  	 [0.05, cid[1][1], "NICKEL"], //2.05
  	 [0.01, cid[0][1], "PENNY"] //1.01
  ];
  
  for(var i=0; i<cidObj.length; i++){
    console.log(cidObj[i][0]+ " "+cidObj[i][1] + " "+ cidObj[i][2]);
    if(change > cidObj[i][0]){
      
      if(change>cidObj[i][1] && cidObj[i][2]==="PENNY"){
        return "Insufficient Funds";
      }
      else if(cidObj[i][1]===change && cidObj[i][2]==="PENNY"){
        return "Closed";
      }
      else if((cidObj[i][1]-change)>0){
        var temp = cidObj[i][0]*Math.floor(change/cidObj[i][0]);
        changeArr.push([cidObj[i][2], temp]);
        change -= temp;
        change = Math.round(change * 100) / 100;
        
      } else if((change-cidObj[i][1])>0 && cidObj[i][1]!==0){
        changeArr.push([cidObj[i][2], cidObj[i][1]]);
        change -= cidObj[i][1];
        change = Math.round(change * 100) / 100;
      }
      console.log(changeArr);
    }
  }
  
    return changeArr;
  }



console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

