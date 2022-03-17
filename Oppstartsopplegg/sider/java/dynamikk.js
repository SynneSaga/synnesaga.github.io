var ting = [
    {navn:"aah", bilde:"aah.png"},
    {navn:"bbh", bilde:"bbh.png"}
]

var i = 0;

var containerdiv = document.createElement("div");
containerdiv.className = "container";

var overskrift = document.createElement("h3");
overskrift.innerHTML = ting[i].navn;

var bilde = document.createElement("img");
//bilde.src = "bilder/" + ting[i].image;

var setning = document.createElement("p");
setning.innerHTML = ting[i].innhold + " haha";

var knapp = document.createElement("button");
knapp.innerHTML = "Knapp";
knapp.id = i;
knapp.addEventListener("click", knappTrykk());

containerdiv.appendChild(overskrift);
containerdiv.appendChild(bilde);
containerdiv.appendChild(setning);
containerdiv.appendChild(knapp);

document.getElementById("etElement").appendChild(containerdiv);

function knappTrykk(){
    console.log("test")
}