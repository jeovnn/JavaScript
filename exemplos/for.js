
//primeiro for
let vList = [ "banana" , "maca", "pera", "laranja", "abacate"]

for (let i = 0; i < 5; i++) {
    console.log(vList[i])
}

//segundo for 
for (const key in vList) {
    console.log(key)
}

//terceiro for
for (const iterator of vList) {
    console.log(iterator)
}



