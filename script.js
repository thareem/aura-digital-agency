document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize AOS Scroll Animation
    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    });

    // 2. Initialize Typed.js for Hero Section
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'High-Converting Websites.',
                'Modern Frontend Web Apps.',
                'Interactive Digital Experiences.'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // 3. Navbar Sticky Effect on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. FAQ Accordion Toggle System
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));

            // If not active, open clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 5. Contact Form Submission Simulation
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formAlert.style.color = '#06b6d4';
            formAlert.textContent = '⚡ Sending your inquiry...';

            setTimeout(() => {
                formAlert.style.color = '#10b981';
                formAlert.textContent = '✓ Proposal request sent successfully! We will contact you within 24 hours.';
                contactForm.reset();
            }, 1500);
        });
    }

});