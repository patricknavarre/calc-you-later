const calculate = require('./calculate-back-end.js');

const num1 = process.argv[2];
const operation = process.argv[3];
const num2 = process.argv[4];

let result = calculate (num1, num2, operation);
console.log(result);

