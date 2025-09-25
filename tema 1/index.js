let body = document.getElementById("body")

// EJERCICIO 1
let element = prompt("introduce un dato")
let p = document.getElementById("p");
p.textContent = element

// EJERCICIO 2
let colors = document.getElementById("colors")
colors.addEventListener("change", function() {
    console.log(this.value);
})

// EJERCICIO 3
let input = document.getElementById("text")

let button = document.getElementById("button")
button.textContent = "introducir texto"
button.addEventListener("click", function () {
    let div = document.getElementById("div")
    let p = document.createElement("p")
    p.textContent = input.value
    input.value = ""
    div.appendChild(p)
})

// EJERCICIO 4
document.getElementById("imagenes").addEventListener("change", function() {
    document.getElementById("vista").src = this.value;
});

// EJERCICIO 5
function actualizarEstilo() {
    let texto = document.getElementById("texto");
    let bold = document.getElementById("negrita").value;
    let italic = document.getElementById("cursiva").value;

    texto.style.fontWeight = (bold === "si") ? "bold" : "normal";
    texto.style.fontStyle = (italic === "si") ? "italic" : "normal";
}

document.getElementById("negrita").addEventListener("change", actualizarEstilo);
document.getElementById("cursiva").addEventListener("change", actualizarEstilo);