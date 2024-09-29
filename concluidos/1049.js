let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let a = lines.shift().trim();
let b = lines.shift().trim();
let c = lines.shift().trim();

let resultado = "";

if (a === "vertebrado") {
    if (b === "ave") {
        if (c === "carnivoro") {
            resultado = "aguia"; 
        } else if (c === "onivoro") {
            resultado = "pomba";
        }
    } else if (b === "mamifero") {
        if (c === "onivoro") {
            resultado = "homem" 
        } else if (c === "herbivoro") {
            resultado = "vaca"
        }
    }
} else if (a === "invertebrado") {
    if (b === "inseto") {
        if (c === "hematofago") {
            resultado = "pulga" 
        } else if (c === "herbivoro") {
            resultado = "lagarta"
        }
    } else if (b === "anelideo") {
        if (c === "hematofago") {
            resultado = "sanguessuga"
        } else if (c === "onivoro") {
            resultado = "minhoca"
        }
    }
}

console.log(resultado)