function openModal(src) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Selecciona todas las imágenes del carrusel
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0; // Índice de la imagen actual

// Función para cambiar de imagen
function changeImage() {
    // Oculta la imagen actual
    images[currentIndex].classList.remove('active');

    // Actualiza el índice de la imagen
    currentIndex = (currentIndex + 1) % images.length;

    // Muestra la nueva imagen
    images[currentIndex].classList.add('active');
}

// Inicia el carrusel, cambia de imagen cada 10 segundos
setInterval(changeImage, 10000);

// Muestra la primera imagen al cargar la página
images[currentIndex].classList.add('active');