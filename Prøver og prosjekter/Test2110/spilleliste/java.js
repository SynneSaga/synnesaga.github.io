
var arraySanger = ['I loved you - Day6','Man in a movie - Day6','instagram - Dean','Sometimes I hear howlin in my head - Dean'];

//Sett array med både navn og tid, finn ut hvordan string + int
const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let shuffledArray = arraySanger.sort((a, b) => 0.5 - Math.random()); //return delen etter =>, sorter i ascending order og
    var tidTall = length[shuffledArray] ;
    document.getElementById("utskriftSanger").innerHTML = "";
    for (let hver of shuffledArray) {
        document.getElementById("utskriftSanger").innerHTML += "<li>" + hver + "</li>";
    }

    document.getElementById("spillAv").addEventListener("click", function() {
        var elem = document.getElementById("myBar");
        var width = 1;
        
        var id = setInterval(frame, 1000);
        function frame() {
            if (width >= 100) {
            clearInterval(id);
            } else {
            width++;
            elem.style.width = width + '%';
            }
        }
        document.getElementById("sangSomSpiller").innerHTML = shuffledArray[0];
        var lyd = "musikk/" + shuffledArray[0] + ".mp3";
        
        var audio = new Audio(lyd);
        
        audio.load();
        audio.play();
        

        document.getElementById("videoKnapp").addEventListener("click", function() {
            let vidboks = document.getElementById("myVideo");
            vidboks.style.display = "block";
            let video = "musikk/" + shuffledArray[0] + ".mp4";
            vidboks.src = video;
            vidboks.load();
            audio.pause()
            
        })

    })

    
    
});


document.getElementById("krypt").addEventListener("click", function() {
    const tal = document.getElementById("inp").value;
    console.log(tal)
    var bArray = ["a","b","c"];
    let plass = bArray.indexOf(tal);
    console.log(plass);
})
