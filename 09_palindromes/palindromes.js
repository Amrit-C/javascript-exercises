const palindromes = function (string) {
    
    const filteredString = Array.from(string).filter((item) => {
        // console.log(item);
        if ((item.charCodeAt() >=65 && item.charCodeAt()<=90) || (item.charCodeAt() >=97 && item.charCodeAt() <=122)){
            return true;
        } else {
            return false;
        }
    })
    
    let fIndex = 0; 
    let bIndex = filteredString.length-1;

    console.log(filteredString);

    for (let i=0; i<filteredString.length; i++){
        console.log( "F " + `${fIndex}`);
        if (filteredString[fIndex].toLowerCase()!==filteredString[bIndex].toLowerCase()){
            return false;
        }
        fIndex++;
        bIndex--;
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
