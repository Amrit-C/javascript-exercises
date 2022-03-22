const reverseString = function(word) {
let reversalArray = [];  
let reversalNum = word.length-1; 

for (let i=0; i<word.length; i++){
    reversalArray[i] = word[reversalNum]; 
    reversalNum -= 1;  
};


return reversalString = reversalArray.join('');
}
// Do not edit below this line
module.exports = reverseString;
