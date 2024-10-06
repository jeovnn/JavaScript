let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (parseInt(lines[i]) === 2002) {
        console.log('Acesso Permitido');
        break;
    } else {
        console.log('Senha Invalida');
    }
}