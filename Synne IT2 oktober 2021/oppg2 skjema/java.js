document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "hidden");
  });

let interesser = document.getElementById("interesser");
let brukernavn = document.getElementById("brukernavn");
let advarsel = document.getElementById("advarsel");
advarsel.style.display = "none";
let slemmeOrd = ["tiss", "promp", "faen", "fuck", "penis", "kuk"]

brukernavn.addEventListener("input", function(){
    advarsel.style.display = "none";
    let navn = brukernavn.value.toLowerCase();
    for (var i = 0; i < slemmeOrd.length; i++) {
        if (navn.indexOf(slemmeOrd[i]) != -1){
            //console.log("meh")
            advarsel.style.display = "initial";
            advarsel.innerHTML = (" Dette ordet er galt: " + slemmeOrd[i]);
        }
    }
})


let mailadressen = document.getElementById("epost");
let mailAdvarsel = document.getElementById("mailAdvarsel");
mailAdvarsel.style.display = "none";
let mailArray = ["parasite@me.com","amichalo@icloud.com","tbeck@att.net","rnelson@att.net","rogerspl@comcast.net","oechslin@verizon.net","kspiteri@att.net","portscan@msn.com","aukjan@verizon.net","wilsonpm@mac.com","csilvers@mac.com","redingtn@sbcglobal.net"]

mailadressen.addEventListener("input", function(){
    mailAdvarsel.style.display = "none";
    let mailen = mailadressen.value;
    for (var i = 0; i < mailArray.length; i++) {
        if (mailen.indexOf(mailArray[i]) != -1){
            mailAdvarsel.style.display = "initial";
            mailAdvarsel.innerHTML = (" Denne mailadressen er allerede i bruk.");
        }
    }
})

//indexOf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf


let submit = document.getElementById("submitBtn");
submit.addEventListener("click", function(){
    document.getElementById("profOverskrift").innerHTML = "Slik ser profilen din ut: ";
    document.getElementById("navnUtskrift").innerHTML = brukernavn.value;
    document.getElementById("mailUtskrift").innerHTML = mailadressen.value;

})

//endret ver av https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

  
