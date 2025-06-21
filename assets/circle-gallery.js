const gallery = document.getElementById("circleGallery");
const images = [...gallery.getElementsByTagName("img")];
let index = 0;

function render() {
    images.forEach((img, i) => {
        img.className = "";
        const diff = (i - index + images.length) % images.length;
        if (diff === 0) {
            img.classList.add("active");
        } else if (diff === 1 || (diff === -images.length + 1)) {
            img.classList.add("right");
        } else if (diff === images.length - 1 || diff === -1) {
            img.classList.add("left");
        }
    });
}

images.forEach((img, i) => {
    img.addEventListener("click", () => {
        index = i;
        render();
    });
});

setInterval(() => {
    index = (index + 1) % images.length;
    render();
}, 4000);

render();