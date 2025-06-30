function openNav() {
    let myNav = document.getElementById("myNav").style.display
    if (myNav === "flex") {
        document.getElementById("myNav").style.display = "none";
    } else {
        document.getElementById("myNav").style.display = "flex";
    }
}
window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        document.getElementById("myNav").style.display = "flex";
    } else {
        document.getElementById("myNav").style.display = "none";
    }
})
