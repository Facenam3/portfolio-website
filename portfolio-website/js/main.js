const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll('nav-link');
const closeIcon = document.getElementById("nav-close");

navLink.forEach((link) => {
    link.addEventListener("click" , () => {
        navMenu.classList.add("hidden");
    });
});

closeIcon.addEventListener("click" , () => {
    navMenu.classList.add("hidden");
});
hamburger.addEventListener("click" , () => {
     navMenu.classList.remove("hidden");
});

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") === "dark") {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener("click", () => {
    if (localStorage.getItem("mode") === "light") {
        darkMode();
    } else {
        lightMode();
    }
});

function darkMode() {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}


const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener("scroll" , scrollUp);
