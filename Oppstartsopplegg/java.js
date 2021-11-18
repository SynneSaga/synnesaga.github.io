document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "dark");
});

var btn = document.querySelector(".lysmodus");
btn.onclick = function() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var switchToTheme = currentTheme === "dark" ? "light" : "dark"
  document.documentElement.setAttribute("data-theme", switchToTheme);
  if (currentTheme === "light") {
    document.getElementById("bilder").src = "Bilder/synnesvarthvitt.png";
  }
  else {
    document.getElementById("bilder").src = "Bilder/synnebilde.png";
  }
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
      document.getElementById("header").className = "stor";
      document.getElementById("klokke").className = "stor";
      document.getElementById("tilbake").className = "stor";
      document.getElementById("meny").className = "stor";
  } else {
    document.getElementById("header").className = "";
    document.getElementById("klokke").className = "";
    document.getElementById("tilbake").className = "";
    document.getElementById("meny").className = "";
  }
}


/*function farger(){
  farger(); i onload=""
    const btn = document.querySelector(".lysmodus");
    //const theme = document.querySelector("#tema-link");
    const dings = document.getElementsByClassName("bakfar");
    /*btn.addEventListener("click", function() {
      if (theme.getAttribute("href") == "stil.css") {
        theme.href = "dark-stil.css";
      } else {
        theme.href = "stil.css";
      }
  });*/
  /*btn.addEventListener("click", function() {
    //while (dings[0]){
      //dings[0].classList.remove("bakfar");
      dings[0].classList.toggle("bakfar");
      dings[1].classList.toggle("bakfar");
      dings[2].classList.toggle("bakfar");
      dings[3].classList.toggle("bakfar");

      console.log("tester")
      console.log(dings)
    //}
  

});
}
*/
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("klokke").innerHTML =  h + ":" + m + ":" + s;
    document.getElementById("klokke").innerText = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

//Zoom knapper til bilde - - - - - - - - - - - - - - - - - - - - - - - - - - -
let bilde = document.getElementById("bilder");
//bilde.src = endrer stien til bildet
//bilde.alt = endre alt teksten
//bilde.width = endrer bredde

let zoominn = document.getElementById("zoominnknapp");

zoominn.addEventListener("click", zinn);
function zinn() {
  console.log("Yess")
  //bilde.width = 350; Endre hvis det ligger som style="" i bildet
  //bilde.style.width = "350px"; er i stilark
  bilde.width = bilde.width + 50;
}

let zoomut = document.getElementById("zoomutknapp");
zoomut.addEventListener("click", zut);

function zut() {
  console.log("thingy");
  if (bilde.width < 100) {
    bilde.width = 100;
  }
  else {
  bilde.width = bilde.width - 50;
  }
}


//Se hvilket språk som er i bruk - - - - - - - - - - - - - - - - - - - - - - 
document.getElementById("lang").innerHTML = ("Language: " + navigator.language);

