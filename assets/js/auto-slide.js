
// Auto slide images (for hero section and it's do fadein and fadeout animation)
const section = document.querySelector(".hero");
const length = 7;
let count = 2;
setInterval(() => {
    if (count > length)
        count = 1;

    section.style.setProperty('--bg-image', `url("./images/${count}.jpg")`);
    count++;
}, 10_000);