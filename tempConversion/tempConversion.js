const ftoc = function(a) {
  let conversionResult;
  conversionResult = (a - 32) * (5/9);
  
  if (conversionResult != 0 && conversionResult % 1 != 0) {
    conversionResult = conversionResult.toFixed(1);
    conversionResult = conversionResult * 1;
    return conversionResult;
  } else {
    return conversionResult;
  }
}

const ctof = function(a) {
  let conversionResult;
  conversionResult = (a * 9/5) + 32;

  if (conversionResult != 0 && conversionResult % 1 != 0) {
    conversionResult = conversionResult.toFixed(1);
    conversionResult = conversionResult * 1;
    return conversionResult;
  } else {
    return conversionResult;
  }
}

module.exports = {
  ftoc,
  ctof
}
