function mult (a,b) {
    return a * b; 
}

function add (a,b) {
    return (a + b);
}

function calcular (a,b,fn) {
    return fn(a,b)
}

console.log(calcular(1,3, mult))


//outra

const divd  = function (a,b) {return a/b}

console.log(calcular(10,5, (i,j) => (i-j))) //arrow function 
console.log(calcular(10,5,divd))

