function startTime() {
    const today = new Date();
    let d = today.getDate();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    d = checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    let decD = 23 - d;
    let decH = 23 - h;
    let decM = 59 - m;
    let decS = 59 - s;
    //sekunder
    if (decS < 10){
        decS = "0" + decS;
    }

    //minutter
    if(decM == 60){
        decM = 0;
    }
    else if(decM < 10){
        decM = "0" + decM;
    }
    //timer
    if(decH == 24){
        decH = 0;
    }
    else if(decH < 10){
        decH = "0" + decH;
    }
    //console.log(decD + ":" + decH + ":" + decM + ":" + decS)
    document.getElementById("klokke").innerHTML = decD + " dager, " + decH + ":" + decM + ":" + decS;
    document.getElementById("klokke").innerText = decD + " d, " + decH + " t, " + decM + " m, " + decS + " s";
    setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

//Musikk


var arraySanger = ["All I want for Christmas is you - MCR","Himmel på jord - Kurt Nilsen","Peace on Earth - David Bowie and Bing Crosby"]
const btn = document.getElementById("playBtn");

btn.addEventListener("click", function(){
    let shuffledArray = arraySanger.sort((a, b) => 0.5 - Math.random()); //return delen etter =>, sorter i ascending order og
    var tidTall = length[shuffledArray] ;
    document.getElementById("nowPlay").innerHTML = shuffledArray[0];
            var lyd = "musikk/" + shuffledArray[0] + ".mp3";
            var audio = new Audio(lyd);
            audio.load();
            audio.play();
    })