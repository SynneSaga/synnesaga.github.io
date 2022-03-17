//maps, set og noder

//maps
let stol1 = {
    navn: "john",
    ting: "stol",
    farge: "brun"
};
//let navn = document.getElementById("element").value; kan være alt vei å få innhold


//lage map
let mapNoe = new Map();
//map.set   key,value       legge inn i map
mapNoe.set(stol1.navn, stol1);

console.log("%cFinn value til key -john-: ", "color:yellow;")
//map.get   hente value til en key i map
console.log(mapNoe.get("john"));
console.log("%cFinn value til key -stol-: (key til stol1 er .navn (:john), ikke .ting(:stol))", "color:yellow;")
console.log(mapNoe.get("stol")); //gir undefined pga john er key for stol1. 

console.log("%cFinn value til key -stol- etter remap til stol1.ting: ", "color:yellow;")
mapNoe.set(stol1.ting, stol1);
console.log(mapNoe.get("stol")); //gir noe.


let stol2 = {
    navn: "sarah",
    ting: "stol",
    farge: "blå"
}

mapNoe.set(stol2.ting,stol2);
console.log("%cNy stol:", "color:yellow;")
console.log(mapNoe.get("stol")) //gir kun siste element med stol(stol2)?
console.log(mapNoe.get("john")) //gir stol1


console.log("%cAlt innhold" + " i mapNoe:", "color:yellow;") 
for (let noe of mapNoe){//gir begge objektene, stol1 og stol2 via loop
    console.log(noe)
}
//for å kun gi keys, ikke rest
console.log("%cKun keys til objektene, ikke del 0 av objektet (key'en)", "color:yellow;")
for (let noe of mapNoe.keys()){
    console.log(noe)
}

console.log("%cKun values til objektene", "color:yellow;")
for (let noe of mapNoe.values()){
    console.log(noe)
}

//finner størrelsen til mapet, mengden objekter?
console.log("%cStørrelsen" + " til map'et: " + ("%c" + mapNoe.size), "color:yellow;", "color:lightblue;");



//sjekke om et map har en viss key, blir true/false
console.log("%cSjekker om map har John: " + ("%c" + mapNoe.has("john")), "color:yellow;", "color:lightblue;");



console.log("Fjerner visst innhold i map")
//fjerner et visst element via keyen
mapNoe.delete("john");
for (let noe of mapNoe){//gir begge objektene, stol1 og stol2 via loop
    console.log(noe)
}
console.log("%c.has hvis map fortsatt har john: ", "color:yellow;");
console.log(mapNoe.has("john"));

console.log('%cFjerner alt i map: ','background:#000;color:red')
//fjerner alt i map
console.log(("%c" + mapNoe.clear()), "color:red;");


console.log("%cNye objekter", "color:lightblue;")
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits.get(apples)); //ikke string, ikke bruk ""
//returnerer 500

fruits.set(apples,300);
console.log(fruits.get(apples)); 
//returnerer 300

//set kan brukes både til å legge til nye ting i map, og til å endre på ting i map



console.log("Test av Set")
//Set

let personene = [
    {navn:"Sarah", farge:"rød"},
    {navn:"John", farge:"rosa"},
    {navn:"Mikkel", farge:"svart"},
    {navn:"Pia", farge:"blå"}
];

var personSet = new Set();

for (let person of personene){
    personSet.add(person.navn)
}
console.log(personSet)



var fugler = new Set();

fugler.add("trost");
fugler.add("gjøk");
fugler.add("ugle");
console.log("Er pingvin en fugl?: " + fugler.has("pingvin"));

/* ARRAY/SET
var set = new Set(array);
var array = Array.from(set);*/

// Nodes
console.log("Test av Nodes")

var alleDivElementer = document.getElementsByTagName("div");

for(var i = 0;i<2000;i++){
var stjerne = document.createElement("div");
stjerne.className = "stjerne";
stjerne.style.left = Math.random()*innerWidth + "px";
stjerne.style.top = Math.random()*innerHeight + "px";
stjerne.style.width = Math.random()*3 + "px";
stjerne.style.height = stjerne.style.width;
stjerne.style.zIndex = 0;
document.body.appendChild(stjerne);
}

