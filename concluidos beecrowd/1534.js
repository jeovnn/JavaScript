let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

for (var k = 0; k < lines.length; k++) {
    var N = parseInt(lines[k].trim());
    if (isNaN(N)) continue;

    var matrix = [];
    for (var i = 0; i < N; i++) {
        matrix[i] = new Array(N).fill(3);
    }

    for (var i = 0; i < N; i++) {
        matrix[i][i] = 1;                 
        matrix[i][N - i - 1] = 2;         
    }

    for (var i = 0; i < N; i++) {
        console.log(matrix[i].join(''));
    }
}