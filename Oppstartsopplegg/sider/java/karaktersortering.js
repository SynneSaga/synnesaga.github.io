let personer = [

    {"name":"Norman",
    "karakter":4
    },

    {"name":"Nolle",
    "karakter":4
    },

    {"name":"Nora",
    "karakter":4
    },

    {"name":"Ida",
    "karakter":6
    },

    {"name":"Ina",
    "karakter":6
    },

    {"name":"Tommy",
    "karakter":6
    },

    {"name":"Gina",
    "karakter":5
    }
]
console.log(personer)

function sorterByKarakter(a, b) {
    if(a.karakter < b.karakter){
        return -1; 
    }

    if(a.karakter > b.karakter){
        return 1;
    }
    return 0;
}

function skrivUt(){
    document.getElementById("karaktertabell").innerHTML = "";
    let tabell = "<tr><th>Person</th><th>Karakter</th></tr>";
    for (let i = 0;i<personer.length;i++){
        tabell += "<tr><td>" + personer[i].name + "</td><td>" + personer[i].karakter + "</td></tr>";
     }
}
personer.sort(sorterByKarakter)


skrivUt(personer)



document.getElementById("karaktertabell").innerHTML = tabell;

function leggTilPerson(ikke){
    ikke.preventDefault();
    //var nyPerson = document.getElementById("formLeggTil");
    skrivUt(personer)
}


function removePerson(ikke){
    ikke.preventDefault();
    let elev = document.getElementById("formFjern").value;

    if (personer.some(e => e.Name === elev)){
        console.log("fant!")
    }
}

document.getElementById("knappLeggTil").addEventListener("click", leggTilPerson());
document.getElementById("knappFjern").addEventListener("click", removePerson());