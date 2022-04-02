const fibonacci = function(member) {

    if (member <=0){
        return "OOPS";
    }

    fibon = [1, 1]; 

    for (let i=2; i<=member-1; i++){
        fibon[i] = (fibon[i-1]+fibon[i-2]);
    }

    return fibon[member-1];

};

// Do not edit below this line
module.exports = fibonacci;
