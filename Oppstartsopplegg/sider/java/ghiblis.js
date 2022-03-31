var side = document.getElementById("root");

var logo = document.createElement("img");
logo.setAttribute("class","logo");
logo.src = "bilder/ourple.png";

var container = document.createElement("div");
container.setAttribute("id","container")

side.appendChild(logo)
side.appendChild(container)

var forespørsel = new XMLHttpRequest;

forespørsel.open("GET", "https://ghibliapi.herokuapp.com/films", true)



forespørsel.onload = function(){
    var data = JSON.parse(this.response)

    if(forespørsel.status >= 200 && forespørsel.status < 400) {
        
        for (i=0;data.length;i++){
            console.log(data[i].title);
            var boks = document.createElement("div");
            boks.setAttribute("class","boks");
            boks.setAttribute("id","boksnr" + i)
            var h1 = document.createElement("h1");
            h1.textContent = data[i].title;
            var p = document.createElement("p");
            data[i].description = data[i].description.substring(0,300);
            p.textContent = `${data[i].description}...`;
            var poster = document.createElement("img");
            poster.setAttribute("class","poster")
            poster.src = data[i].movie_banner;
            container.appendChild(boks);
            boks.appendChild(h1);
            boks.appendChild(poster)
            boks.appendChild(p);

           
        }

        /*data.forEach(film => {
            console.log(film.title);
            var boks = document.createElement("div");
            boks.setAttribute("class","boks");
            boks.setAttribute("id","")
            var h1 = document.createElement("h1");
            h1.textContent = film.title;
            var p = document.createElement("p");
            film.description = film.description.substring(0,300);
            p.textContent = `${film.description}...`;
            var poster = document.createElement("img");
            poster.setAttribute("class","poster")
            poster.src = film.movie_banner;
            container.appendChild(boks);
            boks.appendChild(h1);
            boks.appendChild(poster)
            boks.appendChild(p);

        })*/
    }
    else{
        console.log("error")
    }
    
    document.getElementById("boksnr" + i).addEventListener("click", function(){
        console.log(i)
        console.log("hadb")
    })
}

forespørsel.send();





const bokser = document.querySelectorAll("div.boks");

console.log(bokser)
 for (let i = 0; i < bokser.length; i++) {
    bokser[i].addEventListener("click", function() {
        //bokser[i].classList.toggle("red");
        console.log("ha")
     });
 }


/*function bokstrykket(){
    var hverboks = document.getElementsByClassName("boks");
    console.log(hverboks)

    for(let i = 0; i < hverboks.length; i++) {
        hverboks[i].addEventListener("click", function() {
          console.log("Clicked index: " + i);
        })
      }
}
*/
