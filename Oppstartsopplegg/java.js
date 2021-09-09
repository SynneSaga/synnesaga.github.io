window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
       document.getElementById("header").className = "stor";
       document.getElementById("klokke").className = "stor";
       document.getElementById("tilbake").className = "stor";
       document.getElementById("meny").className = "stor";
    } else {
      document.getElementById("header").className = "";
      document.getElementById("klokke").className = "";
      document.getElementById("tilbake").className = "";
      document.getElementById("meny").className = "";
    }
  }

function farger(){
    const btn = document.querySelector(".lysmodus");
    const theme = document.querySelector("#tema-link");
     
    btn.addEventListener("click", function() {
      if (theme.getAttribute("href") == "stil.css") {
        theme.href = "dark-stil.css";
      } else {
        theme.href = "stil.css";
      }
  });
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("klokke").innerHTML =  h + ":" + m + ":" + s;
    document.getElementById("klokke").innerText = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}


document.getElementById("lang").innerHTML = ("Language: " + navigator.language);

if (navigator.language == "nb.NO") {
    console.log("Nordmann");
    document.getElementById("språk").innerHTML = ("Nordmann, jaha");
}
else if (navigator.language == "en-US") {
  console.log("ingles");
  document.getElementById("språk").innerHTML = ("Eww American");
  //document.getElementById("#").className = "#";
}

else if (navigator.language == "en-GB") {
  console.log("ingles but better");
  document.getElementById("språk").innerHTML = ("Bri'ish, ay?");
  //document.getElementById("#").className = "#";
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var namn = prompt("What's your name, kiddo?");
console.log("Hei, " + namn);
if (namn == "") {
  document.getElementById("navnet").innerHTML = ("Velko- nei vel :/")
}

else {document.getElementById("navnet").innerHTML = ("Velkommen, " + namn + "!")}