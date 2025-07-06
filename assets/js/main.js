const body = document.body;
const languageToggle = document.getElementById("language-toggle");
const mobileToggle = document.querySelector(".header__mobile-toggle");
const menuWrapper = document.querySelector(".header__menu-wrapper");
const themeToggles = document.querySelectorAll("#theme-toggle");
const copyAction = document.querySelectorAll(".copyAction");

const region = {
    en: {
        "logo-text": "Arta Omran Varagh",
        "menu-link": ["Home", "Gallery", "Services", "Company Fields", "Projects", "Why Us", "Contact Us"],
        "hero__title": "Arta Omran Varagh",
        "hero__subtitle": "Representative of Mobarakeh Steel and Leader in Metal Structures",
        "hero__text": "Arta Omran Varagh Company was established in 2011 and, utilizing past commercial experiences in the steel industry and benefiting from experienced professors and engineers, began its activities in the field of constructing steel frameworks and metal and industrial structures on a 4,500 square meter land with three halls covering 3,500 square meters and fully equipped. Since 2012, the company has been honored to be a member of the large Mobarakeh Steel family with subscription number 14027 and the Tehran Province Steel Structure Manufacturers Association, and through this, it procures its required raw materials in the shortest time and without intermediaries.",
        "copyText": "Text copied to clipboard.",
        "copyTextError": "Failed to copy text: ",
        "section-title": ["Gallery", "Company Services", "Company Fields", "Why Choose Us", "Contact Us"],
        "services .service-card__title": ["Consultation", "Supervision", "Complete Shed Execution", "Structure Production", "Roof and Wall Covering", "Colored Sheet Roof Covering", "Bolted Structures"],
        "services .service-card__desc": [
            "Providing free consultation on the selection and implementation of various sheds and metal structures",
            "Professional calculation, supervision, and execution of various shed projects",
            "Foundation, structure construction, painting, transportation, and final installation",
            "Construction of various light and heavy metal structures in a dedicated workshop",
            "Installation of high-quality roof and wall sandwich panels",
            "Roof covering with colored sheets, glass wool, and chicken wire",
            "Professional execution of industrial structures with bolted connections"
        ],
        "fields .service-card__title": [
            "High-Rise Structures",
            "Petrochemical Structures",
            "Metal Bridges",
            "Industrial Structures",
            "Sinusoidal and Trapezoidal Sheets",
            "Z Purlins",
            "Various Sheds",
            "Metal Joists (Chromite)"
        ],
        "fields .service-card__desc": [
            "Design and implementation of metal structures and multi-story building frameworks",
            "Specialized structures used in oil, gas, and petrochemical projects",
            "Design and implementation of various high-strength metal bridges",
            "Factory structures, industrial sheds, warehouses, and workshops",
            "Production and implementation of various roof and wall covering sheets",
            "Construction and implementation of Z purlins for shed roof and wall structures",
            "Design and implementation of light, heavy, beam, and truss sheds",
            "Construction of chromite metal joists for structural roof systems"
        ],
        "projects .section-title": "Our Projects",
        "project-card__title": [
            "3000-head Dash Azar Negin",
            "Nir Mineral Water",
            "Arshe Foolad Ard Khoshe",
            "Ardabil Grain Warehouse",
            "Qaleh Ganj Goat Farm",
            "Horsin Kermanshah Pulses Packaging",
            "Sabalan Treatment Plant",
            "Khorram Darreh Livestock Farm",
            "Ardabil Technical University",
            "Ardabil Iron Smelting",
            "Ardabil Keshavarz Vehicle Scrapping Iron Smelting",
            "Zarrin Khoshe Arak",
            "Meshkin Shahr Geothermal Field",
            "Khosrowshah Tabriz 6000-head Dairy Farm Shed",
            "Pamico Sponge Iron Shed",
            "Pars Abad Dried Fruits Shed",
            "Sabalan Mushroom",
            "Meshgin Tomato Paste Production",
            "Sarein Social Security Hotel",
            "Irico Abhar Wagon Manufacturing Shed",
            "Yazd Machinery Project",
            "Naderi Town Bridge and Ardabil Overpass Project",
            "Rafsanjan MDF Factory"
        ],
        "why-us-card__title": ["Experience and Expertise", "Guaranteed Quality", "Professional Support"],
        "why-us-card__desc": [
            "More than two decades of experience in the metal structures industry.",
            "Using high-quality raw materials and high standards.",
            "Responsive and committed support team."
        ],
        "contacts .section-title": "Contact Us",
        "contact__text": "For more information or collaboration, contact us.",
        "contact__info-title": "Contact Information",
        "contact__info-labels": ["Phone:", "Phone:", "Fax:", "Mobile:", "Mobile:", "Mobile:", "Mobile:", "Email:", "Address:"],
        "contact__address": "Ardabil, Isar Square, Industrial Town No. 1, Sanaye Blvd, Sarv Blvd, Second Intersection, 13th St.",
        "contact__form-title": "Send Message",
        "contact__form-name-placeholder": "Full Name",
        "contact__form-email-placeholder": "Email",
        "contact__form-message-placeholder": "Your Message",
        "contact__form-submit": "Send Message",
        "contact__form-submit-sending": "Sending...",
        "sendingMessage": "Your message sucessfully sended.",
        "sendingMessageError": "Failed to send message: ",
        "sendingMessageTimeout": "Error: Due to repeated requests, you will be unable to send messages after 30 seconds.",
        "sendingMessage-messageError": "Error: Message must be at least 5 characters.",
        "sendingMessage-nameError": "Error: Name must be at least 3 letters.",
        "sendingMessage-emailError": "Error: Email is not valid.",
        "footer__text": "© 2011-2025 Arta Omran Varagh. All rights reserved.",
        "web_title": "Arta Omran Varagh",
        "web_title-projects": "Arta Omran Varagh | Our Projects",
        "title": {
            "header__nav": "Main navigation",
            "theme-toggle": "Toggle theme",
            "header__logo .logo-text": "Arta Omran Varagh homepage",
            "header__mobile-toggle": "Open menu",
            "menu-link": ["Home", "Gallery", "Services", "Company Fields", "Projects", "Why Us", "Contact Us"],
            "language-toggle": "Change language",
            "hero__title": "Arta Omran Varagh",
            "hero__subtitle": "Representative of Mobarakeh Steel and Leader in Metal Structures",
            "section-title": ["Gallery", "Company Services", "Company Fields", "Why Choose Us", "Contact Us"],
            "services .service-card__icon": ["Free consultation", "Engineering supervision", "Shed project execution", "Metal structure construction", "Sandwich panel covering", "Roof covering with sheets", "Execution of bolted structures"],
            "fields .service-card__icon": [
                "High-Rise Structures",
                "Petrochemical Structures",
                "Metal Bridges",
                "Industrial Structures",
                "Sinusoidal and Trapezoidal Sheets",
                "Z Purlins",
                "Various Sheds",
                "Metal Joists (Chromite)"
            ],
            "contact__map iframe": "Company Location Map",
            "why-us-card__title": ["Experience and Expertise", "Guaranteed Quality", "Professional Support"],
            "contact__form-submit": "Send message to the company",
            "social-link": ["Telegram", "Instagram", "LinkedIn"]
        }
    },
    fa: {
        "logo-text": "آرتا عمران ورق",
        "menu-link": ["خانه", "گالری", "خدمات", "حوزه‌های کاری شرکت", "پروژه‌ها", "چرا ما", "تماس با ما"],
        "hero__title": "آرتا عمران ورق",
        "hero__subtitle": "نماینده فولاد مبارکه و پیشرو در سازه‌های فلزی",
        "hero__text": "شرکت آرتا عمران ورق در سال 1390 تأسیس و با استفاده از تجارب تجاری گذشته در زمینه فولاد و با بهره گیری از استاید و مهندسین مجرب فعالیت در زمینه ساخت اسکلت فولادی و سازه های فلزی و صنعتی را در زمینی به وسعت 4500 متر مربع و سه سالن به مساحت 3500 متر مربع و با تجهیزات کامل شروع نمود. شرکت از سال 1391 مفتخر به عضویت در خانواده بزرگ فولاد مبارکه به شماره اشتراک 14027 و انجمن صنفی تولید کنندگان سازه های فولادی استان تهران گردید و از این مسیر در کوتاه ترین زمان و بی واسطه مواد اولیه مورد نیاز خود را تأمین می نماید.",
        "copyText": "متن در کیبورد شما ذخیره شد.",
        "copyTextError": "کپی کردن متن در کیبورد به مشکل برخورد: ",
        "section-title": ["گالری", "خدمات شرکت", "حوزه‌های کاری شرکت", "چرا ما را انتخاب کنید", "تماس با ما"],
        "services .service-card__title": ["مشاوره", "نظارت", "اجرای کامل سوله", "تولید سازه", "پوشش سقف و دیوار", "پوشش سقف ورق رنگی", "سازه‌های پیچ و مهره‌ای"],
        "services .service-card__desc": [
            "ارائه مشاوره رایگان در زمینه انتخاب و اجرای انواع سوله و سازه‌های فلزی",
            "محاسبه، نظارت و اجرای حرفه‌ای انواع پروژه‌های سوله",
            "فونداسیون، ساخت سازه، رنگ‌آمیزی، حمل و نصب نهایی",
            "ساخت انواع سازه فلزی سبک و سنگین در کارگاه اختصاصی",
            "نصب ساندویچ پانل سقفی و دیواری با کیفیت بالا",
            "پوشش سقف با ورق رنگی، پشم‌شیشه و توری مرغی",
            "اجرای حرفه‌ای سازه‌های صنعتی با اتصالات پیچ و مهره"
        ],
        "fields .service-card__title": [
            "سازه‌های بلندمرتبه",
            "سازه‌های پتروشیمی",
            "پل‌های فلزی",
            "سازه‌های صنعتی",
            "ورق‌های سینوسی و ذوزنقه‌ای",
            "پرلین Z",
            "انواع سوله‌ها",
            "تیرچه فلزی (کرومیت)"
        ],
        "fields .service-card__desc": [
            "طراحی و اجرای سازه‌های فلزی و اسکلت‌های ساختمانی چند طبقه",
            "سازه‌های تخصصی مورد استفاده در پروژه‌های نفت، گاز و پتروشیمی",
            "طراحی و اجرای انواع پل‌های فلزی با استحکام بالا",
            "سازه‌های کارخانه‌ای، سوله‌های صنعتی، انبار و کارگاه‌ها",
            "تولید و اجرای انواع ورق‌های پوششی سقف و دیوار",
            "ساخت و اجرای پرلین Z جهت استراکچر سقف و دیوار سوله",
            "طراحی و اجرای سوله‌های سبک، سنگین، تیرورقی و خرپایی",
            "ساخت تیرچه‌های فلزی کرومیت برای سیستم‌های سقف سازه‌ای"
        ],
        "projects .section-title": "پروژه‌های ما",
        "project-card__title": [
            "3000 راسی دشت آذرنگین",
            "آب معدنی نیر",
            "ارشه فولاد آرد خوشه",
            "انبار غلات اردبیل",
            "بز داری قلعه گنج",
            "بسته بندی حبوبوبات هرسین کرمانشاه",
            "تسویه خانه سبلان",
            "دامداری خرم دره",
            "دانشگاه فنی اردبیل",
            "ذوب آهن اردبیل",
            "ذوب آهن اسقاط خودرو کشاورز اردبیل",
            "زرین خوشه اراک",
            "زمین گرمایش مشکین شهر",
            "سوله 6000 راس گاوداری خسروشاه تبریز",
            "سوله آهن اسفنجی پامیکو",
            "سوله خشکبار پارس آباد",
            "قارچ سبلان",
            "مشگین رب سازی",
            "هتل تامین اجتماعی سرعین",
            "واگن سازی ایریکو ابهر سوله",
            "پروژه ماشین سازی یزد",
            "پروژه پل شهرک نادری و پل هوایی اردبیل",
            "کارخانه MDF رفسنجان"
        ],
        "why-us-card__title": ["تجربه و تخصص", "کیفیت تضمین‌شده", "پشتیبانی حرفه‌ای"],
        "why-us-card__desc": [
            "بیش از دو دهه تجربه در صنعت سازه‌های فلزی.",
            "استفاده از مواد اولیه باکیفیت و استانداردهای بالا.",
            "تیم پشتیبانی پاسخگو و متعهد."
        ],
        "contact .section-title": "تماس با ما",
        "contact__text": "برای اطلاعات بیشتر یا همکاری، با ما در ارتباط باشید.",
        "contact__info-title": "اطلاعات تماس",
        "contact__info-labels": ["تلفن:", "تلفن:", "فکس:", "موبایل:", "موبایل:", "موبایل:", "موبایل:", "ایمیل:", "آدرس:"],
        "contact__address": "اردبیل، میدان ایثار، شهرک صنعتی شماره یک، بلوار صنایع، بلوار سرو، تقاطع دوم، خیابان سیزدهم",
        "contact__form-title": "ارسال پیام",
        "contact__form-name-placeholder": "نام و نام خانوادگی",
        "contact__form-email-placeholder": "ایمیل",
        "contact__form-message-placeholder": "پیام شما",
        "contact__form-submit": "ارسال پیام",
        "contact__form-submit-sending": "در حال ارسال...",
        "sendingMessage": "پیغام شما با موفقیت ارسال شد.",
        "sendingMessageError": "خطا در ارسال پیغام: ",
        "sendingMessageTimeout": "خطا: بدلیل درخواست های مکرر شما پس از 30 ثانیه قادر به ارسال پیغام نخواهید بود.",
        "sendingMessage-messageError": "خطا: پیام باید حداقل 5 حرف باشد.",
        "sendingMessage-nameError": "خطا: نام باید حداقل 3 حرف باشد.",
        "sendingMessage-emailError": "خطا: ایمیل معتبر نیست.",
        "footer__text": "© 1404-1390 آرتا عمران ورق. تمامی حقوق محفوظ است.",
        "web_title": "آرتا عمران ورق",
        "web_title-projects": "آرتا عمران ورق | پروژه های ما",
        "title": {
            "header__nav": "ناوبری اصلی",
            "theme-toggle": "تغییر تم",
            "header__logo .logo-text": "صفحه اصلی آرتا عمران ورق",
            "header__mobile-toggle": "باز کردن منو",
            "menu-link": ["خانه", "گالری", "خدمات", "حوزه‌های کاری شرکت", "پروژه‌ها", "چرا ما", "تماس با ما"],
            "language-toggle": "تغییر زبان",
            "hero__title": "آرتا عمران ورق",
            "hero__subtitle": "نماینده فولاد مبارکه و پیشرو در سازه‌های فلزی",
            "section-title": ["گالری", "خدمات شرکت", "حوزه‌های کاری شرکت", "چرا ما را انتخاب کنید", "تماس با ما"],
            "services .service-card__icon": ["مشاوره رایگان", "نظارت مهندسی", "اجرای پروژه سوله", "ساخت سازه فلزی", "پوشش ساندویچ پانل", "پوشش سقف با ورق", "اجرای سازه‌های پیچ و مهره‌ای"],
            "fields .service-card__icon": [
                "سازه‌های بلندمرتبه",
                "سازه‌های پتروشیمی",
                "پل‌های فلزی",
                "سازه‌های صنعتی",
                "ورق‌های سینوسی و ذوزنقه‌ای",
                "پرلین Z",
                "انواع سوله‌ها",
                "تیرچه فلزی (کرومیت)"
            ],
            "contact__map iframe": "نقشه محل شرکت",
            "why-us-card__title": ["تجربه و تخصص", "کیفیت تضمین‌شده", "پشتیبانی حرفه‌ای"],
            "contact__form-submit": "ارسال پیام به شرکت",
            "social-link": ["تلگرام", "اینستاگرام", "لینکدین"]
        }
    }
};