if (navigator.language == "nb.NO") {
    console.log("Nordmann");
    document.getElementById("språk").innerHTML = ("Nordmann, jaha");
}
else if (navigator.language == "en-US") {
  console.log("ingles");
  document.getElementById("språk").innerHTML = ("Amerikanere...");
  //document.getElementById("#").className = "#";
}
else if (navigator.language == "en-GB") {
  //console.log("ingles but better");
  document.getElementById("språk").innerHTML = ("It's chewsday, innit?");
  //document.getElementById("#").className = "#";
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var namn = prompt("What's your name, kiddo?");
//console.log("Hei, " + namn);
if (namn == "") {
  document.getElementById("navnet").innerHTML = ("Velko- nei vel :/")
}

else {document.getElementById("navnet").innerHTML = ("Velkommen, " + namn + "!")}

//var info = { navn: namn, sprog: lang, time: tid};
//var tid = h + ":" + m + ":" + s;

//parseInt og parseFloat - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
/*console.log("Ting er: " + namn);
console.log(`Ting er: ${namn}`);
console.log(parseInt("1111",2)); //Binært system
console.log(parseFloat("0.1"));

console.log(parseInt("40 kr")); //Vil se vekk ifra kr siden ikke tall.
console.log(Number("40 kr")); //Vil logge NaN, not a number, pga kr delen.
*/

//Boolean, True eller False - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let amTired = true;
if (amTired) { //kan være amTired == true, betyr samme greiene
  namn = "Saga";
  //console.log("Jeg også");
}
else {
  namn = namn; //egt unødvendig
}

//Tabeller og arrays - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let arrayNamn = ["Saga", "Synne","SynneSaga"];
//console.log(arrayNamn);

//Løkker - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

for (let hvertElement of arrayNamn) {
  //document.getElementById("utskriftHvert").innerHTML = "<li>" + hvertElement + "</li>"; siden det er kun = vil den da skrive over første navnet og andre navnet, og du vil kun få SynneSaga.
  document.getElementById("utskriftHvert").innerHTML += "<li>" + hvertElement + "</li>"; //Denne virker hvis du lager en div med id="utskrift" og tar document.getElementById("utskrift").innerHTML = arrayNamn;
  //document.getElementById("utskriftHvert").innerHTML = document.getElementById("utskriftHvert").innerHTML + "<li>" + hvertElement + "</li>"; Denne virker også, men er knotete.
  console.log();
}

//Disse to løkkene gjør akkuratt det samme^^vv
for (let i = 0; i < arrayNamn.length; i++) {
  //console.log(arrayNamn[i]);
}

//Likhetstegn
//pris = pris * 5; er samme som
//pris *= 5;
//Du tar operasjonen og setter før likhetstegnet, så kan du fjerne andre variabelen. Ting = Ting + 5; blir da Ting += 5;

//lag ul med id="utskriftHvert"
//<li>


/*
let question = "Hva er dette?";
for (let bokstav of question) {
  //console.log(bokstav);

  if(bokstav == "?") {
    //console.log("Spørsmål!");
  }
  else {
    //console.log("bokstav");
  }
}

const tallPi = Math.PI; //mattebibliotek!
console.log(tallPi)

let desi = 6.9191
console.log(Math.round(desi)); //runder av vanlig, får 7
console.log(Math.floor(desi)); //runder ned, får 6
console.log(Math.ceil(desi));  //runder opp, får 7
*/
//Lagre objekt
let variabelNavn = {
    navn: "Saga",
    yrke: "elev",
    etternavn: "Synne",
    alder: 39
};

//console.log(variabelNavn.yrke);



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


/*Oppgaver */

//Lag email oppg. 3.4 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function lagEmail() {
  var fornavn = document.getElementById("fornavnInput").value;
  var etternavn = document.getElementById("etternavnInput").value;
  var domene = document.getElementById("domeneInput").value;
  
  if (domene.includes("@") == true){
    document.getElementById("mailOutput").innerText = "Ikke inkluder @ i domenenavn :(";
  }

  else if (domene == ""){
    document.getElementById("mailOutput").innerText = "Domene kan ikke stå tomt";
  }

  else if (etternavn == ""){
    document.getElementById("mailOutput").innerText = "Etternavn kan ikke stå tomt";
  }

  else if (fornavn == ""){
    document.getElementById("mailOutput").innerText = "Fornavn kan ikke stå tomt";
  }

  else {
  var helMail = (fornavn + "." + etternavn + "@" + domene + ".no");
  
  document.getElementById("mailOutput").innerHTML = helMail;
  document.getElementById("mailOutput").innerText = helMail;
  //console.log(helMail);
  }
}


//gatenavn oppg. 3.6.2

var gate = 'Kongens gate ';
var husnr = 432;
var oppgang = " b";
var adresse = gate + husnr + oppgang;
//console.log("Adressen er " + adresse);
//console.log("Gaten er " + gate + ", husnummeret er " + husnr + ", oppgang " + oppgang);
//print(adresse);

//3.8.1

function finnDiff() {
  let stedsnavnEn = document.getElementById("stedsnavnEn").value;
  let stedsnavnTo = document.getElementById("stedsnavnTo").value;
  
  let lengdeStedEn = stedsnavnEn.length;
  let lengdeStedTo = stedsnavnTo.length;
  
  let diffStedsnavn = Math.abs(lengdeStedEn-lengdeStedTo); 
  //console.log(diffStedsnavn);
  document.getElementById("diffUtskrift").innerHTML = ("Mengden bokstaver forskjell: " + diffStedsnavn);
}

function kalkuler() {
  let kalkTallEn = document.getElementById("kalkTallEn").value;
  let kalkOperasjon = document.getElementById("kalkOperasjon").value;
  let kalkTallTo = document.getElementById("kalkTallTo").value;

  if (kalkOperasjon == "+") {
    let utregnet = parseInt(kalkTallEn) + parseInt(kalkTallTo);
    document.getElementById("svaret").innerHTML = (kalkTallEn + kalkOperasjon + kalkTallTo + " er " + utregnet);
  }

  else if (kalkOperasjon == "-") {
    let utregnet = parseInt(kalkTallEn) - parseInt(kalkTallTo);
    document.getElementById("svaret").innerHTML = (kalkTallEn + kalkOperasjon + kalkTallTo + " er " + utregnet);
  }

  else if (kalkOperasjon == "*") {
    let utregnet = parseInt(kalkTallEn) * parseInt(kalkTallTo);
    document.getElementById("svaret").innerHTML = (kalkTallEn + kalkOperasjon + kalkTallTo + " er " + utregnet);
  }

  else if (kalkOperasjon == "/") {
    let utregnet = parseInt(kalkTallEn)/parseInt(kalkTallTo);
    document.getElementById("svaret").innerHTML = (kalkTallEn + kalkOperasjon + kalkTallTo + " er " + utregnet);
  }

  else {
    console.log("hmm");
    document.getElementById("svaret").innerHTML = ("Noe er feil")
  }
  
}



