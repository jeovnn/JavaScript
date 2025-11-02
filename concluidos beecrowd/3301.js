let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [h,z,l] = lines[0].split(' ').map(Number)

if (z > h && z < l || z < h && z > l) {
    console.log('zezinho')
} else if (h > z && h < l || h < z && h > l){
    console.log('huguinho')
} else if (l > z && l < h || l < z && l > h){
    console.log('luisinho')
}

