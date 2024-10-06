let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let num = (parseInt(lines)); 
let numerosaida = 1

for (let i = 0; i < num; i++) {
    console.log(`${numerosaida} ${numerosaida +1 } ${numerosaida + 2} PUM`);
    numerosaida += 4
}


//console.log(num)