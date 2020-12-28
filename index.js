const bar = document.getElementById("BarMenu")
const navUL = document.getElementById("nav_links")


bar.addEventListener('click', () =>{

    navUL.classList.toggle('show');
})