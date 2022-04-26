var enemy = [{"name":"Sweden",
            "hp":100,
            "attackdmg":10,
            "flagg":"sveden"},
            
            {"name":"Denmark",
            "hp":100,
            "attackdmg":10,
            "flagg":"danmark"}
        ]

var enemies = document.getElementById("enemies")
var i = 0;

function endreFlagg(){
    var enemyhp = enemy[i].hp;
    if(enemies.selectedIndex == 0){
        enemies.selectedIndex = 0;
    }
    else{
        i = enemies.selectedIndex - 1;
        document.getElementById("enemyside").style.backgroundImage = "url(bilder/" + enemy[i].flagg + ".png)"
        document.getElementById("enemyhp").innerText = enemy[i].name + "'s HP: " + enemy[i].hp;
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
        if (enemy.hp <= 0) {
            enemyhpText.innerText = "Dead XO"
        }
        
        document.getElementById("enemyside").style.color = "white";
        statustext.innerText = "You did " + skadeenemy.toFixed(0) + " damage!"
        
    }

    else {
        i = enemies.selectedIndex - 1;
        //statustext = "You're being attacked!"
        enemyhp = enemyhp - (Math.random() * (10-0) + 0); //min er 0
        enemyhpText.innerText = enemy[i].name + "'s HP: " + enemyhp.toFixed(0)
        
        if (enemy.hp <= 0) {
            enemyhpText.innerText = "Dead XO"
        }

        
        statustext.innerText = "You did " + skadeenemy.toFixed(0) + " damage!"
    }
}

function enemyStatus(){
    document.getElementById("myside").style.color = "red"; //setter egen farge til rød, og motstander hvit.
    document.getElementById("enemyside").style.color = "white";
    statustext.innerText = "You're being attacked!"
}

var myhp = 100;

function enemyAttack () {
    var skadeselv = (Math.random() * (10-0) + 0);
    myhp = myhp - skadeselv;
    if (myhp <= 0) {
        document.getElementById("myhp").innerText = "Dead XO"

    }
    
    if (skadeselv == 0) {
        statustext.innerText = enemy[i].name + " missed!"
    }

    document.getElementById("myhp").innerText = "My HP: " + myhp.toFixed(0) //endrer hp til riktig hp
    document.getElementById("myside").style.color = "white"; //Setter egen farge til hvit
    
    statustext.innerText = enemy[i].name + " did " + skadeselv.toFixed(0) + " damage!"
}



function fiksFarger() {
    document.getElementById("angrip").disabled = false;
    statustext.innerText = "Waiting for your next move..."
}

function enRunde() {
    document.getElementById("enemyside").style.color = "red";//endrer farge på enemy til rød
    document.getElementById("angrip").disabled = true;
    statustext.innerText = "Attacking...";
    setTimeout(attackEnemy,2000); //endrer hp til enemy, enemy til hvit, you did x dmg
    setTimeout(enemyStatus,3500); //endrer farge selv til rød, tekst til youre being attacked! Gjør attackenemy fra 0 til 2000, enemystatus 200, enemyattack 2000 til 4000
    setTimeout(enemyAttack,5500); //endrer hp til selv, endrer farge på selv til hvit. enemy did x dmg


    setTimeout(fiksFarger,6750)//fiks knapp, waiting for your next move...
}


var arraySanger = ["HotelCalifornia","she ri"];
var valgtMusikk = document.getElementById("music");

document.getElementById("music").addEventListener("change", function() {
    
    if (valgtMusikk.selectedIndex == 0) {
        
        i = 0;
        console.log(arraySanger[i])
        var lyd = "musikk/" + arraySanger[i] + ".mp3";
        var audio = new Audio(lyd);
            
        audio.load();
        audio.play();
           
    }
    
    else {
        i = valgtMusikk.selectedIndex - 1;
        console.log(arraySanger[i])
        var lyd = "musikk/" + arraySanger[i] + ".mp3";
        var audio = new Audio(lyd);
            audio.load();
            audio.play();
    }
});


/*const btn = document.getElementById("playBtn");

btn.addEventListener("click", function(){
    let shuffledArray = arraySanger.sort((a, b) => 0.5 - Math.random()); //return delen etter =>, sorter i ascending order og
    var tidTall = length[shuffledArray];
    console.log(tidTall);
    document.getElementById("nowPlay").innerHTML = shuffledArray[0];
            var lyd = "musikk/" + shuffledArray[0] + ".mp3";
            var audio = new Audio(lyd);
            audio.load();
            audio.play();
    })*/