let projects = [
    {
        title: "Brainster Labs",
        image: "./images/projects/brainster-labs.png",
        description: "A responsive web project created during the Brainster Full Stack curriculum. It features modern layout design using HTML, CSS, Bootstrap, interactive navigation, and clean user interface. Emphasis was on responsive design, usability, and clean, readable code.",
        type: "frontend",
        source_code: "https://github.com/Facenam3/brainster-labs",
        live_demo: "https://brilliant-muffin-9e6a60.netlify.app/"
    },
    {
        title: "Brainster Library",
        image: "./images/projects/brainster-library.png",
        description: "Created during the Brainster Full Stack curriculum. Built with HTML, CSS, Bootstrap, and PHP. Implements dynamic page rendering, form handling, and reusable PHP components to showcase a maintainable company website structure.",
        type: "frontend",
        source_code: "https://github.com/Facenam3/brainster-projects/tree/main/project_02",
        live_demo: "/"
    },
    {
        title: "Admin Panel Application",
        image: "./images/projects/admin-panel.png",
        description: "Created during the Brainster Full Stack curriculum. Admin panel built with Laravel & Tailwind. Includes user auth, dashboards, and CRUD functionality with a clean, responsive UI.",
        type: "backend",
        source_code: "https://github.com/Facenam3/brainster-projects/tree/main/project_03",
        live_demo: "/"
    },
    {
        title: "Managment System",
        image: "./images/projects/system-menagment.png",
        description: "A Laravel-based application designed to streamline administrative tasks. Features include user authentication, role-based access control, and a responsive dashboard for efficient management.",
        type: "backend",
        source_code: "https://github.com/Facenam3/managment-system",
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
        title: "Frontend Challenge",
        image: "./images/projects/challenge.png",
        description: "A web application built during an internship challenge, showcasing HTML, CSS, and JavaScript skills with responsive design and interactive UI.",
        type: "frontend",
        source_code: "https://github.com/Facenam3/InternshipChallenge",
        live_demo: "/"
    },
    {
        title: "PHP Rent Service",
        image: "./images/projects/php-rent-service.png",
        description: "Built a custom Laravel package for a Rent-a-Car system featuring multi-step reservations, Google OAuth login, Stripe payments, and email notifications. Focused on backend architecture and third-party integrations.",
        type: "apps",
        source_code: "https://github.com/Facenam3/php-rent-service",
        live_demo: "https://php-rent-service-production.up.railway.app/"
    },
    {
        title: "Portfolio Website",
        image: "./images/projects/portfolio.png",
        description: "Personal portfolio built with HTML, Tailwind, and JavaScript. Features responsive design, project showcase, and dynamic filtering.",
        type: "frontend",
        source_code: "https://github.com/Facenam3/portfolio-website",
        live_demo: "https://your-portfolio-url.com"
    }
];


function showProjects(filter = "all") {
    const container = document.getElementById("projects-list"); 

    const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.type === filter);

    container.innerHTML = filteredProjects
        .map((project) => {
            return `
                <li class="work_card ${project.type} relative bg-sectionColor dark:bg-darkSectionColor p-5 rounded-2xl
                                 border border-transparent hover:border-primaryColor duration-300 overflow-hidden lg:p-8">
                    <img src="${project.image}" alt="recent works" 
                        class="w-full h-60 md:h-76 lg:h-100 object-cover rounded-lg">

                    <div class="absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8">
                        <div class="flex flex-col gap-4 bg-gradient-to-r 
                                    from-primaryColorLight to-primaryColor text-whiteColor p-5 rounded-t-2xl">
                            
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-2xl font-bold lg:text-3xl">${project.title}</p>
                                    <p>${project.description}</p>
                                </div>
                                <div class="text-2xl rotate-45">
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>

                            <div class="flex gap-3">
                                <a href="${project.live_demo}" target="_blank"
                                class="px-4 py-2 bg-primaryColorLight hover:bg-gradient-to-r 
                                    from-primaryColor to-primaryColorLight text-whiteColor rounded-2xl duration-300">
                                    Live Demo
                                </a>
                                <a href="${project.source_code}" target="_blank"
                                class="px-4 py-2 bg-primaryColorLight hover:bg-gradient-to-r 
                                    from-primaryColor to-primaryColorLight text-whiteColor rounded-2xl duration-300">
                                    Source Code
                                </a>
                            </div>
                        </div>                            
                    </div>
                </li>
            `;
        })
        .join("");
}


let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector(".indicator");

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

        tabs.forEach(t => t.classList.remove("text-whiteColor"));
        tab.classList.add("text-whiteColor");

        const tabval = tab.getAttribute("data-tabs");
        showProjects(tabval); 
    });
});

showProjects();