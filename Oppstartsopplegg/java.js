window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
       document.getElementById("header").className = "stor";
       /*document.getElementById("overskriftbilde").className = "stor";
       document.getElementById("imgknapp").className = "stor";*/
    } else {
      document.getElementById("header").className = "";
      /*document.getElementById("overskriftbilde").className = "";
      document.getElementById("imgknapp").className = "";*/
    }
  }