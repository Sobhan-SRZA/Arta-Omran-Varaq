
const galleryModal = document.querySelector(".gallery-modal");
const galleryModalImg = document.querySelector(".gallery-modal__content-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imageCounter = document.querySelector(".gallery-modal__content-image-counter");

let startX = 0;
let startY = 0;
let currentGallery = null;
let currentImageIndex = 0;
let galleryImages = [];

function openGallery(element) {
    currentGallery = element.closest(".image-gallery");
    const images = currentGallery.querySelectorAll(".gallery-images img");
    galleryImages = [element].concat(Array.from(images));
    currentImageIndex = 0;

    updategalleryModalImage();
    galleryModal.classList.add("active-gallery");
    document.body.style.overflow = "hidden";

    // Disable controllers for one image
    if (galleryImages.length < 2)
        document.querySelectorAll(".gallery-modal__controls").forEach((e) => e.style.display = "none");

    else
        document.querySelectorAll(".gallery-modal__controls").forEach((e) => e.style.display = "flex");

}

// Close the gallery
closeBtn.addEventListener("click", closeGallery);

galleryModal.addEventListener("click", (e) => {
    if (e.target === galleryModal)
        closeGallery();
});
galleryModal.addEventListener("touchstart", (e) => {
    if (e.target === galleryModal)
        closeGallery();
});

// Previse image
prevBtn.addEventListener("click", showPrevImage);


// Next image
nextBtn.addEventListener("click", showNextImage);


// Keyboard controller
document.addEventListener("keydown", (e) => {
    if (galleryModal.classList.contains("active-gallery")) {
        if (e.key === "ArrowLeft")
            showPrevImage();

        else if (e.key === "ArrowRight")
            showNextImage();

        else if (e.key === "Escape")
            closeGallery();
    }
});


// Mobile touch controller
galleryModalImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

galleryModalImg.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    if (Math.abs(diffX) > 50) {
        if (diffX > 0)
            showNextImage();

        else
            showPrevImage();
    }

    if (Math.abs(diffY) > 50)
        closeGallery();
});


// Mouse click controller
galleryModalImg.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener("mouseup", onMouseUp);
});


// Function
function onMouseUp(e) {
    const endX = e.clientX;
    const endY = e.clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    if (Math.abs(diffX) > 50) {
        if (diffX > 0)
            showNextImage();

        else
            showPrevImage();
    }

    if (Math.abs(diffY) > 50)
        closeGallery();

    document.removeEventListener("mouseup", onMouseUp);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updategalleryModalImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updategalleryModalImage();
}

function updategalleryModalImage() {
    const imgSrc = galleryImages[currentImageIndex].src;
    galleryModalImg.src = imgSrc;
    imageCounter.textContent = `${currentImageIndex + 1}/${galleryImages.length}`;

    const lastStyle = document.querySelector(".gallery-modal__content-image-counter").style;
    imageCounter.style = `opacity: 1 !important; visibility: visible !important;`;
    setTimeout(() => {
        imageCounter.style = lastStyle;
    }, 3000);
}

function closeGallery() {
    galleryModal.classList.remove("active-gallery");
    document.body.style.overflow = "auto";
}