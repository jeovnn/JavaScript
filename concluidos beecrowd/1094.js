let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0]);
let totalcobaias = 0;
let totalcoelhos = 0;
let totalratos = 0;
let totalsapos = 0;


for (let i = 1; i <= n; i++) {
    let [quantidade,tipo] = lines[i].split(' ');
    quantidade = parseInt(quantidade)
    totalcobaias += quantidade;

    if (tipo === "C") {
        totalcoelhos += quantidade;
    } else if (tipo === "R") {
        totalratos += quantidade;
    } else if (tipo === "S"){
        totalsapos += quantidade
    }
}

console.log(`Total: ${totalcobaias} cobaias`);
console.log(`Total de coelhos: ${totalcoelhos}`);
console.log(`Total de ratos: ${totalratos}`);
console.log(`Total de sapos: ${totalsapos}`);
console.log(`Percentual de coelhos: ${(totalcoelhos / totalcobaias * 100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${(totalratos / totalcobaias * 100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${(totalsapos / totalcobaias * 100).toFixed(2)} %`);
