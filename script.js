var mycolor = document.querySelector("h3");
var c1 = document.querySelector(".first_color");
var c2 = document.querySelector(".second_color");
var body= document.getElementById("gradient")

function setbg(){
    body.style.background = "linear-gradient(to right, "
     + c1.value + ", " +c2.value + ")";
     mycolor.textContent = body.style.background+";";
}

c1.addEventListener("input", setbg)

c2.addEventListener("input", setbg)