// Load contents
document.addEventListener("DOMContentLoaded", () => main());


// Block DevTools
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") ||
        (e.ctrlKey && e.key.toLowerCase() === "u") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j")
    ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
}, true);

// Block right click (to copy the images)
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);

(function () {
    let isOpen = false;

    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            isOpen = true;
            throw new Error("DevTools is open");
        }
    });

    setInterval(() => {
        const before = new Date().getTime();
        debugger;
        const after = new Date().getTime();
        if (after - before > 200) {
            location.href = "/404.html"
        }
    }, 1000);
})();


// Functions
function main() {
    // Load site with persian language
    changeLanguage();


    // Initialize theme on page load
    initTheme();

    // Theme Toggle
    themeToggles.forEach((themeToggle) => {
        themeToggle.addEventListener("click", () => {
            const currentTheme = body.classList.contains("theme-dark") ? "dark" : "light";
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
        });
    });

    // Initialize language on page load
    initLanguage();

    // Language Toggle
    languageToggle.addEventListener("change", (e) => {
        const isEnglish = e.target.value === "en";
        setLanguage(isEnglish ? "en" : "fa");
        localStorage.setItem("language", isEnglish ? "en" : "fa");
    });

    // Mobile Toggle
    mobileToggle.addEventListener("click", () => {
        const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
        mobileToggle.setAttribute("aria-expanded", !isExpanded);
        mobileToggle.classList.toggle("active");
        menuWrapper.classList.toggle("active");

        document.body.style.overflow = isExpanded ? "auto" : "hidden";
    });
    // Close menu when any option clicked
    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", toggleClose);
    });
    document.querySelector("main")
        .addEventListener("click", () => {
            const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
            if (!isExpanded)
                return;

            toggleClose();
        })

    // Scroll animation (fadein when you see the section and when you don't fadeout)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                entry.target.classList.add("animate");

            else
                entry.target.classList.remove("animate");
        });
    }, { threshold: 0.01 });
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


