satiUcenjaDnevno = "bbb"
if(typeof satiUcenjaDnevno == "number"&& satiUcenjaDnevno>0){
satiDoEksperta = 1000
danaDoEksperta = satiDoEksperta / satiUcenjaDnevno
console.log(`Potrebno je ${danaDoEksperta} dana učenja da bi postao programer ekspert.`)
}else{
    console.log("Unesite broj veci od nule,ne tekst.")
}
