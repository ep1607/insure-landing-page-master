function mobileMenu() {

    var menu = document.getElementById("mobile-menu");
    var button = document.getElementById("menu-toggle");
    var main = document.getElementById("main-content");
    var footer = document.getElementById("footer-content");
    
    if (menu.style.opacity === "100") {
        menu.style.opacity = "0";
        button.style.backgroundImage = "url('images/icon-hamburger.svg')";
        main.classList.remove("blur");
        footer.classList.remove("blur");

    } else {
        menu.style.opacity = "100";
        button.style.backgroundImage = "url('images/icon-close.svg')";
        main.classList.add("blur");
        footer.classList.add("blur");
    }



}