const numeroEntrada = document.getElementById("numero");
const intentosDiv = document.getElementById("intentos");
const mensajeDiv = document.getElementById("mensaje");

let numeroMagico = Math.floor(Math.random() * 100) + 1;
let numeroIntentos = 3;

// Muestra el número en un popup al cargar (útil para hacer pruebas)
alert("El número mágico es: " + numeroMagico);

function adivinar() {
    let intento = numeroEntrada.value;
    numeroIntentos = numeroIntentos - 1;

    if (intento == numeroMagico) {
        mensajeDiv.innerHTML = "¡Felicidades! Adivinaste el número mágico.";
        mensajeDiv.style.color = "green"; // Un toquecito de color
        return;
    }

    if (numeroIntentos == 0) {
            mensajeDiv.innerHTML = "Lo siento, has perdido. El número mágico era " + numeroMagico;
            mensajeDiv.style.color = "red";
            return;
    }
    if (intento < numeroMagico) {
        mensajeDiv.innerHTML = "El número mágico es mayor.";
        mensajeDiv.style.color = "orange";
    } else if (intento > numeroMagico) {
        mensajeDiv.innerHTML = "El número mágico es menor.";
        mensajeDiv.style.color = "orange";
    }

    intentosDiv.textContent = "Intentos restantes: " + numeroIntentos;
    numeroEntrada.value = ""; // Limpia el campo de entrada
}