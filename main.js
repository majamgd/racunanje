
const pasus1= document.getElementById("pera")

function izracunajDane() {
    satiEkspert=10000
    satiPocetnik=2000
    brojSatiDnevno=document.getElementById("unos").value
    brojDana = satiPocetnik / brojSatiDnevno
    //console.log(brojDana)
    console.log("Broj dana ucenja do pocetnika je:",brojDana)
    brojGodinaDoPocetnika=brojDana / 365
    console.log("Broj godina ucenja do pocetnika je:",brojGodinaDoPocetnika.toFixed(2))
    pasus1.innerText="Broj dana ...."
    satiPraksa=(satiEkspert-satiPocetnik)/8
    ukupanBrojDana = brojDana + satiPraksa
    ukupanBrojGodinaDoEksperta=ukupanBrojDana / 365
    console.log("Broj dana ucenja do eksperta je:",ukupanBrojDana)
    console.log("Broj godina ucenja do eksperta je:",ukupanBrojGodinaDoEksperta.toFixed(2))
    
}

const dugme = document.getElementById("klikni")
console.log(dugme)
//dugme.onclick = izracunajDane
dugme.addEventListener("click", izracunajDane)
