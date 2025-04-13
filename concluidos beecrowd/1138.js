let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let count = 0
let array = []
let arrayquebrado = []
let count0 = 0, count1 = 0, count2 = 0, count3 = 0, count4 = 0,
    count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;


while (lines[count] !== '0 0'){
    let [a,b] = lines[count].split(' ').map(Number)
    
    for (let i = a; i <= b; i++){
        array.push(i)
        arrayquebrado = array.map(num => num.toString().split("")).flat()    
    }

    for (let j = 0; j < arrayquebrado.length; j++){
        if (arrayquebrado[j] === '0') {
            count0 ++
        } else if (arrayquebrado[j] === '1'){
            count1++
        }else if (arrayquebrado[j] === '2'){
            count2++
        }else if (arrayquebrado[j] === '3'){
            count3++
        }else if (arrayquebrado[j] === '4'){
            count4++
        }else if (arrayquebrado[j] === '5'){
            count5++
        }else if (arrayquebrado[j] === '6'){
            count6++
        }else if (arrayquebrado[j] === '7'){
            count7++
        }else if (arrayquebrado[j] === '8'){
            count8++
        }else if (arrayquebrado[j] === '9'){
            count9++
        }
            
        }
    
    array = []
    count++
    console.log(count0,count1,count2,count3,count4,count5,count6,count7,count8,count9)
    count0 = 0, count1 = 0, count2 = 0, count3 = 0, count4 = 0,
    count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;
}