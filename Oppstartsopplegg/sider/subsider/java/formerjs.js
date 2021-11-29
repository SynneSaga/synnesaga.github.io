document.getElementById("navn").addEventListener("input", function(){
    var inn = document.getElementById("navn").value;
    document.getElementById("inOut").innerHTML = inn;
})

const price = document.querySelector('#price');
const output = document.querySelector('.price-output');
var bildet = document.getElementById("bildet");

output.textContent = price.value;

price.addEventListener('input', function() {
  output.textContent = price.value;
  if (price.value >= 100) {
    bildet.style.transform = "scaleX(1)";
    bildet.style.marginLeft = "50%";
    bildet.style.width = (price.value - 100) + "%";
  }

  else if (price.value < 100) {
      console.log("Hi")
      bildet.style.transform = "scaleX(-1)";
      bildet.style.marginLeft = "0%";
      bildet.style.width = (price.value ) + "%";
      //price.value += 50;
  }
  
});

var fargeHenter = document.getElementById("color")
var fargeUt = document.getElementsByTagName("DIV");

fargeHenter.addEventListener("input", function() {
    var fargeEndret = fargeHenter.value;
    //fargeUt.style.backgroundColor = fargeEndret;
    var i;
    for (i = 0; i < fargeUt.length; i++) {
        fargeUt[i].style.backgroundColor = fargeEndret;
    }

})

var tfargeHenter = document.getElementById("tcolor")
var tfargeUt = document.getElementsByTagName("LABEL");
var header = document.getElementById("header")

tfargeHenter.addEventListener("input", function() {
    var tfargeEndret = tfargeHenter.value;
    //fargeUt.style.backgroundColor = fargeEndret;
    var i;
    for (i = 0; i < tfargeUt.length; i++) {
        tfargeUt[i].style.color = tfargeEndret;
        header.style.color = tfargeEndret;
    }

})

