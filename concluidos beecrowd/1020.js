let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let dias = +(lines.shift());

let anos = Math.floor(dias/365);
dias %= 365;
let meses = Math.floor(dias/30);
dias %= 30

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);
