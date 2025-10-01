/*

Ejercicio 3.6. Contar los caracteres, palabras, caracteres sin espacios y números que aparecen en
una frase introducida por pantalla.

Ejercicio 3.7. Mostrar en la consola del navegador la URL completa, el hostname, el path, el protocol y el port.

Ejercicio 3.8. Crear un botón que, al pulsarlo, cargue la página de Google (https://www.google.com).

Ejercicio 3.9. : Mostrar la URL de dos imágenes que estén en pantalla utilizando document.images.

Ejercicio 3.10. Mostrar en pantalla las dimensiones de la ventana y actualizarlas cuando se redimensione.

Ejercicio 3.11. Crear una página con dos botones: uno que avance en el historial (history.forward()) y otro que retroceda (history.back()).

Ejercicio 3.12. Mostrar en pantalla las características de la pantalla (width, height, availWidth, availHeight, colorDepth, pixelDepth).

Ejercicio 3.13. Crear una página con dos botones: Crear Nueva Ventana (abre Google en una nueva ventana) y Cerrar Ventana (cierra la ventana abierta).

Ejercicio 3.14. Realizar una calculadora básica que permita introducir dos números y seleccionar una operación (sumar, restar, multiplicar o dividir).

Ejercicio 3.15. Generar dos números aleatorios entre 0 y 99. Pedir al usuario que introduzca la suma
de ambos. El programa deberá comprobar si el resultado es correcto y mostrar el tiempo que tarda en resolverlo.

Ejercicio 3.16. Mostrar en pantalla la posición del ratón en píxeles y, en otro campo, mostrar la posición donde se ha hecho clic.

Ejercicio 3.17. Pedir un código postal y mostrar si pertenece a Madrid, Barcelona u otra localidad.
Validar que el código tiene 5 dígitos numéricos.
Si empieza por 28 → Madrid.
Si empieza por 08 → Barcelona.
En otro caso → Otra.

Ejercicio 3.18 Pedir una cadena en un input y, al pulsar un botón, mostrar la misma cadena invertida.

Ejercicio 3.19 : Construir una pantalla con un párrafo de texto y dos campos de texto. Al pulsar
un botón, se debe buscar una subcadena dentro del párrafo y reemplazarla por otra introducida en el segundo campo.

Ejercicio 3.20 : Introducir un texto y una cadena. El programa debe mostrar cuántas veces aparece esa cadena dentro del texto introducido.
 */
let body = document.getElementById("cuerpo")
// EJERCICIO 1
let h2 = document.createElement("h2")
h2.innerText = "ejercicio 1"
body.appendChild(h2)
let relog = document.createElement("div")
body.appendChild(relog)
function actualizarReloj() {
    const dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
    const meses = ["enero","febrero","marzo","abril","mayo","junio", "julio","agosto","septiembre","octubre","noviembre","diciembre"];
    const ahora = new Date();
    const diaSemana = dias[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2,'0');
    const minutos = String(ahora.getMinutes()).padStart(2,'0');
    const segundos = String(ahora.getSeconds()).padStart(2,'0');
    relog.innerText = `${diaSemana} ${dia} ${mes} ${anio} ${horas}:${minutos}:${segundos}`;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();

// EJERCICIO 2
h2 = document.createElement("h2")
h2.innerText = "ejercicio 2"
body.appendChild(h2)
let cronometro = document.createElement("div")
cronometro.innerText = "00:00:00"
let botonIniciar = document.createElement("button")
botonIniciar.textContent = "iniciar"
let botonPausar = document.createElement("button")
botonPausar.textContent = "pausar"
let botonReanudar = document.createElement("button")
botonReanudar.textContent = "reanudar"
let botonReiniciar = document.createElement("button")
botonReiniciar.textContent = "reiniciar"
body.appendChild(cronometro)
body.appendChild(botonIniciar)
body.appendChild(botonPausar)
body.appendChild(botonReanudar)
body.appendChild(botonReiniciar)
let horas = 0, minutos = 0, segundos = 0;
let intervalo = null;
let pausado = false;
botonIniciar.addEventListener("click", function iniciar() {
    if (intervalo === null) {
        intervalo = setInterval(actualizarCronometro, 1000);
    }
})
botonPausar.addEventListener("click", function pausar() {
    clearInterval(intervalo);
    intervalo = null;
    pausado = true;
})
botonReanudar.addEventListener("click", function reanudar() {
    if (pausado && intervalo === null) {
        intervalo = setInterval(actualizarCronometro, 1000);
        pausado = false;
    }
})
botonReiniciar.addEventListener("click", function reiniciar() {
    clearInterval(intervalo);
    intervalo = null;
    horas = 0;
    minutos = 0;
    segundos = 0;
    cronometro.innerText = "00:00:00";
})
function actualizarCronometro() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    cronometro.innerText = String(horas).padStart(2,'0') + ":" + String(minutos).padStart(2,'0') + ":" + String(segundos).padStart(2,'0');
}

