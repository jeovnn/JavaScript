const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    const X = parseInt(line.trim());

    if (X === 0) {
        console.log("vai ter copa!");
    } else {
        console.log("vai ter duas!");
    }
});

