var enemy = [{"name":"Sweden",
            "hp":20,
            "attackdmg":10,
            "flagg":"sveden"},
            
            {"name":"Denmark",
            "hp":20,
            "attackdmg":10,
            "flagg":"danmark"}
        ]


var grader = [{grad:"easy",
                    hp:100},
                {grad:"normal",
                    hp:50},
                {grad:"hard",
                    hp:10}
                ]

var enemies = document.getElementById("enemies");
var difficulty = document.getElementById("difficulty");

var i = 0;
var x = 0;

function endreFlagg(){
    
    if((enemies.selectedIndex == 0) || (difficulty.selectedIndex == 0 )){
        enemies.selectedIndex = 1;
        document.getElementById("enemyhp").innerText = enemy[i].name + "'s HP: " + enemy[i].hp;

        difficulty.selectedIndex = 1;
        document.getElementById("myhp").innerText = "My HP: " + grader[x].hp;
        console.log("agdhja")

    }

    else {
        i = enemies.selectedIndex - 1;
        document.getElementById("enemyside").style.backgroundImage = "url(bilder/" + enemy[i].flagg + ".png)"
        document.getElementById("enemyhp").innerText = enemy[i].name + "'s HP: " + enemy[i].hp;

        x = difficulty.selectedIndex - 1;
        document.getElementById("myhp").innerText = "My HP: " + grader[x].hp;
        console.log("neid")
    }
    
}

var statustext = document.getElementById("status");
var enemyhp = enemy[i].hp;
var enemyhpText = document.getElementById("enemyhp");



function attackEnemy(){
    if(enemies.selectedIndex == 0){ //slik at hvis index er 0 blir den ikke lik -1
        i = 0;
        var skadeenemy = (Math.random() * (10-0) + 0); //min er 0
        enemyhp = enemyhp - skadeenemy;
        if (skadeenemy == 0) {
            statustext.innerText = "You missed!"
        }
        
        enemyhpText.innerText = enemy[i].name + "'s HP: " + enemyhp.toFixed(0);
        if (enemyhp <= 0) { //forskjell på enemyhp og enemy.hp, en er var og andre er objekt i array
            enemyhpText.innerText = "Dead XO"
            document.getElementById("scener").src = "bilder/norwegens.png"
        }
        
        document.getElementById("enemyside").style.color = "white";
        statustext.innerText = "You did " + skadeenemy.toFixed(0) + " damage!"

        
    }

    else {
        i = enemies.selectedIndex - 1;
        //statustext = "You're being attacked!"
        enemyhp = enemyhp - (Math.random() * (10-0) + 0); //min er 0
        enemyhpText.innerText = enemy[i].name + "'s HP: " + enemyhp.toFixed(0)
        
        if (enemyhp <= 0) {
            enemyhpText.innerText = "Dead XO"
            document.getElementById("scener").src = "bilder/norwegens.png"
        }

        
        statustext.innerText = "You did " + skadeenemy.toFixed(0) + " damage!"
    }
}

function enemyStatus(){
    document.getElementById("myside").style.color = "red"; //setter egen farge til rød, og motstander hvit.
    document.getElementById("enemyside").style.color = "white";
    statustext.innerText = "You're being attacked!"
    animer(fiendesverd, "rotersvensk")
}

var myhp = 20;

function enemyAttack () {
    var skadeselv = (Math.random() * (10-0) + 0);
    myhp = myhp - skadeselv;
    if (myhp <= 0) {
        myhp = 100;
        document.getElementById("myhp").innerText = "System rigged"
        document.getElementById("scener").src = "bilder/swedens.png"
        statustext.innerText = "Oh ho ho, you're approaching me?" //Eller ble det sagt av dio?

    }
    else {
        if (skadeselv === 0) {
            statustext.innerText = enemy[i].name + " missed!"
        }
    
        document.getElementById("myhp").innerText = "My HP: " + myhp.toFixed(0) //endrer hp til riktig hp
        document.getElementById("myside").style.color = "white"; //Setter egen farge til hvit
        
        statustext.innerText = enemy[i].name + " did " + skadeselv.toFixed(0) + " damage!"
    }
    
}



function fiksFarger() {
    document.getElementById("angrip").disabled = false;
    statustext.innerText = "Waiting for your next move..."
}



var arraySanger = ["HotelCalifornia","she ri"];
var valgtMusikk = document.getElementById("music");
var audioelement = document.getElementById("audioelement");

document.getElementById("music").addEventListener("change", function() {
    if (valgtMusikk.selectedIndex == 0) {
        console.log("Ingen musikk valgt")
    }
    
    else {
        i = valgtMusikk.selectedIndex - 1;
        audioelement.src = "musikk/" + arraySanger[i] + ".mp3";
        audioelement.play();
        document.getElementById("nowPlay").innerText = arraySanger[i];
    } 
});




    //animasjon - - - - - - - - - - - - - - - - - - - - 
    //koble til css

    const norsksverd = document.getElementById("norsksverd");
    const fiendesverd = document.getElementById("fiendesverd");

    function animer(karakter,animasjon) {
        karakter.classList.remove(animasjon);
        void karakter.offsetWidth;
        karakter.classList.add(animasjon);
    }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


function enRunde() {
    animer(norsksverd, "roternorsk")
    document.getElementById("enemyside").style.color = "red";//endrer farge på enemy til rød
    document.getElementById("angrip").disabled = true;
    statustext.innerText = "Attacking...";
    setTimeout(attackEnemy,2000); //endrer hp til enemy, enemy til hvit, you did x dmg
    setTimeout(enemyStatus,3500); //endrer farge selv til rød, tekst til youre being attacked! Gjør attackenemy fra 0 til 2000, enemystatus 200, enemyattack 2000 til 4000
    setTimeout(enemyAttack,5500); //endrer hp til selv, endrer farge på selv til hvit. enemy did x dmg


    setTimeout(fiksFarger,6750)//fiks knapp, waiting for your next move...
}
