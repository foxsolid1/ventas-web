document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA EL CARRUSEL DEL INICIO ---
    const carouselImages = document.querySelectorAll('.carousel img');
    if (carouselImages.length > 0) {
        let currentIndex = 0;
        
        function changeCarouselImage() {
            carouselImages[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselImages.length;
            carouselImages[currentIndex].classList.add('active');
        }

        // Inicia el carrusel solo si hay imágenes
        carouselImages[0].classList.add('active');
        setInterval(changeCarouselImage, 5000); // Cambia cada 5 segundos
    }

    // --- LÓGICA PARA EL MODAL DE IMÁGENES DE PRODUCTOS ---
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalButton = document.querySelector('.modal .close');

    // Función para abrir el modal
    function openModal(imageSrc) {
        if (modal && modalImage) {
            modalImage.src = imageSrc;
            modal.style.display = 'flex';
        }
    }

    // Función para cerrar el modal
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Añadir evento de clic a todas las imágenes miniatura de los productos
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            openModal(this.src);
        });
    });

    // Añadir evento de clic al botón de cerrar
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }
    
    // Cerrar el modal si se hace clic fuera de la imagen
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});






