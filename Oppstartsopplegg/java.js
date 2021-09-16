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

function farger(){
    const btn = document.querySelector(".lysmodus");
    const theme = document.querySelector("#tema-link");
     
    btn.addEventListener("click", function() {
      if (theme.getAttribute("href") == "stil.css") {
        theme.href = "dark-stil.css";
      } else {
        theme.href = "stil.css";
      }
  });
}

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
  bilde.width = bilde.width - 50;
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
  console.log("ingles but better");
  document.getElementById("språk").innerHTML = ("It's chewsday, innit?");
  //document.getElementById("#").className = "#";
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var namn = prompt("What's your name, kiddo?");
console.log("Hei, " + namn);
if (namn == "") {
  document.getElementById("navnet").innerHTML = ("Velko- nei vel :/")
}

else {document.getElementById("navnet").innerHTML = ("Velkommen, " + namn + "!")}

//var info = { navn: namn, sprog: lang, time: tid};
//var tid = h + ":" + m + ":" + s;

//parseInt og parseFloat - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
console.log("Ting er: " + namn);
console.log(`Ting er: ${namn}`);
console.log(parseInt("1111",2)); //Binært system
console.log(parseFloat("0.1"));

console.log(parseInt("40 kr")); //Vil se vekk ifra kr siden ikke tall.
console.log(Number("40 kr")); //Vil logge NaN, not a number, pga kr delen.

//Boolean, True eller False - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let amTired = true;
if (amTired) { //kan være amTired == true, betyr samme greiene
  namn = "Saga";
  console.log("Jeg også");
}
else {
  namn = namn; //egt unødvendig
}

//Tabeller og arrays - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let arrayNamn = ["Saga", "Synne","SynneSaga"];
console.log(arrayNamn);

//Løkker - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

for (let hvertElement of arrayNamn) {
  //document.getElementById("utskriftHvert").innerHTML = "<li>" + hvertElement + "</li>"; siden det er kun = vil den da skrive over første navnet og andre navnet, og du vil kun få SynneSaga.
  document.getElementById("utskriftHvert").innerHTML += "<li>" + hvertElement + "</li>"; //Denne virker hvis du lager en div med id="utskrift" og tar document.getElementById("utskrift").innerHTML = arrayNamn;
  //document.getElementById("utskriftHvert").innerHTML = document.getElementById("utskriftHvert").innerHTML + "<li>" + hvertElement + "</li>"; Denne virker også, men er knotete.
  console.log(hvertElement);
}

//Disse to løkkene gjør akkuratt det samme^^vv
for (let i = 0; i < arrayNamn.length; i++) {
  console.log(arrayNamn[i]);
}

//Likhetstegn
//pris = pris * 5; er samme som
//pris *= 5;
//Du tar operasjonen og setter før likhetstegnet, så kan du fjerne andre variabelen. Ting = Ting + 5; blir da Ting += 5;

//lag ul med id="utskriftHvert"
//<li>


let question = "Hva er dette?";
for (let bokstav of question) {
  console.log(bokstav);

  if(bokstav == "?") {
    console.log("Spørsmål!");
  }
  else {
    console.log("bokstav");
  }
}

const tallPi = Math.PI; //mattebibliotek!
console.log(tallPi)

let desi = 6.9191
console.log(Math.round(desi)); //runder av vanlig, får 7
console.log(Math.floor(desi)); //runder ned, får 6
console.log(Math.ceil(desi));  //runder opp, får 7

//Lagre objekt
let variabelNavn = {
    navn: "Saga",
    yrke: "elev",
    etternavn: "Synne",
    alder: 39
};

console.log(variabelNavn.yrke);


let diffUtskrift = document.getElementById("diffUtskrift");
let diffKnapp = document.getElementById("diffKnapp");


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









