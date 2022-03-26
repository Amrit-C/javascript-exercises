const leapYears = function(year) {

    if ((year<=400) && (year%4==0)){ //years less than (and including) 400. 
        return true;
    }

    if (((year >= 400) && (year%400 === 0)) && ((((year%400==0)&&(year%100==0)))||(year%4==0))){ // years greater than 400, for centuries divisible by 400.
        return true;
    }

    if ((year >= 400)&&(year%4==0)&&(year%100 != 0)){ //for years greater than 400, non-centuries. 
       return true; 
    }

    return false; 

};

// Do not edit below this line
module.exports = leapYears;
