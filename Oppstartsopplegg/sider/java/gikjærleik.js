let ordliste = [
    "skjønn", "dum", "hyggelig", "snill", "rar", "tåpelig","irriterende","thot","dumbass","koselig"
]

for (let i = 0; i < ordliste.length ; i++) {
    let random = Math.floor(Math.random() * ordliste.length);
    console.log(ordliste[random])
}

//var namn = prompt("Hvem er beskjeden til?:pleading_face:")
//var lengde = prompt("Og hvor mange ord?:flushed:")
//console.log(namn+lengde)
//document.getElementById("ord").innerHTML = "Kjære " + namn;
//let random = Math.floor(Math.random() * ordliste.length);
//console.log(ordliste[random])