function nyeBilder() {
let randBildeArray = ["Anderstale12", "synnebilde", "synnesvarthvitt"]; //Husk "" for hvert bilde
//document.getElementById("bildeVis").src = "bilder/tt.png"; for test

let verdi = Math.floor(Math.random() * 2); //randome tall fra 0 til 2

let currBilde = 0;

document.getElementById("randBilde").src = "bilder/" + randBildeArray[verdi] + ".png";

document.getElementById("bildeVis").src = "bilder/" + randBildeArray[currBilde] + ".png";

document.getElementById("endreBilde").addEventListener("click", nesteBilde); //ikke add () etter funksjonen

function nesteBilde() {
  currBilde += 1;
  //currBilde++; gjør akk samme
  if (currBilde == 3) {
    currBilde = 0;
  }
  document.getElementById("bildeVis").src = "bilder/" + randBildeArray[currBilde] + ".png";
}
}


//søkefunksjon for å søke etter en side i en side - - - - - - - - - - - - - - - - - - -
//creates a listener for when you press a key
window.onkeyup = keyup;

function fjernTekst() {
  document.getElementById("søkeboks").value = "Search here";
  document.getElementById("kalkTallEn").value = "Tall";
  document.getElementById("kalkOperasjon").value = "+,-,*,/";
  document.getElementById("kalkTallTo").value = "Tall";
}
//creates a global Javascript variable
var inputTextValue;

//$('#searchValue').text("https://duckduckgo.com/?q=" + inputTextValue); for nettside

function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  inputTextValue = e.target.value;

  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  if (e.keyCode == 13) {
    if (document.getElementById("søkeboks").value.length == 0) {
      console.log("Empty")
    }
    else if (document.getElementById("søkeboks") === document.activeElement) {
      window.location = "sider/search.html";//"http://synnesaga.github.io/sider/search.html"; + inputTextValue;
      var ting = document.getElementById("søkeboks");
      console.log(ting);
      document.getElementById("dispSøk").innerHTML = document.getElementById("søkeboks");
  }
  }
}

//input har id="searchtxt", div har id searchvalue or not ig



//Gjettespill - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function gjetteSpill() {
var gjetteTall = Math.floor(Math.random() * 11);
var tallGjettet = document.getElementById("gjetteInput").value;
/*console.log(gjetteTall);
console.log(tallGjettet);*/
if ((tallGjettet < 0) || (tallGjettet > 10)) {
  document.getElementById("gjetteOutput").innerHTML = ("Feil, les oppgaven nøye");
  console.log("Feil, les oppgaven nøye");
}

else if (tallGjettet == gjetteTall) {
  document.getElementById("gjetteOutput").innerHTML = "Riktig!";
  console.log("Riktig"); 
}
else {
  document.getElementById("gjetteOutput").innerHTML = ("Nei, riktig tall er " + gjetteTall);
}

}



//Førerkort shenanigans
function kjoreKort() {
  let kjoreAlder = document.getElementById("kjoreAlder").value;
  if (kjoreAlder < 16){
    document.getElementById("kjoreOutput").innerHTML = "Sykkel og sparkehjul for deg."
  }
  else if (kjoreAlder < 18){
    document.getElementById("kjoreOutput").innerHTML = "Moped"
  }
  else if (kjoreAlder < 21){
    document.getElementById("kjoreOutput").innerHTML = "Moped & bil!"
  }
  else if (kjoreAlder < 24){
    document.getElementById("kjoreOutput").innerHTML = "Moped, bil & lastebil"
  }
  else if (kjoreAlder < 75){
    document.getElementById("kjoreOutput").innerHTML = "Moped, bil, lastebil & buss"
  }
  else if (kjoreAlder < 80){
    document.getElementById("kjoreOutput").innerHTML = "Husk å fornye førerkortet"
  }
  else if (kjoreAlder >= 80){
    document.getElementById("kjoreOutput").innerHTML = "Husk helseattest"
  }
}


