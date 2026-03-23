/* ========================================
   MANOELA GIL ADVOCACIA - SCRIPT.JS
   Premium Interactions & Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');

    // Lighthouse/PageSpeed fix: reduced preloader timeout to lower TBT on mobile
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 800);

    // Navbar Scroll Behavior (Hide on scroll down, show on scroll up)
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            // Scrolling down
            navbar.classList.add('navbar--hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('navbar--hidden');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // Nav Drawer Logic (Standard AG5 Premium)
    const navToggle = document.querySelector('.nav-toggle');
    const navDrawer = document.getElementById('navDrawer');
    const drawerClose = document.querySelector('.drawer-close');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const body = document.body;

    function openDrawer() {
        navDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        body.classList.add('no-scroll');
        navToggle.setAttribute('aria-expanded', 'true');
    }

    function closeDrawer() {
        navDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        body.classList.remove('no-scroll');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    navToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);

    // Close drawer on link click
    document.querySelectorAll('.nav-drawer .nav-link').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Counter Animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('[data-count], [data-target]');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count') || counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.hero-stats, .about-counters').forEach(section => {
        counterObserver.observe(section);
    });

    function animateCounter(element, target) {
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out expo
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(easeOutExpo * (target - start) + start);

            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }

    // Staggered reveal for services cards
    document.querySelectorAll('.services-grid .service-card').forEach((el, index) => {
        el.style.transitionDelay = `${(index % 4) * 0.05}s`;
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Testimonials Slider
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Auto-advance slides
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 6000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            showSlide(index);
            startSlideShow();
        });
    });

    // Start slideshow
    if (slides.length > 0) {
        startSlideShow();
    }

    // Pause on hover
    const testimonialContainer = document.querySelector('.testimonials-container');
    if (testimonialContainer) {
        testimonialContainer.addEventListener('mouseenter', stopSlideShow);
        testimonialContainer.addEventListener('mouseleave', startSlideShow);
    }

    // Parallax Effect for images
    const parallaxImages = document.querySelectorAll('.about-image, .hero-image');

    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;

        parallaxImages.forEach(img => {
            const speed = 0.1;
            const rect = img.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrolled * speed);
                img.style.transform = `translateY(${yPos}px) scale(1.05)`;
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });

    // Form Handling — redireciona para WhatsApp com dados formatados
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name    = document.getElementById('name').value.trim();
            const email   = document.getElementById('email').value.trim();
            const phone   = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const caseMsg = document.getElementById('case').value.trim();

            let message = `Olá, me chamo ${name}, vim através do site e gostaria de uma informação.\n\n`;
            message += `- E-mail: ${email}\n`;
            message += `- Telefone: ${phone}\n`;
            message += `- Assunto/Serviço: ${subject}\n`;
            if (caseMsg) {
                message += `- Mensagem/Situação: ${caseMsg}`;
            }

            const encoded = encodeURIComponent(message);
            window.open(`https://wa.me/5521988359049?text=${encoded}`, '_blank');
        });
    }

    // Text Scramble Effect for Hero Title (optional enhancement)
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }

        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];

            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }

            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }

        update() {
            let output = '';
            let complete = 0;

            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];

                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="scramble-char">${char}</span>`;
                } else {
                    output += from;
                }
            }

            this.el.innerHTML = output;

            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }

        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    // Apply text scramble to tagline on load
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const fx = new TextScramble(tagline);
        const originalText = tagline.textContent;

        setTimeout(() => {
            fx.setText(originalText);
        }, 2500);
    }

    // Magnetic effect for buttons (subtle attraction to cursor)
    const magneticElements = document.querySelectorAll('.btn, .nav-link');

    magneticElements.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            elem.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        elem.addEventListener('mouseleave', () => {
            elem.style.transform = 'translate(0, 0)';
        });
    });

    // Image reveal on scroll with clip-path
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.clipPath = 'inset(0 0 0 0)';
                imageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.about-image').forEach(img => {
        img.style.clipPath = 'inset(0 100% 0 0)';
        img.style.transition = 'clip-path 1.2s cubic-bezier(0.77, 0, 0.18, 1)';
        imageObserver.observe(img);
    });

    console.log('Manoela Gil Advocacia - Site Premium Carregado');
});