// EJERCICIO 3
h2 = document.createElement("h2")
h2.innerText = "ejercicio 3"
body.appendChild(h2)
let fechaYHora = document.createElement("div")
body.appendChild(fechaYHora)
const ahora = new Date();
const dia = String(ahora.getDate()).padStart(2, '0');
const mes = String(ahora.getMonth() + 1).padStart(2, '0');
const anio = ahora.getFullYear();
horas = String(ahora.getHours()).padStart(2, '0');
minutos = String(ahora.getMinutes()).padStart(2, '0');
segundos = String(ahora.getSeconds()).padStart(2, '0');
const milisegundos = ahora.getTime();
fechaYHora.innerText = `Fecha actual: ${dia}/${mes}/${anio} Hora: ${horas}:${minutos}:${segundos} Milisegundos: ${milisegundos}`;

// EJERCICIO 4
h2 = document.createElement("h2")
h2.innerText = "ejercicio 4"
body.appendChild(h2)
let botonDado = document.createElement("button")
botonDado.textContent = "lanzar dado"
body.appendChild(botonDado)
let resultadoDado = document.createElement("div")
body.appendChild(resultadoDado)
botonDado.addEventListener("click", function lanzarDado() {
    const dado = Math.floor(Math.random() * 6) + 1;
    const mayorQueTres = dado > 3;
    resultadoDado.innerText = `Resultado: ${dado} → Mayor que 3: ${mayorQueTres}`;
})

// EJERCICIO 5
h2 = document.createElement("h2")
h2.innerText = "ejercicio 5"
body.appendChild(h2)
let info = document.createElement("div")
body.appendChild(info)
const userAgent = navigator.userAgent;
let navegador = "Desconocido";
if (userAgent.includes("Chrome") && !userAgent.includes("Edge")) {
    const match = userAgent.match(/Chrome\/[\d.]+/);
    navegador = match ? match[0] : "Chrome (versión desconocida)";
} else if (userAgent.includes("Firefox")) {
    const match = userAgent.match(/Firefox\/[\d.]+/);
    navegador = match ? match[0] : "Firefox (versión desconocida)";
} else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    const match = userAgent.match(/Version\/[\d.]+/);
    navegador = match ? "Safari/" + match[0].split("/")[1] : "Safari (versión desconocida)";
} else if (userAgent.includes("Edge")) {
    const match = userAgent.match(/Edg\/[\d.]+/);
    navegador = match ? match[0] : "Edge (versión desconocida)";
}
info.innerText = `Navegador: ${navegador}\nUserAgent: ${userAgent}`;

// EJERCICIO 6
h2 = document.createElement("h2")
h2.innerText = "ejercicio 6"
body.appendChild(h2)
let botonAnalizador = document.createElement("button")
botonAnalizador.textContent = "introducir frase"
body.appendChild(botonAnalizador)
let analisis = document.createElement("div")
body.appendChild(analisis)
botonAnalizador.addEventListener("click", function analizarFrase() {
    const frase = prompt("Introduce una frase:");
    if (!frase) return;
    const totalCaracteres = frase.length;
    const totalSinEspacios = frase.replace(/\s/g, '').length;
    const totalPalabras = frase.trim().split(/\s+/).length;
    const totalNumeros = (frase.match(/\d/g) || []).length;
    analisis.innerHTML =
        `<p>Total de caracteres: ${totalCaracteres}</p>
         <p>Total de caracteres sin espacios: ${totalSinEspacios}</p>
         <p>Total de palabras: ${totalPalabras}</p>
         <p>Total de números: ${totalNumeros}</p>`;
})

