document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "hidden");
  });
//endret ver av https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

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

document.getElementById("formID").addEventListener("input", function(){
    var pfp = "#";

    if (document.getElementById("bear").checked){
        pfp = "bear";
    }
    
    else if (document.getElementById("kopp").checked){
        pfp = "kopp";
    }
    
    else if (document.getElementById("kamel").checked){
        pfp = "kamel";
    }
    
    else {
        console.log("fuck")
    }
    
    let submit = document.getElementById("submitBtn");
    submit.addEventListener("click", function(noe){
        noe.preventDefault();
        document.getElementById("navnUtskrift").innerHTML = brukernavn.value;
        document.getElementById("mailUtskrift").innerHTML = mailadressen.value;
        document.getElementById("pfpUtskrift").src = "bilder/" + pfp + ".jpg";
        let interesser = document.querySelectorAll('input[type=checkbox]:checked');
        if (interesser.length > 0) { // Dersom det er huka av for nokre interesser   
            document.getElementById("interesserOut").innerHTML = "";
            for (let interesse of interesser) {
                document.getElementById("interesserOut").innerHTML += "<li>" + interesse.value + "</li>";
            }
        }
        else {
            document.getElementById("interesserOut").innerHTML = "<li>Ingen interesser.</li>";
        }

    })

})




//https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
