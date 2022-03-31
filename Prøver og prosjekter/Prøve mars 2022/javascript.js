let farge = [
    {"bakgrunnsfarge":"#000000","color":"#ffffff","varselbakgrunn":"#ff0000","varselcolor":"#ffff00"},
    {"bakgrunnsfarge":"#ffffff","color":"#000000","varselbakgrunn":"#ffff00","varselcolor":"#ff0000"}
]

let temaLager = JSON.parse(localStorage.getItem("temaObjekt")) || farge;
localStorage.setItem("temaObjekt", JSON.stringify(temaLager))

var boks = document.getElementById("boks");
var temaVelger = document.getElementById("temaVelger"); 
var varsel = document.getElementById("varsel");

//Endrer farger ved endring av selectedindex
function riktigeFarger() {
    var i = temaVelger.selectedIndex;
    document.getElementById("nyTekst").value = farge[i].color;
    document.getElementById("nyBakgrunn").value = farge[i].bakgrunnsfarge;
    document.getElementById("nyVarselTekst").value = farge[i].varselcolor;
    document.getElementById("nyVarselBakgrunn").value = farge[i].varselbakgrunn; //setter boksene til fargene i dokumentet hvis index endres
    boks.style.backgroundColor = farge[i].bakgrunnsfarge;
    boks.style.color = farge[i].color;
    varsel.style.backgroundColor = farge[i].varselbakgrunn;
    varsel.style.color = farge[i].varselcolor; //setter bakgrunnen til fargene i boksene hvis index endres
} //fant style objects her: https://www.w3schools.com/jsref/dom_obj_style.asp


//Setter farger i dokumentet til fargene i boksene når boksene endres
document.getElementById("egneFarger").addEventListener("input", function() {
    var nyTekst = document.getElementById("nyTekst").value;
    var nyBakgrunn = document.getElementById("nyBakgrunn").value;
    var nyVarselTekst = document.getElementById("nyVarselTekst").value;
    var nyVarselBakgrunn = document.getElementById("nyVarselBakgrunn").value; //hvis disse settes utenfor fucntion vil de ikke oppdateres!!
    boks.style.color = nyTekst;
    boks.style.backgroundColor = nyBakgrunn;
    varsel.style.color = nyVarselTekst;
    varsel.style.backgroundColor = nyVarselBakgrunn;
    
    //addeventlistener change vs input for fargeinput https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
})

//Legger til fargene i nytt skjema
document.getElementById("egneFarger").addEventListener("submit", function(evt) {
    evt.preventDefault(); //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    farge.push({"bakgrunnsfarge":nyBakgrunn.value,"color":nyTekst.value,"varselbakgrunn":nyVarselBakgrunn.value,"varselcolor":nyVarselTekst.value});
    var antall = farge.length;
    var temaNavn = document.getElementById("temaNavn").value;
    if (temaNavn == null || temaNavn == ""){
        temaVelger.innerHTML += "<option value=" + "custom" + antall + ">Tema nr." + antall + "</option>";
    } //Hvis det ikke er navn lagt inn i input field, bruk standard navn
    else {temaVelger.innerHTML += "<option value=" + "custom" + antall + ">" + temaNavn + "</option>";}
    //hvis er, bruk custom navn
  
    temaVelger.value = ("custom" + antall) //Endre valgt tema til det som er lagd nylig, fikk ideen herfra: https://alvarotrigo.com/blog/javascript-select-option/

    /*let nyttTema = 
    {bakgrunnsfarge:nyBakgrunn.value,
    color:nyTekst.value,
    varselbakgrunn:nyVarselBakgrunn.value,
    varselcolor:nyVarselTekst.value};
    temaLager.push(nyttTema);
    localStorage.setItem("temaObjekt", JSON.stringify(temaLager));*/

    console.log("haa");
})

