var navLinks = document.querySelectorAll(".nav-links");

var windowPathname = window.location.pathname;

navLinks.forEach(function(navLink) {
    if (navLink.href.includes(windowPathname)) {
        navLink.classList.add("active");
    }
});

var hamburgerMenu = document.querySelector(".hamburger");
var navLinkContainer = document.querySelector(".nav-link-container");

hamburgerMenu.addEventListener("click", () => {
    navLinkContainer.classList.toggle("nav-open");
    hamburgerMenu.classList.toggle("collapse");
});