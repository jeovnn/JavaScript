let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

for (let i = 0; i < lines.length; i++){

    let entrada = lines[i].trim()
    if (entrada === '') continue
    

    if (entrada[2] === 'L'){
        console.log('Esse eh o meu lugar')
    } else {
        console.log('Oi, Leonard')
    }

}