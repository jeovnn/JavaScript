let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    
    if (!lines[i]) break;

   let [a,b,c] = lines[i].trim().split(" ").map(Number);
   if (a !== b && a !== c) {
    console.log("A")
   } else if (b !== a && b !== c) {
    console.log("B")
   } else if (c !== a && c !== b) {
    console.log("C")
   } else {
    console.log("*")
   }
}