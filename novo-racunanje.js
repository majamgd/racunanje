
function racunajDaneDoPocetnika(satiUcenjaDnevno) {
    const satiDoPocetnika = 2000
    return satiDoPocetnika / satiUcenjaDnevno
}

var rez = racunajDaneDoPocetnika(6)
console.log(rez)


function racunajDaneDoEksperta(satiUcenjaDnevno) {
    const satiDoEksperta = 10000
    return  satiDoEksperta / satiUcenjaDnevno
}

var rez1 = racunajDaneDoEksperta(6)
console.log(rez1)






function daniDoCilja(satiUcenjaDnevno,daniDoCilja){
    return satiDoCilja / satiUcenjaDnevno
}
const daniPocetnik = daniDoCilja(4,3000)
const daniEkspert = danaDoCilja(4,10000)
console.log(daniPocetnik,daniEkspert)









function printaj(ukupnoDana) {
    const godina = Math.floor(ukupnoDana / 365)
    let ostaloDana = ukupnoDana % 365
    const meseci = Math.floor(ostaloDana / 30)
    ostaloDana = ostaloDana % 30
    const poruka = `${ukupnoDana} dana se sastoji od ${godina} godina, ${meseci} meseci i ${ostaloDana} dana.`
    console.log(poruka)
}

//printaj(danaDoEksperta)
//printaj(danaDoPocetnika)



