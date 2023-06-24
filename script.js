function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0'; // Special case for decimal 0
  }
  
  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  
  return binary;
}

// Example usage
console.log(decimalToBinary(7)); // Output: 111
console.log(decimalToBinary(10)); // Output: 1010
console.log(decimalToBinary(33)); // Output: 100001

}
module.exports = threeSum;