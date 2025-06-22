let currentGallery = null;
let currentImageIndex = 0;
let galleryImages = [];

function openGallery(element) {
    currentGallery = element.closest(".image-gallery");
    const images = currentGallery.querySelectorAll(".gallery-images img");
    galleryImages = [element].concat(Array.from(images));
    currentImageIndex = 0;

    document.getElementById("modal-image").src = galleryImages[currentImageIndex].src;
    document.getElementById("gallery-modal").style.display = "block";
    document.body.style.overflow = "hidden";
    if (galleryImages.length < 2)
        document.querySelector(".gallery-controls").style.display = "none";

    else
        document.querySelector(".gallery-controls").style.display = "flex";

    // For mobile users swapping
    updateSwipeIndicator();
    const modalContent = document.querySelector('.modal-content');
    modalContent.addEventListener('touchstart', handleTouchStart, { passive: true });
    modalContent.addEventListener('touchmove', handleTouchMove, { passive: true });
    modalContent.addEventListener('touchend', handleTouchEnd);
}

function closeGallery() {
    document.getElementById("gallery-modal").style.display = "none";
    document.body.style.overflow = "auto";

    const modalContent = document.querySelector('.modal-content');
    modalContent.removeEventListener('touchstart', handleTouchStart);
    modalContent.removeEventListener('touchmove', handleTouchMove);
    modalContent.removeEventListener('touchend', handleTouchEnd);
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= galleryImages.length)
        currentImageIndex = 0;

    else if (currentImageIndex < 0)
        currentImageIndex = galleryImages.length - 1;

    document.getElementById("modal-image").src = galleryImages[currentImageIndex].src;

    updateSwipeIndicator();
}

document.getElementById("gallery-modal").addEventListener("click", function (e) {
    if (e.target === document.querySelector(".modal-content"))
        closeGallery();
});

document.addEventListener("keydown", function (e) {
    const modal = document.getElementById("gallery-modal");
    if (modal.style.display === "block") {
        if (e.key === "ArrowRight")
            changeImage(1);

        else if (e.key === "ArrowLeft")
            changeImage(-1);

        else if (e.key === "Escape")
            closeGallery();
    }
});

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
    document.querySelector('.modal-image').style.transition = 'none';
}

function handleTouchMove(e) {
    if (!isDragging) return;

    const touchX = e.touches[0].clientX;
    const diff = touchX - touchStartX;
    const image = document.querySelector('.modal-image');

    // حرکت تصویر با انگشت کاربر
    image.style.transform = `translateX(${diff}px)`;
}

function handleTouchEnd(e) {
    if (!isDragging) return;

    isDragging = false;
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    const image = document.querySelector('.modal-image');

    // بازگشت به حالت اولیه با انیمیشن
    image.style.transition = 'transform 0.3s ease-out';
    image.style.transform = 'translateX(0)';

    // تشخیص جهت کشیدن و تغییر تصویر
    const swipeThreshold = 50; // حداقل فاصله برای تغییر تصویر

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // کشیدن به راست -> تصویر قبلی
            changeImage(-1);
        } else {
            // کشیدن به چپ -> تصویر بعدی
            changeImage(1);
        }
    }
}

function updateSwipeIndicator() {
    const indicator = document.getElementById('swipe-indicator');
    indicator.innerHTML = '';

    for (let i = 0; i < galleryImages.length; i++) {
        const dot = document.createElement('span');
        if (i === currentImageIndex) {
            dot.classList.add('active');
        }
        indicator.appendChild(dot);
    }
}