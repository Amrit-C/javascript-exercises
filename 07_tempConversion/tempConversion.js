const ftoc = function(temp) {

  const degrees = (temp-32)*5/9;

  const roundedDegrees = Math.round(degrees * 10)/10; 
  
  return roundedDegrees;

};

const ctof = function(degrees) {

  const temp = (degrees*9/5) + 32; 

  const roundedTemp = Math.round(temp *10)/10; 

  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
