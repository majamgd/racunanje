
const pasus1= document.getElementById("pera");

// function getBrojSatiDnevno() {
//     return document.getElementById("unos").value;
// }

function izracunajDane() {
    satiEkspert=10000;
    satiPocetnik=2000;
    // brojSatiDnevno=getBrojSatiDnevno();
    brojSatiDnevno=document.getElementById("unos").value;

    brojDanaZaPocetnika = satiPocetnik / brojSatiDnevno;
    console.log("Broj dana ucenja do pocetnika je:",brojDanaZaPocetnika);

    brojGodinaDoPocetnika=brojDanaZaPocetnika / 365;
    console.log("Broj godina ucenja do pocetnika je:",brojGodinaDoPocetnika.toFixed(2));

    //pasus1.innerText="Broj dana ....";

    daniPrakseDaPocetnikPostaneExpert=(satiEkspert-satiPocetnik)/8;
    ukupanBrojDanaDoEksperta = brojDanaZaPocetnika + daniPrakseDaPocetnikPostaneExpert;
    ukupanBrojGodinaDoEksperta=ukupanBrojDanaDoEksperta / 365;
    console.log("Broj dana ucenja do eksperta je:",ukupanBrojDanaDoEksperta);
    console.log("Broj godina ucenja do eksperta je:",ukupanBrojGodinaDoEksperta.toFixed(2));

    ///////////////
    var celihGodina = Math.floor(ukupanBrojDanaDoEksperta/365);
    var ostatakDanaGodina = ukupanBrojDanaDoEksperta - (celihGodina * 365);
    var brojMeseci = Math.floor(ostatakDanaGodina / 30);
    var dani = ostatakDanaGodina - (brojMeseci * 30);
    // var message = `Potrebno je ${celihGodina} godina, ${brojMeseci} meseci i ${dani} dana da se dodje do eksperta`; // Template string
    // var message = 'Potrebno je ' + celihGodina + ' godina, ' + brojMeseci + ' meseci i' ;
    // pasus1.innerText = message;

    pasus1.innerText = `Potrebno je ${celihGodina} godina, ${brojMeseci} meseci i ${dani} dana da se dodje do eksperta`; // template string (ES6)
}

const dugme = document.getElementById("klikni");
//dugme.onclick = izracunajDane
dugme.addEventListener("click", izracunajDane);






