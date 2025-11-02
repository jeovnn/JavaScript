function resolverBhascara (a,b,c){
    let raiz1 = 0
    let raiz2 = 0
    let delta = Math.sqrt(((b)**2) - 4*a*c)

    raiz1 = (-(b) + delta) / (2*a)
    raiz2 = (-(b) - delta) / (2*a)

    console.log("raiz 1:", raiz1, "raiz 2:", raiz2)
}

resolverBhascara(2,-7,3)