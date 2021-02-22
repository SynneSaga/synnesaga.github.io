function darkTheme() {
    var theme = document.getElementById('darkTheme');
    theme = "dark-stilark.css";
  }
  
  function lightTheme() {
    var theme = document.getElementById('lightTheme');
    theme = "stilark.css";
  }


const btn = document.querySelector(".btn-toggle");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
});