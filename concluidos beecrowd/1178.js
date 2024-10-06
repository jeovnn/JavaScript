let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let value = +lines.shift();
for (i = 0; i <= 99; i++) {
  console.log(`N[${i}] = ${value.toLocaleString('en-US', {minimumFractionDigits: 4, useGrouping: false})}`);
  value = value / 2;
}
