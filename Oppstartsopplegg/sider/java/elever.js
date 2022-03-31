var midtstilt = document.getElementById("midtstilt");
midtstilt.innerHTML = "<h1>Min overskrift</h1>";
midtstilt.innerHTML += "<p>Første paragraf</p>";

// So far, so good..

var elevene = [  
    {navn : "Amanda" , karakter : 4}, 
    {navn : "Ole" , karakter : 3}, 
    {navn : "Reidun" , karakter : 6}, 
    {navn : "Jan" , karakter : 5},
    {navn : "Jo Bjarne", karakter : 2},
    {navn : "Svada Bada" , karakter : 5},
    {navn : "Rada Bada" , karakter : 5},
    {navn : "Hada Pa Bada" , karakter : 5},
    {navn : "Rompa Stompa" , karakter : 1},
    {navn : "Hopp Hipp" , karakter : 2}
];

// Forsøk på strategi, der me gjer det på same måte som tidlegare (med HTML-tabell). Altså, bygge opp ein String, steg for steg, og til slutt skrive den ut. Det fungerer, men...
var dynamiskDataUt = "";
dynamiskDataUt += "<div id='utElevBoksar'>";
for(let elev of elevene){
    dynamiskDataUt += "<div class='elev'><h1>Elev: " + elev.navn + "</h1><p>Karakter: " + elev.karakter + "</p></div>";
}
dynamiskDataUt += "</div>";

midtstilt.innerHTML += dynamiskDataUt;

// OPPGÅVE: Lag dette om til å bruke createElement.