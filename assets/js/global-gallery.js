const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imageCounter = document.querySelector(".image-counter");

let currentImageIndex = 0;
let startX = 0;
let startY = 0;

galleryItems.forEach((item, index) => {
    // Open the gallery
    item.addEventListener("click", () => {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add("active-gallery");
        document.body.style.overflow = "hidden";
    });
});

closeBtn.addEventListener("click", closeGallery);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox)
        closeGallery();
});
lightbox.addEventListener("touchstart", (e) => {
    if (e.target === lightbox)
        closeGallery();
});

prevBtn.addEventListener("click", showPrevImage);

nextBtn.addEventListener("click", showNextImage);

document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("active-gallery")) {
        if (e.key === "ArrowLeft")
            showPrevImage();

        else if (e.key === "ArrowRight")
            showNextImage();

        else if (e.key === "Escape")
            closeGallery();
    }
});

lightboxImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

lightboxImg.addEventListener("touchend", (e) => {
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

lightboxImg.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener("mouseup", onMouseUp);
});

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
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const imgSrc = galleryItems[currentImageIndex].src;
    lightboxImg.src = imgSrc;
    imageCounter.textContent = `${currentImageIndex + 1}/${galleryItems.length}`;

    const lastStyle = document.querySelector(".image-counter").style;
    document.querySelector(".image-counter").style = `opacity: 1 !important; visibility: visible !important;`;
    setTimeout(() => {
        document.querySelector(".image-counter").style = lastStyle;
    }, 3000);
}

function closeGallery() {
    lightbox.classList.remove("active-gallery");
    document.body.style.overflow = "auto";
}