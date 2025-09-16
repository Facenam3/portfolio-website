let projects = [
    {
        title: "Brainster Labs",
        image: "./images/projects/project1.png",
        description: "A responsive web project created during the Brainster Full Stack curriculum. It features modern layout design using HTML, CSS, Bootstrap, interactive navigation, and clean user interface. Emphasis was on responsive design, usability, and clean, readable code.",
        type: "frontend",
        source_code: "https://github.com/Facenam3/brainster-projects/tree/main/project_01",
        live_demo: "/"
    },
    {
        title: "Brainster Library",
        image: "./images/projects/project2.png",
        description: "Created during the Brainster Full Stack curriculum. Built with HTML, CSS, Bootstrap, and PHP. Implements dynamic page rendering, form handling, and reusable PHP components to showcase a maintainable company website structure.",
        type: "frontend",
        source_code: "https://github.com/Facenam3/brainster-projects/tree/main/project_02",
        live_demo: "/"
    },
    {
        title: "Admin Panel Application",
        image: "./images/projects/project3.png",
        description: "Created during the Brainster Full Stack curriculum. Admin panel built with Laravel & Tailwind. Includes user auth, dashboards, and CRUD functionality with a clean, responsive UI.",
        type: "backend",
        source_code: "https://github.com/Facenam3/brainster-projects/tree/main/project_03",
        live_demo: "/"
    },
    {
        title: "CYA KRIK Hackathon Platform",
        image: "./images/projects/krik.png",
        description: "Full-stack platform built during a hackathon for CYA KRIK, using JavaScript, PHP, and Laravel. Focused on collaboration and delivering a responsive user experience.",
        type: "apps",
        source_code: "https://github.com/dimitrovleonardo/hackathon-krik",
        live_demo: "/"
    },
    {
        title: "VibeOnEdu – Sparkasse Hackathon Platform",
        image: "./images/projects/vibeonedu.png",
        description: "Built during a Brainster hackathon, this Laravel backend platform delivers interactive financial education, featuring user authentication, course management, and progress tracking.",
        type: "backend",
        source_code: "https://github.com/Facenam3/sparkasse-hackathon",
        live_demo: "/"
    },
    {
        title: "PHP Rent Service",
        image: "./images/projects/php-rent-service.png",
        description: "Built a custom Laravel package for a Rent-a-Car system featuring multi-step reservations, Google OAuth login, Stripe payments, and email notifications. Focused on backend architecture and third-party integrations.",
        type: "apps",
        source_code: "https://github.com/Facenam3/php-rent-service",
        live_demo: "https://php-rent-service-production.up.railway.app/"
    }
];





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
