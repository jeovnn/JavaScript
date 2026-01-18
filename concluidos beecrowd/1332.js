let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift())
let one = ['o','n','e']
let two = ['t','w','o']
let three = ['t','h','r','e','e']

for(let i = 0; i < n; i++){
    palavra = lines[i].trim().split('')
    let countone = 0
    let counttwo = 0
    let countthree = 0
    if(palavra.length === 3){
        for(let w =0; w < 3; w++){
            if(palavra[w]=== one[w]){
                countone++
            } 
            if (palavra[w]=== two[w]){
                counttwo++
            }
        }    
    }
    if(palavra.length === 5){
        for(let k= 0; k < 5; k++){
            if(palavra[k]=== three[k]){
                countthree++
            }
        }
    }
if(countone >= 2){
    console.log('1')
} else if (counttwo >= 2){
    console.log('2')
} else if (countthree >= 4){
    console.log('3')
}
}