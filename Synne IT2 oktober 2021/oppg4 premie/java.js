const output = document.querySelector('.pers-output');
const antallPers = document.querySelector("#antallPers")
output.textContent = antallPers.value;

//Sjekke at riktig mengde premier er valgt
var bildeEn = document.getElementById("bildeEn");
var bildeTo = document.getElementById("bildeTo");
var bildeTre = document.getElementById("bildeTre");
var bilderValgt = 0;

bildeEn.addEventListener("click", function(){
    bildeEn.style.opacity = "75%"
    bilderValgt +=1;
    bildeEn.disabled = true;
})
bildeTo.addEventListener("click", function(){
    bildeTo.style.opacity = "75%"
    bilderValgt +=1;
    bildeTo.disabled = true;
})
bildeTre.addEventListener("click", function(){
    bildeTre.style.opacity = "75%"
    bilderValgt +=1;
    bildeTre.disabled = true;
})

document.getElementById("resetKnapp").addEventListener("click", function(){
    bildeEn.style.opacity = "100%"
    bildeTo.style.opacity = "100%"
    bildeTre.style.opacity = "100%"
    bilderValgt = 0;
    bildeEn.disabled = false;
    bildeTo.disabled = false;
    bildeTre.disabled = false;
    
})

var personInput = document.getElementById("personInput");
antallPers.addEventListener('input', function() {
    output.textContent = antallPers.value;
    personInput.innerHTML = "";
    for (var i = 0; i < antallPers.value; i++){
        personInput.innerHTML += "<label for=" + "pers" + (i + 1) + "> Person " + (i + 1) +": </label><input type="+ "text" + "name="+ "pers" + (i + 1) + " id=" + "person" + (i + 1) +" checked></input><br>";  
    }
})


var utskrift = document.getElementById("utskrift");
document.getElementById("bekreftKnapp").addEventListener("click", function(){
        if (person1.value == ""){
            utskrift.innerHTML = "Her var det tomt."
        }
        else if (person1 !== 0){
            if (bilderValgt < antallPers.value){
                console.log("for lite")
                utskrift.innerHTML = "Du kan velge " + (antallPers.value - bilderValgt) + " premie(r) til."
            }
            else if (bilderValgt > antallPers.value){
                console.log("for mye")
                utskrift.innerHTML = "Du har valgt " + (bilderValgt - antallPers.value) + " premie(r) for mye.";
            }
            else if (bilderValgt == antallPers.value){
                console.log("yay")
                utskrift.innerHTML = "Kos deg med premiene!"
            }
        }
        
    
    
})

