document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        document.body.classList.toggle('theme-dark');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Language Toggle
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('change', (e) => {
        const isEnglish = e.target.value === 'en';
        document.documentElement.lang = isEnglish ? 'en' : 'fa';
        document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
        document.querySelector('.logo-text').textContent = isEnglish ? 'Arta Omran Varagh' : 'آرتا عمران ورق';
        const menuLinks = ['خانه', 'درباره ما', 'خدمات', 'پروژه‌ها', 'چرا ما', 'گواهینامه‌ها', 'تماس با ما'];
        const enLinks = ['Home', 'About Us', 'Services', 'Projects', 'Why Us', 'Certificates', 'Contact Us'];
        document.querySelectorAll('.menu-link').forEach((link, i) => {
            link.textContent = isEnglish ? enLinks[i] : menuLinks[i];
        });
        document.querySelector('.hero__title').textContent = isEnglish ? 'Arta Omran Varagh' : 'آرتا عمران ورق';
        document.querySelector('.hero__subtitle').textContent = isEnglish
            ? 'Representative of Mobarakeh Steel, Leading in Metal Structures'
            : 'نماینده فولاد مبارکه و پیشرو در سازه‌های فلزی';
    });

    // Mobile Toggle
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const menuWrapper = document.querySelector('.header__menu-wrapper');
    const toggleIcon = document.querySelector('#toggle-icon');
    mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        mobileToggle.classList.toggle('active');
        menuWrapper.classList.toggle('active');
        if (!isExpanded) {
            toggleIcon.classList.remove('fa-bars')
            toggleIcon.classList.add('fa-xmarks')
        }

        else {
            toggleIcon.classList.remove('fa-xmarks')
            toggleIcon.classList.add('fa-bars')
        }

        document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    });

    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            menuWrapper.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        });
    });

    document.querySelectorAll('.project-card').forEach(card => {
        if (window.innerWidth > 767) {
            card.addEventListener('mouseenter', () => {
                card.querySelector('img').style.opacity = '0';
                card.querySelector('.project-card__video').style.opacity = '1';
            });
            card.addEventListener('mouseleave', () => {
                card.querySelector('img').style.opacity = '1';
                card.querySelector('.project-card__video').style.opacity = '0';
            });
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animate');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-hidden');
        observer.observe(section);
    });
});