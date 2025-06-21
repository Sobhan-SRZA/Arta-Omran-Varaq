const path = require('path');
const fs = require('fs');

function generateProjectCard(projectName, images = []) {
  const firstImage = images.length > 0 ?
    `assets/images/${encodeURIComponent(projectName)}/${encodeURIComponent(images[0])}` :
    'https://placehold.co/600x400';

  const images_div = [];
  images.filter((_, i) => !i == 0).forEach((img) => {
    images_div.push(
      `<img src="assets/images/${encodeURIComponent(projectName)}/${encodeURIComponent(img)}" alt="${projectName}" loading="lazy" type="image/jpeg">`
    )
  })

  return `
    <article class="project-card theme-area transition">
      <div class="project-card__media transition">
        <div class="image-gallery">
            <img src="${firstImage}" alt="${projectName}" loading="lazy" type="image/jpeg" class="gallery-main-image" onclick="openGallery(this)">
           ${images_div.length > 0 ?
      `<div class="gallery-images" style="display:none;">
                ${images_div.join("\n")}
            </div>`: ""
    }
        </div>
      </div>
      <div class="project-card__content transition">
        <h3 class="project-card__title primary transition">${projectName}</h3>
      </div>
    </article>
  `;
}

function generateProjectsHTML() {
  try {
    const imagesDir = path.join(__dirname, 'images');
    const projectDirs = fs.readdirSync(imagesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    let projectsHTML = '';
    projectDirs.forEach(projectName => {
      const dirName = projectName.replace(/\//g, '-');
      const projectDir = path.join(imagesDir, dirName);

      let images = [];
      try {
        images = fs.readdirSync(projectDir)
          .filter(file => ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase()));
      } catch (err) {
        console.warn(`تصویری برای پروژه ${projectName} یافت نشد:`, err.message);
      }

      projectsHTML += generateProjectCard(projectName.toLocaleUpperCase(), images);
    });


    const finalHTML = `
      <section id="projects" class="projects transition">
        <div class="container transition">
          <h2 class="section-title primary transition">پروژه‌های ما</h2>
          <div class="projects__grid transition">
            ${projectsHTML}
          </div>
        </div>
      </section>
    `;


    fs.writeFileSync(path.join(__dirname, 'projects-section.html'), finalHTML);
    console.log('Successfully projects-section.html file was generated.');

    return finalHTML;
  } catch (err) {
    console.error('Error while generating:', err);
    process.exit(1);
  }
}

generateProjectsHTML();