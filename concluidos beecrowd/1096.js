let Jstart = 7;

for (let i = 1; i <= 9; i+=2) {
    for (let j = Jstart; j > Jstart - 3; j--) {
        console.log(`I=${i} J=${j}`)
    }
    Jstart += 2
}