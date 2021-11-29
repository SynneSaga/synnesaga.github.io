document.getElementById("startTelling").addEventListener("click",function(){
    let tallOutput = document.getElementById("tallOutput");
    document.getElementById("sjekk").innerHTML = "Sjekk konsollen :P";
    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0) {
            console.log("Cowabunga! Hadouken!");
            tallOutput.innerHTML += "<li>Cowabunga! Hadouken!</li>";
        }
        else if(i % 5 == 0){
            console.log("Hadouken!");
            tallOutput.innerHTML += "<li>Hadouken!</li>";
        }
        else if(i % 3 == 0){
            console.log("Cowabunga!");
            tallOutput.innerHTML += "<li>Cowabunga!</li>";
        }
        else {
            console.log(i)
            tallOutput.innerHTML += "<li>" + i + "</li>";
        }
    }
})

//Kilde for modulus: https://www.w3schools.com/js/js_arithmetic.asp
//for-loop: https://www.w3schools.com/js/js_loop_for.asp