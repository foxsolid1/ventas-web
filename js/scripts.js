// Abre el modal y alterna entre dos imágenes
function openModal(src1, src2) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";

    // Arreglo de imágenes para alternar
    let images = [src1, src2];
    let currentImageIndex = 0;

    // Muestra la primera imagen
    modalImg.src = images[currentImageIndex];

    // Cambia la imagen automáticamente cada 5 segundos
    const imageInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImg.src = images[currentImageIndex];
    }, 5000); // 5000 milisegundos = 5 segundos

    // Guarda el ID del intervalo en una propiedad del modal
    modal.imageInterval = imageInterval;
}

// Cierra el modal y detiene el cambio de imágenes
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    // Detiene el intervalo para evitar que siga cambiando las imágenes
    if (modal.imageInterval) {
        clearInterval(modal.imageInterval);
        modal.imageInterval = null;
    }
}

// Función para cambiar de imagen en el carrusel principal
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0; // Índice de la imagen actual

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Inicia el carrusel principal, cambia de imagen cada 10 segundos
setInterval(changeImage, 10000);
images[currentIndex].classList.add('active');

// Galería de Imágenes Simple con Miniaturas
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        mainImage.src = this.src; // Cambia la imagen principal por la seleccionada
        openImageModal(this); // Abre el modal para la imagen ampliada
    });
});

// Modal para mostrar la imagen ampliada
function openImageModal(thumbnail) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = thumbnail.src;
    captionText.innerHTML = thumbnail.alt; // Muestra la descripción de la imagen
}

// Cierra el modal de imagen ampliada
function closeImageModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Evento para cerrar el modal al hacer clic en la cruz
document.querySelector('.close').addEventListener('click', closeModal);
document.querySelector('.close-image-modal').addEventListener('click', closeImageModal);

// Abre el modal y muestra la imagen seleccionada
function openModal(thumbnail) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "flex"; // Asegúrate de que esté en modo flex
    modalImg.src = thumbnail.src; 
}





