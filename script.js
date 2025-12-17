const lampadina = document.getElementById("lampadina");
const bottone = document.getElementById("toggleBtn");

let accesa = false;

bottone.addEventListener("click", function () {

    if (!accesa) {
        lampadina.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        bottone.textContent = "Spegni";
        bottone.classList.remove("btn-success");
        bottone.classList.add("btn-danger");
        accesa = true;
    } 
    else {
        lampadina.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        bottone.textContent = "Accendi";
        bottone.classList.remove("btn-danger");
        bottone.classList.add("btn-success");
        accesa = false;
    }

});