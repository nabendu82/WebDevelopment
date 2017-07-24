//My Solution and Stephen Mayeux Solution
function repeatStringNumTimes(str, num) {
  str = (num<0) ? "" : str.repeat(num);
  return str;  
}

repeatStringNumTimes("abc", 3);