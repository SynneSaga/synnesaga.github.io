let people = [
    {"name":"Ole",
    "age":20,
    "personality":"kind"},

    {"name":"Sara",
    "age":18,
    "personality":"angry"},

    {"name":"Kara",
    "age":19,
    "personality":"kind"},

    {"name":"Minx",
    "age":20,
    "personality":"shy"},

    {"name":"Gary",
    "age":16,
    "personality":"kind"},

    {"name":"Pål",
    "age":17,
    "personality":"angry"},
]


//Original info:
let tabellen = "<tr><th>Person</th><th>Alder</th></tr>";

for (let i = 0;i<people.length;i++){
   tabellen += "<tr><td>" + people[i].name + "</td><td>" + people[i].age + "</td></tr>";
}

document.getElementById("utskrift").innerHTML = tabellen;

//Sortere tekst
let tabellnavn = "<tr><th>Person</th><th>Alder</th></tr>";

function sorterByNavn(a, b) {
    if(a.name < b.name){
        return -1; 
    }

    if(a.name > b.name){
        return 1;
    }
    return 0;
}

people.sort(sorterByNavn);

for (let i = 0;i<people.length;i++){
    tabellnavn += "<tr><td>" + people[i].name + "</td><td>" + people[i].age + "</td></tr>";
 }

document.getElementById("tabellnavn").innerHTML = tabellnavn;


//Sortere tall

let tabellalder = "<tr><th>Person</th><th>Alder</th></tr>";

function sorterByAlder(a, b) {
    if(a.age < b.age){
        return -1; 
    }

    if(a.age > b.age){
        return 1;
    }
    return 0;
}

people.sort(sorterByAlder)

for (let i = 0;i<people.length;i++){
    tabellalder += "<tr><td>" + people[i].name + "</td><td>" + people[i].age + "</td></tr>";
}

document.getElementById("tabellalder").innerHTML = tabellalder;

//Velg array
let vareliste = "<tr><th>Vare</th><th>Pris</th></tr>";

let matvarer = [
    {"vare":"Ost","pris":"17"},
    {"vare":"Paprika","pris":"30"},
    {"vare":"Brød","pris":"30"},
    {"vare":"Kaviar","pris":"29"}
]

for (let i = 0;i<matvarer.length;i++){
    vareliste += "<tr><td>" + matvarer[i].vare + "</td><td>" + matvarer[i].pris + "</td></tr>";
}



function favArray() {
    var listeArrays = document.getElementById("listeArrays");
    document.getElementById("favorittArray").value = listeArrays.options[listeArrays.selectedIndex].text;  
    if (listeArrays.selectedIndex == 1){
        document.getElementById("velgtabell").innerHTML = tabellen;
    }
    else if(listeArrays.selectedIndex == 2){
        document.getElementById("velgtabell").innerHTML = vareliste;
    }
}

function favSortering() {

    let valgtSortering = "<tr><th>Person</th><th>Alder</th></tr>";
    var listeSorteringer = document.getElementById("listeSortertinger");
    let valgtArray = "";

    if (listeArrays.selectedIndex == 1){
        valgtArray = people;
    }
    else if(listeArrays.selectedIndex == 2){
        valgtArray = matvarer;
    }

    document.getElementById("favorittSortering").value = listeSorteringer.options[listeSorteringer.selectedIndex].text; 

    if (listeArrays.selectedIndex == 1){

        valgtArray.sort(sorterByNavn);

        for (let i = 0;i<valgtArray.length;i++){
            valgtSortering += "<tr><td>" + valgtArray[i].name + "</td><td>" + valgtArray[i].age + "</td></tr>";
        }
        document.getElementById("velgSortering").innerHTML = valgtSortering;
//hva kalles .name .age etc, kan byttes ut??
    }
    else if(listeArrays.selectedIndex == 2){
        valgtArray.sort(sorterByAlder);

        for (let i = 0;i<valgtArray.length;i++){
            valgtSortering += "<tr><td>" + valgtArray[i].name + "</td><td>" + valgtArray[i].age + "</td></tr>";
        }
        document.getElementById("velgSortering").innerHTML = valgtSortering;
    }
}








/*
matvarer.splice(matvarer.indexOf("brød"),1,"knekkebrød")

matvarer.unshift();
matvarer.pop();
matvarer.splice(matvarer.indexOf("brød"),1,"knekkebrød")
//console.log(matvarer)

//2
let trær = ["lønn","hassel","bjørk","eik","blodlønn","furu","gran"];
trær.splice(trær.indexOf("eik"),1);
trær.splice(trær.indexOf("bjørk"),1,"hengebjørk");
trær.splice(trær.indexOf("furu"),2);
trær.push("fjellbjørk","dvergbjørk");
trær.sort();*/