forespørsel.onload = function(){
    var data = JSON.parse(this.response)

    if(forespørsel.status >= 200 && forespørsel.status < 400) {
        data.forEach(film => {
            console.log(film.title);
            var boks = document.createElement("div");
            boks.setAttribute("class","boks");
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
        })
    }
    else{
        console.log("error")
    }

    
}

forespørsel.send();