//Definisjonen av getRandomIntInclusive, er viktig å ha med. 
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function fargeVelger() {
  var tallR = getRandomIntInclusive(0,255);
  var tallG = getRandomIntInclusive(0,255);
  var tallB = getRandomIntInclusive(0,255);
  if ( ((tallR >= 150) && (tallG >= 150)) || ((tallG >= 150) && (tallB >= 150)) || ((tallR >= 150) && (tallB >= 150))) {
    document.getElementById("fargeUtskrift").style.color = "black";
  }

  else if ((tallR >= 200)||(tallG >= 200)){
    document.getElementById("fargeUtskrift").style.color = "black";
  }

  else {
    document.getElementById("fargeUtskrift").style.color = "rgb(212, 212, 212)";
  }
  var tallString = "rgb(" + tallR + "," + tallG + "," + tallB + ")";
  return tallString;
}

function fargeEndrer() {
  var fargeEndret = fargeVelger();
  document.getElementById("fargeUtskrift").style.backgroundColor = fargeEndret;
  console.log("trykk");
  console.log(fargeEndret);
}




function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

/*function kaosKnapp() {
  //document.getElementById("header").style.backgroundColor = fargeVelger();
  //document.getElementById("meny").style.backgroundColor = fargeVelger();
  //document.getElementById("fotområde").style.backgroundColor = fargeVelger();
  //let s = today.getSeconds();
  //s = checkTime(s);
  //setTimeout(kaosKnapp, 1000);

  let lydArray = ["vineboom", "Bababooey", "whatthe"]; //Husk "" for hvert bilde
//document.getElementById("bildeVis").src = "bilder/tt.png"; for test
  let verdi = Math.floor(Math.random() * 3); //randome tall fra 0 til 2
  let lyd = "Bilder/" + lydArray[verdi] + ".mp3";
  const audio = new Audio(lyd);
  audio.play();
  var r = document.querySelector(':root');
  r.style.setProperty('--headerfarge', fargeVelger());
  r.style.setProperty('--bodyfarge', fargeVelger());
  r.style.setProperty('--bakfar', fargeVelger());
  r.style.setProperty('--tekstfarge', fargeVelger());
  r.style.setProperty('--headertekst', fargeVelger());

  
}*/

/*(function loop() {
  var rand = Math.round(Math.random() * (3000 - 500)) + 500;
  document.getElementById('kaosAv').addEventListener("click",  function() {
    rand = 0;
    console.log("ahdfk")
  }
  ) 
    setTimeout(function() {
      kaosKnapp();
      loop(); 
  }, rand);
}());*/


/*avknapp*/


/*function kaosKnapp() {
  let i=0;
  let s = today.getSeconds();
  s = checkTime(s);
  setTimeout(startTime, 1000);
while (i<1000) {
  Kaos();
  i++;
}

}*/


document.getElementById("kryptKnapp").addEventListener("click", function() {
  const kryptBokstav = document.getElementById("kryptStrInput").value;
  const kryptTall = document.getElementById("kryptIntInput").value;
  var bArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"æ","ø","å"];
  //let plass = bArray.indexOf(kryptBokstav); 
  var nyttArray = Array.from(kryptBokstav.toLowerCase());

  /*var sorter = bArray.filter(element => nyttArray.includes(element)); //Nytt array med samme verdier som nyttArray

  let Nyplass = bArray.indexOf(kryptBokstav);
  console.log(Nyplass)*/

  //console.log(nyBokstav);
  //console.log(bArray[nyBokstav]);
  
  let kryptOut = document.getElementById("kryptOutput");
  kryptOut.innerHTML = "";
    for (let i = 0; i < nyttArray.length; i++) {
      var tall = (bArray.indexOf(nyttArray[i]) + parseInt(kryptTall));
      if (tall >= bArray.length) {
        tall = parseInt(tall) - bArray.length;
        let helKrypt = bArray[tall] ;
        kryptOut.innerHTML += helKrypt;
      }
      else {
        let helKrypt = bArray[tall] ;
        kryptOut.innerHTML += helKrypt;
      }
    
    //document.getElementById("kryptOutput").innerHTML = helKrypt;

    //var gammeltTall = (parseInt(tall) - parseInt(kryptTall)); Reversere kryptering
    //console.log("Gammel bokstav: " + bArray[gammeltTall])
  }





/*var helKrypt = []; // create array to hold friend names

for(var i=0; i < nyttArray.length; i++){    
    helKrypt.push(nyttArray[i]); // add friend's name to the array
}

console.log(helKrypt); */


})








//Switchtest

/*function kjoreKortTo() {
  //console.log("haha")
  var kjoreAlder = document.getElementById("kjoreAlder");
  var kjoreOutput = document.getElementById("kjoreOutput");
  switch(parseInt(kjoreAlder)) {
    case 0:
      kjoreOutput.innerHTML = "Impossible...";
      console.log("gahh")
      break;

    

    default:
    console.log(`yeet`);
  }
}
*/

