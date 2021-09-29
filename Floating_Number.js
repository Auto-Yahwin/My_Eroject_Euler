//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 

function decimalCorrector(num, decimalPoint){
  let corrected=num.toFixed(decimalPoint);
  return corrected;
}
console.log(decimalCorrector(124.3443446635, 6));

/* 
  insert any decimal number of your choice in the first 
part of the bracket and the number of decimal places you 
are correcting to in the second part
Then click the colored square place icon
*/
  
/*
  124.3443446635 will correct to 124.344345 (6 decimal place)
  */