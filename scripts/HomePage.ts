const overlay = document.getElementById("overlay") as HTMLDivElement;
function openMenu() {
    overlay.style.display = "inline-flex";
    overlay.classList.add("open");
}
function closeMenu() {
    overlay.style.display = "none";
    overlay.classList.remove("open");
}
