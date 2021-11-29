document.getElementById("kalkKnapp").addEventListener("click", function(){
    let kjøtt = document.getElementById("kjøtt").value * 0.17;
    let fisk = document.getElementById("fisk").value * 0.09;
    let vegetar = document.getElementById("vegetar").value * 0.08;
    let flyturer = document.getElementById("flyturer").value * 1.1;

    let totalCO = (kjøtt + fisk + vegetar + flyturer + 1);
    let outputCO = document.getElementById("outputCO");
    outputCO.innerHTML = "Ditt årlige klimaavtrykk er " + totalCO.toFixed(2) + " tonn CO<sub>2</sub>, ";
    if (totalCO < 6) {
        outputCO.innerHTML += "din klimaengel."
    }

    else if ((totalCO > 6) & (totalCO < 8)){
        outputCO.innerHTML += "din helt vanlige nordmann."
    }

    else if (totalCO > 8){
        outputCO.innerHTML += "ditt klimasvin >:("
    }

    else {
        outputCO.innerHTML = "noe er galt.";
    }
})