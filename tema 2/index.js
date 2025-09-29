// ejercicios 1 y 2
let number1 = 1
for (let i = 0; i<10; i++) {
    let number2 = 1
    for(let j = 0 ;j<10; j++) {
        let solution = number1 * number2
        console.log(`${number1} x ${number2} = ${solution}`)
        number2 += 1
    }
    number1 += 1
}

// ejercicio 3
let input = prompt("escribe algo o pon un numero")
checkNumber(input)

// ejercicio 4
const text1 = prompt("escribe algo")
const text2 = prompt("escribe algo de nuevo")
console.log(`${text1}`+`${text2}`)

// ejercicio 5
number1 = prompt("escribe algo o pon un numero")
checkNumber(number1)
number2 = prompt("escribe algo o pon un numero")
checkNumber(number2)
if ((Number(number1)) || Number(number1)) {
    console.log(`${number1 + number2}`)
} else {
    console.log("error al realizar la suma")
}

// ejercicio 6
number1 = prompt("escribe algo o pon un numero")
checkNumber(number1)
number2 = prompt("escribe algo o pon un numero")
checkNumber(number2)
if ((Number(number1)) && (Number(number2))) {
    let caracter = prompt("introduce un caracter operacional")
    if (caracter === "+") {
        console.log(`${number1 + number2}`)
    } else if (caracter === "-") {
        console.log(`${number1 - number2}`)
    } else if (caracter === "*") {
        console.log(`${number1 * number2}`)
    } else if (caracter === "/") {
        if ((number1 !== 0) || (number2 !== 0)) {
            alert("no se puede dividir entre 0")
        } else {
            console.log(`${number1 / number2}`)
        }
    }
} else {
    console.log("error al realizar la operacion")
}

// ejercicio 7
number1 = prompt("nota de bases de datos")
checkNumber(number1)
number2 = prompt("nota de programacion")
checkNumber(number2)
let number3 = prompt("nota de lenguaje de marcas")
checkNumber(number3)
if ((Number(number1)) && (Number(number2)) && (Number(number3))) {
    let media = (number1 + number2 + number3)/3
    if (media > 5) {
        console.log(`aprobado con un ${media}`)
    } else {
        console.log(`suspendido con un ${media}`)
    }
} else {
    console.log("error al realizar la operacion")
}

// ejercicio 8
number1 = prompt("nota de bases de datos")
checkNumber(number1)
number2 = prompt("nota de programacion")
checkNumber(number2)
if ((Number(number1)) && (Number(number2))) {
    if (number1 > number2) {
        console.log("el primer numero es mayor que el segundo")
    } else if (number1 < number2) {
        console.log("el primer numero es menor que el segundo")
    } else {
        console.log("los dos numeros son iguales")
    }
} else {
    console.log("error al realizar la operacion")
}

// ejercicio 9
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
let year = parseInt(prompt("Introduce un año (yyyy):"), 10);
let month = parseInt(prompt("Introduce un mes (1-12):"), 10);
let day = parseInt(prompt("Introduce un día:"), 10);
let daysMonth;
switch(month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        daysMonth = 31;
        break;
    case 4: case 6: case 9: case 11:
        daysMonth = 30;
        break;
    case 2:
        daysMonth = isLeapYear(year) ? 29 : 28;
        break;
    default:
        daysMonth = -1;
}
if (year > 0 && month >= 1 && month <= 12 && day >= 1 && day <= daysMonth) {
    let dd = String(day).padStart(2, "0");
    let mm = String(month).padStart(2, "0");
    alert(`La fecha válida es: ${dd}/${mm}/${year}`);
} else {
    alert("La fecha introducida NO es válida.");
}

// ejercicio 10
let square = "";
let size = 5
for (let i = 0; i < size; i++) {
    if (i === 0 || i === size - 1) {
        square += "*".repeat(size) + "\n";
    } else {
        // Filas intermedias: asteriscos en los bordes
        square += "*" + " ".repeat(size - 2) + "*" + "\n";
    }
}
console.log(square);

// ejercicio 11
const maxWidth = 7;
let lines = [];
for (let stars = 1; stars <= maxWidth; stars += 2) {
    const line = '*'.repeat(stars);
    const padded = line.padStart( Math.floor((maxWidth - stars)/2) + stars );
    lines.push(padded);
}
for (let stars = maxWidth - 2; stars >= 1; stars -= 2) {
    const line = '*'.repeat(stars);
    const padded = line.padStart( Math.floor((maxWidth - stars)/2) + stars );
    lines.push(padded);
}
document.getElementById('figura').textContent = lines.join('\n');


function checkNumber(number) {
    if (Number.isInteger(Number(number))) {
        console.log("es un numero entero")
    } else {
        console.log("no es un numero entero")
    }
}