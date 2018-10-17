const ukupnoDana = 10000
const godina = Math.floor(ukupnoDana / 365)
let ostaloDana = ukupnoDana % 365
const meseci = Math.floor(ostaloDana / 30)
ostaloDana = ostaloDana % 30

const poruka = `${ukupnoDana} dana se sastoji od ${godina} godina, ${meseci} meseci i ${ostaloDana} dana.`
console.log(poruka)
