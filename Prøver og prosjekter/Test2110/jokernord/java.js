var tallet = Math.floor(Math.random()*10);
var tallTo = Math.floor(Math.random()*10);

function finnTall() {
    console.log("Tall1: " + tallet);
    console.log("Tall2: " + tallTo);
    document.getElementById("utskrift").innerHTML = tallet;
    document.getElementById("resultatOgInfo").innerHTML = ("Er neste tall høyere eller lavere enn " + tallet + "?");
}


var pilOpp = document.getElementById("opp");
pilOpp.addEventListener("click", function(){
    //console.log("Opp")
    if (tallTo > tallet) {
        document.getElementById("resultatOgInfo").innerHTML = ("Riktig! " + tallTo + " er høyere enn " + tallet);
        document.querySelector("body").style.backgroundColor = "green";
    }
    else if (tallTo < tallet) {
        document.getElementById("resultatOgInfo").innerHTML = ("Feil. " + tallTo + " er lavere enn " + tallet);
        document.querySelector("body").style.backgroundColor = "red";
    }
    else if (tallTo === tallet) {
        document.getElementById("resultatOgInfo").innerHTML = "Ingen sjans, de er like :P";
        document.querySelector("body").style.backgroundColor = "yellow";
    }
});

var pilNed = document.getElementById("ned");
pilNed.addEventListener("click", function(){
    //console.log("Ned")
    if (tallTo < tallet) {
        document.getElementById("resultatOgInfo").innerHTML = ("Riktig! " + tallTo + " er lavere enn " + tallet);
        document.querySelector("body").style.backgroundColor = "green";
    }
    else if (tallTo > tallet) {
        document.getElementById("resultatOgInfo").innerHTML = ("Feil. " + tallTo + " er høyere enn " + tallet);
        document.querySelector("body").style.backgroundColor = "red";
    }
    else if (tallTo === tallet) {
        document.getElementById("resultatOgInfo").innerHTML = "Ingen sjans, de er like :P";
        document.querySelector("body").style.backgroundColor = "yellow";
    }
});

opp.addEventListener("click", function() {
    var noe = document.getElementById("inn").value;
    console.log(noe.toLowerCase())
});