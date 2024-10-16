let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');



for (let i = 0; i < lines.length; i++) {
    
    let [a,b] = lines[i].split(' ').map(Number)
    
    if(a === 0 || b === 0) {
        break;
    }

    if (a > 0 && b > 0) {
        console.log("primeiro")
    } else if (a < 0 && b < 0) {
        console.log("terceiro")
    } else if (a > 0 && b < 0 ) {
        console.log("quarto")
    } else if (a < 0 && b > 0) {
        console.log("segundo")
    } 
    
}
