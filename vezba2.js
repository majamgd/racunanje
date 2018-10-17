satiUcenjaDnevno = prompt('Koliko časova dnevno u proseku učiš programiranje?')

satiDoPocetnika = 2000
satiDoEksperta = 10000

danaDoPocetnika = satiDoPocetnika / satiUcenjaDnevno
danaDoEksperta = satiDoEksperta / satiUcenjaDnevno

console.log(`Potrebno je ${danaDoPocetnika} dana učenja da bi postao početnik.`)
console.log(`Potrebno je ${danaDoEksperta} dana učenja da bi postao ekspert.`)