// EJERCICIO 7
h2 = document.createElement("h2")
h2.innerText = "ejercicio 7"
body.appendChild(h2)
let botonURL = document.createElement("button")
botonURL.textContent = "mostrar informacion en la consola"
body.appendChild(botonURL)
botonURL.addEventListener("click", function mostrarURL() {
    console.log("URL completa: " + window.location.href);
    console.log("Hostname: " + window.location.hostname);
    console.log("Path: " + window.location.pathname);
    console.log("Protocolo: " + window.location.protocol);
    console.log("Puerto: " + window.location.port);
    alert("Revisa la consola del navegador para ver la información completa.");
})

// EJERCICIO 8
h2 = document.createElement("h2")
h2.innerText = "ejercicio 8"
body.appendChild(h2)
let buttonWebSite = document.createElement("button")
buttonWebSite.textContent = "ir a google"
body.appendChild(buttonWebSite)
buttonWebSite.addEventListener("click", function irAGoogle() {
    window.location.href = "https://www.google.com";
})

// EJERCICIO 9
h2 = document.createElement("h2")
h2.innerText = "ejercicio 9"
body.appendChild(h2)
let img1 = document.createElement("img")
img1.src = "../assets/img/imagen1.jpg"
img1.alt = "imagen 1"
img1.style.width = "5rem"
body.appendChild(img1)
let img2 = document.createElement("img")
img2.src = "../assets/img/imagen2.jpg"
img2.alt = "imagen 2"
img2.style.width = "5rem"
body.appendChild(img2)
botonURL = document.createElement("button")
botonURL.textContent = "mostrar las URLs"
body.appendChild(botonURL)
let resultadoURLs = document.createElement("div")
body.appendChild(resultadoURLs)
botonURL.addEventListener("click", function mostrarURLs() {
    const imagenes = document.images;
    let texto = "";
    for (let i = 0; i < 2 && i < imagenes.length; i++) {
        texto += `Imagen ${i+1}: ${imagenes[i].src}<br>`;
    }
    resultadoURLs.innerHTML = texto;
})

// EJERCICICO 10
h2 = document.createElement("h2")
h2.innerText = "ejercicio 10"
body.appendChild(h2)
let dimensiones = document.createElement("div")
body.appendChild(dimensiones)
function actualizarDimensiones() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    dimensiones.innerText = `Ancho: ${ancho}px, Alto: ${alto}px`;
}
actualizarDimensiones();
window.addEventListener("resize", actualizarDimensiones);

// EJERCICIO 11
h2 = document.createElement("h2")
h2.innerText = "ejercicio 11"
body.appendChild(h2)
let botonAvancar = document.createElement("button")
botonAvancar.textContent = "avanzar"
body.appendChild(botonAvancar)
let botonRetroceder = document.createElement("button")
botonRetroceder.textContent = "retroceder"
body.appendChild(botonRetroceder)
botonAvancar.addEventListener("click", function avanzar() {
    history.forward();
})
botonRetroceder.addEventListener("click", function retroceder() {
    history.back();
})

// EJERCICIO 12
h2 = document.createElement("h2")
h2.innerText = "ejercicio 12"
body.appendChild(h2)
let analisisPantalla = document.createElement("div")
body.appendChild(analisisPantalla)
function mostrarPantalla() {
    const pantalla = window.screen;
    analisisPantalla.innerHTML = `
        <p>Ancho: ${pantalla.width}px</p>
        <p>Alto: ${pantalla.height}px</p>
        <p>Ancho disponible: ${pantalla.availWidth}px</p>
        <p>Alto disponible: ${pantalla.availHeight}px</p>
        <p>Profundidad de color: ${pantalla.colorDepth} bits</p>
        <p>Profundidad de píxeles: ${pantalla.pixelDepth} bits</p>
      `;
}
mostrarPantalla();

