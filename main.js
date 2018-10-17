
const porukaEkspert = document.getElementById("porukaEkspert");
const porukaPocetnik = document.getElementById("porukaPocetnik");



function preuzimanjeBrojaSatiDnevno() {
   return document.getElementById("unos").value;
 }

function ispisiPorukuUPasus(pasus,poruka) {
    pasus.innerText = poruka;
}

function izracunajDane() {
    satiEkspert = 10000;
    satiPocetnik = 2000;
    brojSatiDnevno=preuzimanjeBrojaSatiDnevno();
    //brojSatiDnevno = document.getElementById("unos").value;

    brojDanaZaPocetnika = satiPocetnik / brojSatiDnevno;
    console.log("Broj dana ucenja do pocetnika je:",brojDanaZaPocetnika);

    brojGodinaDoPocetnika=brojDanaZaPocetnika / 365;
    console.log("Broj godina ucenja do pocetnika je:",brojGodinaDoPocetnika.toFixed(2));
    ////////////////////////////////
    var celihGodinaDoPocetnika = Math.floor(brojDanaZaPocetnika/365);
    var ostatakDanaGodinaDoPocetnika = brojDanaZaPocetnika - (celihGodinaDoPocetnika * 365);
    var brojMeseciZaPocetnika = Math.floor(ostatakDanaGodinaDoPocetnika/ 30);
    var daniDoPocetnika = ostatakDanaGodinaDoPocetnika - (brojMeseciZaPocetnika * 30);



    // TODO
   // porukaPocetnik.innerText="Potrebno je: "+ celihGodinaDoPocetnika + "godina, " + brojMeseciZaPocetnika + " meseci i " + daniDoPocetnika + " dana da se dodje do pocetnika.";
   ispisiPorukuUPasus(porukaPocetnik,"Potrebno je: "+ celihGodinaDoPocetnika + "godina, " + brojMeseciZaPocetnika + " meseci i " + daniDoPocetnika + " dana da se dodje do pocetnika.");

    daniPrakseDaPocetnikPostaneExpert = (satiEkspert-satiPocetnik)/8;
    ukupanBrojDanaDoEksperta = brojDanaZaPocetnika + daniPrakseDaPocetnikPostaneExpert;
    ukupanBrojGodinaDoEksperta = ukupanBrojDanaDoEksperta / 365;
    console.log("Broj dana ucenja do eksperta je:",ukupanBrojDanaDoEksperta);
    console.log("Broj godina ucenja do eksperta je:",ukupanBrojGodinaDoEksperta.toFixed(2));

    ///////////////
    var celihGodina = Math.floor(ukupanBrojDanaDoEksperta/365);
    var ostatakDanaGodina = ukupanBrojDanaDoEksperta - (celihGodina * 365);
    var brojMeseci = Math.floor(ostatakDanaGodina / 30);
    var dani = ostatakDanaGodina - (brojMeseci * 30);
    // var message = `Potrebno je ${celihGodina} godina, ${brojMeseci} meseci i ${dani} dana da se dodje do eksperta`; // Template string
    // var message = 'Potrebno je ' + celihGodina + ' godina, ' + brojMeseci + ' meseci i' ;
    // porukaEkspert.innerText = message;

    
     // TODO
    // porukaEkspert.innerText = `Potrebno je: ${celihGodina} godina, ${brojMeseci} meseci i ${dani} dana da se dodje do eksperta.`; // template string (ES6)
    ispisiPorukuUPasus(porukaEkspert,`Potrebno je: ${celihGodina} godina, ${brojMeseci} meseci i ${dani} dana da se dodje do eksperta.`);
}

const dugme = document.getElementById("klikni");
//dugme.onclick = izracunajDane
dugme.addEventListener("click", izracunajDane);






