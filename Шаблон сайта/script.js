function menuFunc() {
    var x = document.getElementById("menu-list");
    if (x.className === "menu-list") {
        x.className += " responsive";
    }
    else {
        x.className = "menu-list";
    }
}