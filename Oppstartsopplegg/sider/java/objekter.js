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
]

//ikke bruk [] her, kun for flere
let nyperson = {
    "name":"Frøya",
    "age":23,
    "personality":"pissy"
}

let liteArray = ["heisann", "hadet", "ok", "heisann", "ny"]
//people.unshift(nyperson) //setter inn på begynnelsen av array
//people.push(nyperson) //setter inn på slutten av array
//people.pop; //fjerner siste del av array
//people.splice(2,0,nyperson) //setter inn på posisjon 2, fjerner ingenting, legger inn objektet nyperson
//liteArray.splice(liteArray.indexOf("heisann"),2) //Fjerner første objektet med heisann, pluss objektet etter. Ignorerer andre heisann.

//console.log(liteArray)

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
matvarer.pop();
matvarer.splice(matvarer.indexOf("brød"),1,"knekkebrød")
//console.log(matvarer)

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
tall.sort();
console.log(tall)

//let 
