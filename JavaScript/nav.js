document.addEventListener("DOMContentLoaded", function(event) {
    const button = document.getElementById("navbutton")
    const navbar = document.getElementById("navzada")
    button.addEventListener("click", function() {
        navbar.classList.toggle("shownav");
    })
});