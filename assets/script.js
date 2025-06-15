const body = document.body;
const icon_bar = document.querySelector(".icon-bar");
const icon_x = document.querySelector(".icon-x");
const icon_moon = document.querySelector(".icon-moon");
const icon_sun = document.querySelector(".icon-sun");
const languageToggle = document.getElementById("language-toggle");
const mobileToggle = document.querySelector(".header__mobile-toggle");
const menuWrapper = document.querySelector(".header__menu-wrapper");
const themeToggle = document.getElementById("theme-toggle");
const copyAction = document.querySelectorAll(".copyAction");

const region = {
    en: {
        "logo-text": "Arta Omran Varagh",
        "menu-link": ["Home", "About Us", "Services", "Projects", "Why Us", "Certificates", "Contact Us"],
        "hero__title": "Arta Omran Varagh",
        "hero__subtitle": "Representative of Mobarakeh Steel, Leading in Metal Structures",
        "copyText": "Text copied to clipboard.",
        "copyTextError": "Failed to copy text: "
    },
    fa: {
        "logo-text": "آرتا عمران ورق",
        "menu-link": ["خانه", "درباره ما", "خدمات", "پروژه‌ها", "چرا ما", "گواهینامه‌ها", "تماس با ما"],
        "hero__title": "آرتا عمران ورق",
        "hero__subtitle": "نماینده فولاد مبارکه و پیشرو در سازه‌های فلزی",
        "copyText": "متن در کیبورد شما ذخیره شد.",
        "copyTextError": "کپی کردن متن در کیبورد به مشکل برخورد: "
    }
}

// Load contents
document.addEventListener("DOMContentLoaded", () => main());

// Functions
function main() {

    // Theme Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("theme-light");
        document.body.classList.toggle("theme-dark");
        themeToggle.classList.toggle("active");

        // Change theme-toggle icon with using adding "active" class 
        icon_sun.classList.toggle("active");
        icon_moon.classList.toggle("active");
    });

    // Language Toggle
    languageToggle.addEventListener("change", (e) => {
        const isEnglish = e.target.value === "en";
        document.documentElement.lang = isEnglish ? "en" : "fa";
        document.documentElement.dir = isEnglish ? "ltr" : "rtl";
        const selected_region = isEnglish ? region.en : region.fa;
        for (const key in selected_region) {
            const content = selected_region[key];
            if (key.includes("copy"))
                continue;

            if (typeof content === "string")
                document.querySelector(`.${key}`).textContent = content;

            else
                document.querySelectorAll(`.${key}`).forEach((link, i) => {
                    link.textContent = content[i];
                });
        }
    });

    // Mobile Toggle
    mobileToggle.addEventListener("click", () => {
        const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
        mobileToggle.setAttribute("aria-expanded", !isExpanded);
        mobileToggle.classList.toggle("active");
        menuWrapper.classList.toggle("active");

        // Change mobile-toggle icon with using adding "active" class 
        icon_bar.classList.toggle("active");
        icon_x.classList.toggle("active");

        document.body.style.overflow = isExpanded ? "auto" : "hidden";
    });
    // Close menu when any option clicked
    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileToggle.classList.remove("active");
            menuWrapper.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "auto";

            // Change mobile-toggle icon with using adding "active" class 
            icon_bar.classList.toggle("active");
            icon_x.classList.toggle("active");
        });
    });

    // Scroll animation (fadein when you see the section and when you don"t fadeout)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                entry.target.classList.add("animate");

            else
                entry.target.classList.remove("animate");
        });
    }, { threshold: 0.1 });
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("animate-hidden");
        observer.observe(section);
    });

    // Copy the text
    copyAction.forEach(content => {
        content.addEventListener("click", (e) => {
            copyText(content.textContent)
        });
    });
}

async function copyText(text) {
    const isEnglish = document.documentElement.lang === "en";
    const selected_region = isEnglish ? region.en : region.fa;
    try {
        await navigator.clipboard.writeText(text);
        alert(selected_region.copyText);
    } catch (err) {
        alert(selected_region.copyTextError, err);
    }
}