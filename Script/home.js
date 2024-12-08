let menu = document.getElementById("menu-bar");
let pages = document.querySelectorAll(".page");
let menuBtn = document.getElementById("menu-btn");
let result = false;
menuBtn.addEventListener("click", () => {
    if (result == false) {
        result = true;
        menu.classList.add("show");
        menu.classList.remove("hide");
    }
    else if (result == true) {
        result = false;
        menu.classList.add("hide");
        menu.classList.remove("show");
    }
});

pages.forEach((page) => {
    page.addEventListener("click", () => {
        result = false;
        menu.classList.add("hide");
        menu.classList.remove("show");
    });
});

