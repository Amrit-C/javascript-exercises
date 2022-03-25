const removeFromArray = function(...args) {

    //const parameterArray = Array.from(arguments);
    const inputArray = args[0]; 
    //const removeArray = parameterArray.slice(1);
    const filteredArray = [];  


    for (let i=0; i<inputArray.length; i++){
        if (!(args.includes(inputArray[i]))){
            filteredArray.push(inputArray[i]);
        }

    }
    console.log(filteredArray);
return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;