const nav = document.querySelector('nav');


toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
})

document.querySelectorAll(".nav_list-item").forEach(n => 
    n.addEventListener("click", () => {
    nav.classList.remove("active");
}))
