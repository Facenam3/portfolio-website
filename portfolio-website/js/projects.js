let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector(".indicator");
const all = document.querySelectorAll(".work_card");
const frontend = document.querySelectorAll('.frontend');
const backend = document.querySelectorAll(".backend");
const apps = document.querySelectorAll('.apps');

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

        tabs.forEach(t => t.classList.remove("text-whitecolor"));
        tab.classList.add("text-whiteColor");

        const tabval = tab.getAttribute("data-tabs");

        all.forEach(item => {
            item.style.display = "none";
        });

        if(tabval == "frontend") {
            frontend.forEach(item => {
                item.style.display = "block";
            });
        } else if(tabval == "backend") {
            backend.forEach(item => {
                item.style.display = "block";
            });
        } else if (tabval == "apps") {
            apps.forEach(item => {
                item.style.display = "block";
            });
        } else {
            all.forEach(item => {
            item.style.display = "block";
        });
        }
    });
});