// EJERCICIO 13
h2 = document.createElement("h2")
h2.innerText = "ejercicio 13"
body.appendChild(h2)
let botonAbrirVentana = document.createElement("button")
botonAbrirVentana.textContent = "abrir ventana"
body.appendChild(botonAbrirVentana)
let botonCerrarVentana = document.createElement("button")
botonCerrarVentana.textContent = "cerrar ventana"
body.appendChild(botonCerrarVentana)
let nuevaVentana = null;
botonAbrirVentana.addEventListener("click", function abrirVentana() {
    nuevaVentana = window.open("https://www.google.com", "GoogleWindow", "width=600,height=400");
})
botonCerrarVentana.addEventListener("click", function cerrarVentana() {
    if (nuevaVentana && !nuevaVentana.closed) {
        nuevaVentana.close();
    } else {
        alert("No hay ventana abierta para cerrar.");
    }
})

// EJERCICIO 14
h2 = document.createElement("h2")
h2.innerText = "ejercicio 14"
body.appendChild(h2)
let numero1 = document.createElement("input")
numero1.textContent = "introduce un numero"
body.appendChild(numero1)
let numero2 = document.createElement("input")
numero2.textContent = "introduce un numero"
body.appendChild(numero2)
let operador = document.createElement("select")
operador.id = "operacion"
body.appendChild(operador)
let suma = document.createElement("option")
let resta = document.createElement("option")
let multiplicacion = document.createElement("option")
let division = document.createElement("option")
suma.value = "sumar"
suma.textContent = "sumar"
resta.value = "restar"
resta.textContent = "restar"
multiplicacion.value = "multiplicar"
multiplicacion.textContent = "multiplicar"
division.value = "dividir"
division.textContent = "dividir"
operador.appendChild(suma)
operador.appendChild(resta)
operador.appendChild(multiplicacion)
operador.appendChild(division)
let botonResultado = document.createElement("button")
botonResultado.textContent = "calcular resultado"
body.appendChild(botonResultado)
let resultado = document.createElement("div")
body.appendChild(resultado)
botonResultado.addEventListener("click", function calcular() {
    const n1 = parseFloat(numero1.value)
    const n2 = parseFloat(numero2.value)
    const op = operador.value;
    if (isNaN(n1) || isNaN(n2)) {
        alert("Introduce números válidos.");
        return;
    }
    let res;
    switch(op) {
        case "sumar": res = n1 + n2; break;
        case "restar": res = n1 - n2; break;
        case "multiplicar": res = n1 * n2; break;
        case "dividir":
            if (n2 === 0) {
                alert("No se puede dividir entre 0");
                return;
            }
            res = n1 / n2;
            break;
        default: res = "Operación no válida";
    }
    resultado.innerText = `Resultado: ${res}`;
})

// EJERCICIO 15
h2 = document.createElement("h2")
h2.innerText = "ejercicio 15"
body.appendChild(h2)
let botonJuego = document.createElement("button")
botonJuego.textContent = "jugar juego"
body.appendChild(botonJuego)
botonJuego.addEventListener("click", function jugar() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const inicio = Date.now();
    const respuesta = prompt(`¿Cuánto es ${num1} + ${num2}?`);
    const fin = Date.now();
    if (respuesta === null) return;
    const tiempo = ((fin - inicio) / 1000).toFixed(2); // en segundos
    const correcto = parseInt(respuesta) === (num1 + num2);
    alert(`Tu respuesta es ${correcto ? "correcta" : "incorrecta"}.Tiempo empleado: ${tiempo} segundos.`);
})

// EJERCICIO 16
h2 = document.createElement("h2")
h2.innerText = "ejercicio 16"
body.appendChild(h2)
let posicionRaton = document.createElement("div")
let raton = document.createElement("p")
raton.innerText = "Mouse: X=0, Y=0"
let click = document.createElement("p")
click.innerText = "Clic: X=0, Y=0"
posicionRaton.appendChild(raton)
posicionRaton.appendChild(click)
body.appendChild(posicionRaton)
document.addEventListener("mousemove", (e) => {
    posicionRaton.children[0].innerText = `Mouse: X=${e.clientX}, Y=${e.clientY}`;
});
document.addEventListener("click", (e) => {
    posicionRaton.children[1].innerText = `Clic: X=${e.clientX}, Y=${e.clientY}`;
});

