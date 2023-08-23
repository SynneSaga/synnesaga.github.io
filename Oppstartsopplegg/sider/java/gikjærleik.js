let ordliste = ["skjønn", "dum", "hyggelig", "snill", "rar", "tåpelig","irriterende","en dumbass","koselig"]

var namn = prompt("Hvem er beskjeden til?:pleading_face:");
if (namn === "") {
    namn = "Skybert";
}
var lengde = parseInt(prompt("Og hvor mange ord?:flushed:"));


function lagSetning(namn,lengde){
    var setningUt = "Kjære <span class='namn'>" + namn  + "</span>" + ", du er ";

        if (lengde > ordliste.length) {
            alert("I am all out of words :pensive:")
            lengde = ordliste.length;
        }

        for (let i = 0; i < lengde ; i++) {
            let plass = tilfeldigTall(0,ordliste.length-1);
            let ord = ordliste[plass];
            ordliste.splice(plass,1);
            if (lengde === 1) {
                setningUt += ord + ".";
            }
            else {
                if (i === lengde-2) {
                    setningUt += ord + " ";
                }
                else if (i === lengde-1) {
                    setningUt += " og " + ord + ".";
                }
                else {
                    setningUt += ord + ", ";
                }
            }
        
    }
    
    
    document.getElementById("ord").innerHTML = setningUt;
}


/*if (lengde == "NaN") {
    lengde = "noe";
}
*/
lagSetning(namn,lengde)

//plass = tilfeldigTall(0,lengden til array - 1)
function tilfeldigTall(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//console.log(namn+lengde)
//document.getElementById("ord").innerHTML = "Kjære " + namn;
//let random = Math.floor(Math.random() * ordliste.length);
//console.log(ordliste[random])