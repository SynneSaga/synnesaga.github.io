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
    
var enemyhp = enemy[i].hp;

function attackEnemy(){
    
    if(enemies.selectedIndex == 0){
        i = 0;
        document.getElementById("status").innerText = "You're being attacked!"
        enemyhp = enemyhp - (Math.random() * (10-0) + 0); //min er 0
        document.getElementById("enemyhp").innerText = enemy[i].name + "'s HP: " + enemyhp.toFixed(0)
        
        if (enemy.hp <= 0) {
            document.getElementById("enemyhp").innerText = "Dead XO"
        }
        document.getElementById("myside").style.color = "red";
        document.getElementById("enemyside").style.color = "white";
    }
    else{
        i = enemies.selectedIndex - 1;
        document.getElementById("status").innerText = "You're being attacked!"
        enemy.hp = enemy.hp - (Math.random() * (10-0) + 0); //min er 0
        document.getElementById("enemyhp").innerText = enemy[i].name + "'s HP: " + enemy.hp.toFixed(0)
        
        if (enemy.hp <= 0) {
            document.getElementById("enemyhp").innerText = "Dead XO"
        }
        document.getElementById("myside").style.color = "red";
        document.getElementById("enemyside").style.color = "white";
    }
}

var myhp = 100;

function enemyAttack () {
    myhp = myhp - (Math.random() * (10-0) + 0);
    document.getElementById("myhp").innerText = "My HP: " + myhp.toFixed(0)
    if (myhp <= 0) {
        document.getElementById("myhp").innerText = "Dead XO"

    }
    document.getElementById("angrip").disabled = false;
    document.getElementById("status").innerText = "Waiting for your next move..."
}

function fiksFarger() {
    document.getElementById("myside").style.color = "white";
}

function enRunde() {
    document.getElementById("enemyside").style.color = "red";
    document.getElementById("angrip").disabled = true;
    document.getElementById("status").innerText = "Attacking...";
    setTimeout(attackEnemy,2000);
    setTimeout(enemyAttack,4000);
    setTimeout(fiksFarger,5000)
}