// EJERCICIO 17
h2 = document.createElement("h2")
h2.innerText = "ejercicio 17"
body.appendChild(h2)
let botonLocalidad = document.createElement("button")
botonLocalidad.textContent = "ver localidad"
body.appendChild(botonLocalidad)
let resultadoLocalidad = document.createElement("div")
body.appendChild(resultadoLocalidad)
botonLocalidad.addEventListener("click", function verLocalidad() {
    const cp = prompt("Introduce un código postal de 5 dígitos:");
    if (!cp || !/^\d{5}$/.test(cp)) {
        alert("Código postal inválido. Debe tener 5 dígitos numéricos.");
        return;
    }
    let localidad;
    if (cp.startsWith("28")) {
        localidad = "Madrid";
    } else if (cp.startsWith("08")) {
        localidad = "Barcelona";
    } else {
        localidad = "Otra localidad";
    }
    resultadoLocalidad.innerText = `Código postal: ${cp} → Localidad: ${localidad}`;
})

// EJERCICIO 18
h2 = document.createElement("h2")
h2.innerText = "ejercicio 18"
body.appendChild(h2)
input = document.createElement("input")
input.placeholder = "escribe algo"
body.appendChild(input)
let botonInversion = document.createElement("button")
botonInversion.textContent = "invertir cadena"
body.appendChild(botonInversion)
let cadenaInvertida = document.createElement("div")
body.appendChild(cadenaInvertida)
botonInversion.addEventListener("click", function invertirCadena() {
    const texto = input.value;
    const invertido = texto.split('').reverse().join('');
    cadenaInvertida.innerText = `Invertido: ${invertido}`;
})

// EJERCICIO 19
h2 = document.createElement("h2")
h2.innerText = "ejercicio 19"
body.appendChild(h2)
let div1 = document.createElement("div")
div1.innerHTML = "<p id=\"parrafo\">Este es un ejemplo de párrafo donde reemplazaremos palabras.</p>\n" +
    "\n" +
    "  <input type=\"text\" id=\"buscar\" placeholder=\"Palabra a buscar\">\n" +
    "  <input type=\"text\" id=\"reemplazar\" placeholder=\"Palabra nueva\">\n" +
    "  <button onclick=\"reemplazarTexto()\">Reemplazar</button>"
body.appendChild(div1)
function reemplazarTexto() {
    const parrafo = document.getElementById("parrafo");
    const buscar = document.getElementById("buscar").value;
    const reemplazar = document.getElementById("reemplazar").value;
    if (!buscar) {
        alert("Introduce la palabra a buscar.");
        return;
    }
    const regex = new RegExp(buscar, 'g');
    parrafo.innerText = parrafo.innerText.replace(regex, reemplazar);
}

// EJERCICIO 20
h2 = document.createElement("h2")
h2.innerText = "ejercicio 20"
body.appendChild(h2)
let div2 = document.createElement("div")
div2.innerHTML = "\n" +
    "  <textarea id=\"texto\" rows=\"5\" cols=\"50\" placeholder=\"Escribe tu texto aquí\"></textarea><br>\n" +
    "  <input type=\"text\" id=\"cadena\" placeholder=\"Cadena a buscar\">\n" +
    "  <button onclick=\"contarApariciones()\">Contar</button>\n" +
    "\n" +
    "  <div id=\"resultado\"></div>"
body.appendChild(div2)
function contarApariciones() {
    const texto = document.getElementById("texto").value;
    const cadena = document.getElementById("cadena").value;
    if (!cadena) {
        alert("Introduce la cadena a buscar.");
        return;
    }
    const regex = new RegExp(cadena.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const coincidencias = texto.match(regex);
    const cantidad = coincidencias ? coincidencias.length : 0;
    document.getElementById("resultado").innerText = `La cadena "${cadena}" aparece ${cantidad} veces en el texto.`;
}