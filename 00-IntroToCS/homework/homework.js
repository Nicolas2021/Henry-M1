function BinarioADecimal(num) {
  // tu codigo aca
  const arrayOfDigits = Array.from(String(num), Number);
  
  return arrayOfDigits;
}

function DecimalABinario(num) {
  // tu codigo aca
}

console.log(BinarioADecimal());
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}