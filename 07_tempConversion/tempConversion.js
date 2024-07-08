const convertToCelsius = function(num1) {
  const FAREN = (num1-32)*5/9;
  return +FAREN.toFixed(1);
};

const convertToFahrenheit = function(num2) {
  const CELC = (num2*9/5)+32;
  return +CELC.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
