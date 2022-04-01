const add = function(a,b) {
	return a+b; 
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	const sumOfArray = array.reduce((firstElement, nextElement) =>
  firstElement + nextElement, 0);

return sumOfArray;
}

const multiply = function(array) {
  const multipliedArray = array.reduce((firstElement, nextElement) =>
  firstElement * nextElement, 1);
  
  return multipliedArray;
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(a) {

if (a==0){
  return 1;
}

let result = a;  

while (a > 1){
  a--;
  result *=  a;
}

return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
