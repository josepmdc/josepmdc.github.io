var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var savedTheme = localStorage.getItem("dark-mode-storage") || "dark";
setTheme(savedTheme);

toggle.addEventListener("click", () => {
    if (toggle.className === "fal fa-moon-o") {
        setTheme("dark");
    } else if (toggle.className === "fal fa-sun-o") {
        setTheme("light");
    }
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fal fa-sun-o";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "fal fa-moon-o";
    }
}
