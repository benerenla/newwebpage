import home from "./views/home.js";
import './components/status.js'
import './components/navbar.js'
const routes = {
    "/": { title: "Home", render: home },
};


function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
};

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
navbar()


function navbar() {
    let navbar = document.createElement("div", { is: "atlas-navbar"});
    navbar.id = "main"
    document.getElementById("navbar").appendChild(navbar)
}