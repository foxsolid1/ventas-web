let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.product');
    const totalSlides = slides.length;
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
    const offset = -currentSlide * 100; // Mueve el contenedor
    document.querySelector('.product-slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Inicializa la primera slide visible
showSlide(currentSlide);

function openModal(src1, src2) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";

    // Arreglo de imágenes para alternar
    let images = [src1, src2];
    let currentImageIndex = 0;

    // Muestra la primera imagen
    modalImg.src = images[currentImageIndex];

    // Cambia la imagen automáticamente cada 3 segundos
    const imageInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImg.src = images[currentImageIndex];
    },10000);

    // Guarda el intervalo en el modal para poder detenerlo al cerrar
    modal.dataset.imageInterval = imageInterval;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    // Detén el intervalo para que no siga cambiando las imágenes después de cerrar el modal
    clearInterval(modal.dataset.imageInterval);
}

// Selecciona todas las imágenes del carrusel
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0; // Índice de la imagen actual

// Función para cambiar de imagen en el carrusel principal
function changeImage() {
    // Oculta la imagen actual
    images[currentIndex].classList.remove('active');

    // Actualiza el índice de la imagen
    currentIndex = (currentIndex + 1) % images.length;

    // Muestra la nueva imagen
    images[currentIndex].classList.add('active');
}

// Inicia el carrusel principal, cambia de imagen cada 5 segundos
setInterval(changeImage, 5000);

// Muestra la primera imagen al cargar la página
images[currentIndex].classList.add('active');
