//Dette er et array, man har flere objekter{} inne i [].
let people = [

    {"name":"Ole",
    "age":20,
    "personality":"kind"
    },

    {"name":"Sara",
    "age":18,
    "personality":"angry"
    },

    {"name":"Kara",
    "age":19,
    "personality":"kind"
    },

    {"name":"Minx",
    "age":20,
    "personality":"shy"
    },

    {"name":"Gary",
    "age":16,
    "personality":"kind"
    },

    {"name":"Pål",
    "age":17,
    "personality":"angry"
    },
]


//ikke bruk [] her, kun for flere
/*let nyperson = {
    "name":"Frøya",
    "age":23,
    "personality":"pissy"
}

let liteArray = ["heisann", "hadet", "ok", "heisann", "ny"]*/

//people.unshift(nyperson) //setter inn på begynnelsen av array
//people.push(nyperson) //setter inn på slutten av array
//people.pop; //fjerner siste del av array
//people.splice(2,0,nyperson) //setter inn på posisjon 2, fjerner ingenting, legger inn objektet nyperson
//liteArray.splice(liteArray.indexOf("heisann"),2) //Fjerner første objektet med heisann, pluss objektet etter. Ignorerer andre heisann.

//array.slice().sort(function(a,b))sorterer etter ting ble gjort
//console.log(liteArray)


let tabellen = "<tr><th>Person</th><th>Alder</th></tr>";

for (let i = 0;i<people.length;i++){
   document.getElementById("utskrift").innerHTML += ("<li>" + people[i].name + " er <span class=tallFarge>" + people[i].age + " </span>år gammel.</li>");
}

//LAGE EGEN SORT FUNCTION ETTER ET SPESIFIKT OBJEKT I ARRAY!!! HER ER ETTER ALDER FRA ARRAYET PEOPLE
//NEDERST SETTER DU ARRAY.SORT(NAVNPÅFUNKSJON)




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
    tabellen += "<tr><td>" + people[i].name + "</td><td>" + people[i].age + "</td></tr>";
 }
 document.getElementById("tabell").innerHTML = tabellen

let antallUnder20 = 0;
let folkSomErUnder20 = [];

 for(let folk of people) {
     if(folk.age < 20) {
        antallUnder20 += 1; //øker antallet folk som er under 20 i variabel;
        folkSomErUnder20.push(" " + folk.name); //legger til personen som er under 20 sist i arrayet jeg nettopp lagde, folkSomErUnder20
     }
 }


document.getElementById("ungFolk").innerHTML = "<p>Antall folk som er under 20: <span class=tallFarge>" + antallUnder20 + "</span> stk. <br> Disse er: " + folkSomErUnder20 + ".</p>";

//let nyTabell = [];
//Fjerne disse folkene fra arrayet:
/*for(let folk of people) {
    if(folk.age < 20) {
        nyTabell.push(folk)
    }
}*/
/*nyTabell = people.filter(p => nyTabell.age <= 20)*/
//console.log(nyTabell)


/*for (let i = 0;i<people.length;i++){
    
}
gjør samme greiene ^^ vv
for (let folk of people) {
    document.getElementById("utskrift").innerHTML += folk.name;
}*/



/*  Array.splice(
    <index where to start>,
    <how many items to remove>,
    <items to add>
); */




//Husk at arrays starter fra 0!!!
//let person = people.find(person => person.age === 21); //Gir kun første matchende objekt
//let person = people.find(person => person.age === 20 && person.personality === "kind"); //Gir første som matcher begge conditions, 20 og "kind"

//let person = people.filter(person => person.age === 20) //samme som find, men gir flere resultater som matcher

//transformere objekter i array

/*let ages = people.map(person => {
    if (person.age <= 19){
        return "videregåendeelev";
    }
    if (person.age >= 20) {
        return "voksen";
    }
    return "oops";
});

//console.log(ages)

//Legger til nytt element, status
let personaldre = people.map(person => {
    let alder = {
        "age":person.age,
        "status": "ukjend"
    }
    if (person.age <= 19){
        alder["status"] = "videregåendeelev";
    }
    if (person.age >= 20) {
        alder["status"] = "annet";
    }
    return alder;
});*/

//console.log(personaldre)

//console.log(ages)

//liteArray.sort(); //ser på verdien til første karakteren, sorterer etter det
//console.log(liteArray) //sorterer alfabetisk, er ingen tall el lignende

//Oppgaver s. 206, 1
let matvarer = ["ost", "paprika", "brød", "kaviar"]

matvarer.unshift("melk")
matvarer.pop(); //fjerner siste elementet og gir det i return
matvarer.splice(matvarer.indexOf("brød"),1,"knekkebrød")
console.log(matvarer)

//2
let trær = ["lønn","hassel","bjørk","eik","blodlønn","furu","gran"];
trær.splice(trær.indexOf("eik"),1);
trær.splice(trær.indexOf("bjørk"),1,"hengebjørk");
trær.splice(trær.indexOf("furu"),2);
trær.push("fjellbjørk","dvergbjørk");
trær.sort();
//console.log(trær)

//3
let i = 0
let bilder = ["bugs", "ourple", "eggs"];

document.getElementById("knappFram").addEventListener("click", function(){
    i += 1;
    if (i == 3){
        i = 0;
    }
    document.getElementById("bildet").src = "Bilder/" + bilder[i] + ".png";
})


//let filnavn = "Bilder/" + bilder[i] + ".png";
//let filnavn = (bilder.indexOf(i) + ".png") ikke denne

//5
let tall = [1,4,2,6,8]
//tall.sort();
//console.log(tall)

//let 

//sort gjør tall om til tekst, 12 blir til 1 2
//array.sort(function(a, b){return a-b}); Dette skal gjøre dem ordetnlig sortert
/*tall.sort(function(a,b) {
    console.log("sammenligner " + a + ", " + b)
    return a - b;
})*/

/*små bokstaver sorteres annerledes enn store
array.sort(function(a,b) {
    a = a.toUpperCase();
    b = b.toUpperCase();
    return b<a;
})
*/

// => function

/*Traditional Anonymous Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;
*/
