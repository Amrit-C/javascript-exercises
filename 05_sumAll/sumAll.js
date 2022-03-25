const sumAll = function(a,b) {

    if ((typeof(a) !== 'number') || (typeof(b) !== 'number') || (a<0) || (b<0)) {
        return 'ERROR';
    }

    if (a === b){
        return a;
    }
    
    (a>b)? iteration = a-b : iteration = b-a; 
    (a>b)? initalSum = b: initalSum = a;

    let continuousSum = initalSum; 

    for (let i=1; i<=iteration; i++){
        continuousSum = continuousSum + (initalSum+i)
    }

    return continuousSum;


};

// Do not edit below this line
module.exports = sumAll;