// Save text in user clipboard
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


// For redirect url path
(function () {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href)
        history.replaceState(null, null, redirect);
})();


// Mobile Toggle close
function toggleClose() {
    mobileToggle.classList.remove("active");
    menuWrapper.classList.remove("active");
    mobileToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "auto";
}


// Change language
function changeLanguage(isEnglish = false) {
    const lang = isEnglish ? "en" : "fa";
    document.documentElement.lang = lang;
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
    const selected_region = region[lang];
    (document.querySelector(".gallery-modal") || document.querySelector(".lightbox")).dir = "rtl";

    for (const key in selected_region) {
        if (key === "title") continue; // Skip title as it will be handled by setTitles
        const content = selected_region[key];
        if (key.includes("copy")) continue;

        if (typeof content === "string") {
            const element = document.querySelector(`.${key}`);
            if (element) {
                if (key.includes("placeholder"))
                    element.placeholder = content;

                else
                    element.textContent = content;
            }

        } else {
            document.querySelectorAll(`.${key}`).forEach((element, i) => {
                if (i < content.length) {
                    element.textContent = content[i];
                }
            });
        }
    }

    // Change lang manually for some elements
    document.querySelector(".contact__form input[name=\"name\"]").placeholder = selected_region["contact__form-name-placeholder"];
    document.querySelector(".contact__form input[name=\"email\"]").placeholder = selected_region["contact__form-email-placeholder"];
    document.querySelector(".contact__form textarea[name=\"message\"]").placeholder = selected_region["contact__form-message-placeholder"];
    document.querySelector(".contact__form input[name=\"name\"]").title = selected_region["contact__form-name-placeholder"];
    document.querySelector(".contact__form input[name=\"email\"]").title = selected_region["contact__form-email-placeholder"];
    document.querySelector(".contact__form textarea[name=\"message\"]").title = selected_region["contact__form-message-placeholder"];
    document.querySelector(".contact__form-submit").textContent = selected_region["contact__form-submit"];
    document.querySelector(".contact__form-submit").title = selected_region["contact__form-submit"];

    document.title = selected_region["web_title"];
    if (document.URL.includes("project"))
        document.title = selected_region["web_title-projects"];

    // Contacts labels change lang
    const contactLabels = selected_region["contact__info-labels"];
    document.querySelectorAll(".contact__info-list li").forEach((li, i) => {
        if (i < contactLabels.length) {
            const labelTextNode = li.childNodes[2];
            if (labelTextNode && labelTextNode.nodeType === Node.TEXT_NODE)
                labelTextNode.textContent = contactLabels[i] + " ";
        }
    });

    // Contacts address change lang
    const addressElement = document.querySelector(".contact__info-list li:last-child .copyAction");
    if (addressElement)
        addressElement.textContent = selected_region["contact__address"];

    // Set titles for the selected language
    setTitles(lang);
}

function setLanguage(lang) {
    changeLanguage(lang === "en");
    languageToggle.value = lang;
}

function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith("en") ? "en" : "fa";
}

function initLanguage() {
    const savedLang = localStorage.getItem("language");
    const lang = savedLang || getBrowserLanguage();
    setLanguage(lang);
}

// Set titles based on language
function setTitles(lang) {
    const titles = region[lang].title;
    for (const key in titles) {
        const elements = document.querySelectorAll(`.${key}`);
        if (Array.isArray(titles[key]))
            elements.forEach((element, i) => {
                if (i < titles[key].length) {
                    element.title = titles[key][i];
                }
            });

        else
            elements.forEach(element => {
                element.title = titles[key];
            });
    }
}

// Theme
function setTheme(theme) {
    if (theme === "dark") {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
    } else {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
    }
    themeToggles.forEach(toggle => {
        toggle.classList.toggle("active", theme === "dark");
    });
    document.querySelectorAll(".icon-moon").forEach(icon => icon.classList.toggle("active", theme === "dark"));
    document.querySelectorAll(".icon-sun").forEach(icon => icon.classList.toggle("active", theme === "light"));
}

function getSystemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const theme = savedTheme || getSystemTheme();
    setTheme(theme);
}