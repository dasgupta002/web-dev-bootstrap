const btn = document.getElementById("mobile")
const menu = document.getElementById("nav")

btn.addEventListener("click", function() {
    if(menu.classList.contains("d-none")){
        menu.classList.remove("d-none")
    } else {
        menu.classList.add("d-none")
    }
})