const btn = document.querySelector(".burger");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".link");
// Open and close navigation when pressing button
btn.addEventListener("click", () => {
    // Checking the value of visible every time there is clicked
    const visible = nav.getAttribute("data-visible");
    if (visible === "false") {
        nav.setAttribute("data-visible", true);
        btn.setAttribute("aria-expanded", true);
    } else if (visible === "true") {
        nav.setAttribute("data-visible", false);
        btn.setAttribute("aria-expanded", false);
    }
});
// Close navigation when pressing links
links.forEach(function(link){
    link.addEventListener("click", () => {
        nav.setAttribute("data-visible", false);
        btn.setAttribute("aria-expanded", false);
    })
});