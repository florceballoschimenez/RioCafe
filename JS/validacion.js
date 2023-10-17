function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;
    var comida = document.querySelector('input[name="comida"]:checked');
    var personas = document.getElementById("personas").value;
    
    // Validación de que todos los campos estan completos
    if (nombre === "" || apellido === "" || telefono === "" || email === "" || fecha === "" || !comida || personas === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validación de que nombre y apellido contengan solo letras
    var regexLetras = /^[A-Za-z]+$/;
    if (!nombre.match(regexLetras) || !apellido.match(regexLetras)) {
        alert("Nombre y apellido deben contener solo letras.");
        return false;
    }

    // Validación de que el teléfono contenga solo números
    var regexNumeros = /^\d+$/;
    if (!telefono.match(regexNumeros)) {
        alert("El teléfono debe contener solo números.");
        return false;
    }

    // Validación de que la fecha sea posterior a la fecha actual
    var fechaActual = new Date();
    var fechaReserva = new Date(fecha);
    if (fechaReserva <= fechaActual) {
        alert("La fecha de reserva debe ser posterior a la fecha actual.");
        return false;
    }

    // Si la validación esta bien, muestra un mensaje de éxito
    alert("Su reserva ha sido tomada con éxito.");
    return true;
}

//PROBANDO CARRUSEL
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

function showImage(index) {
    const slideWidth = carousel.clientWidth;
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    showImage(currentIndex);
});

showImage(currentIndex);