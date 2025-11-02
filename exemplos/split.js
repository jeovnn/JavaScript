//O método .split() é uma função de strings, não de arrays.

// array com uma string
let array = ["2 12 133 21"]
let arraynovo = array[0].split(' ').map(Number)
console.log(arraynovo)

// separar palavras
let frase = "Aprender JavaScript é divertido";
let palavras = frase.split(" ");
console.log(palavras);
//[ 'Aprender', 'JavaScript', 'é', 'divertido' ]

//por virgula 
let lista = "maçã,banana,laranja,uva";
let frutas = lista.split(",");
console.log(frutas);
//[ 'maçã', 'banana', 'laranja', 'uva' ]

//por caractere
let palavra = "hello";
let letras = palavra.split("");
console.log(letras);
// [ 'h', 'e', 'l', 'l', 'o' ]

// Limitando o número de divisões
let texto = "um dois três quatro cinco";
let partes = texto.split(" ", 3);
console.log(partes);
// [ 'um', 'dois', 'três' ]

// Separar por letras específicas
let frase2 = "banana";
let resultado = frase2.split("n");
console.log(resultado);
// [ 'ba', 'a', 'a' ]