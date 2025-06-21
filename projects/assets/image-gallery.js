let currentGallery = null;
let currentImageIndex = 0;
let galleryImages = [];

function openGallery(element) {
    currentGallery = element.closest('.image-gallery');
    const images = currentGallery.querySelectorAll('.gallery-images img');
    galleryImages = [element].concat(Array.from(images));
    currentImageIndex = 0;

    document.getElementById('modal-image').src = galleryImages[currentImageIndex].src;
    document.getElementById('gallery-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    if (galleryImages.length < 2)
        document.querySelector(".gallery-controls").style.display = 'none';

    else
        document.querySelector(".gallery-controls").style.display = 'flex';
}

function closeGallery() {
    document.getElementById('gallery-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    document.getElementById('modal-image').src = galleryImages[currentImageIndex].src;
}

document.getElementById('gallery-modal').addEventListener('click', function (e) {
    if (e.target === document.querySelector(".modal-content"))
        closeGallery();
});

document.addEventListener('keydown', function (e) {
    const modal = document.getElementById('gallery-modal');
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'Escape') {
            closeGallery();
        }
    }
});