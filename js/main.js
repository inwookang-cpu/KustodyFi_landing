/* ========================================
   KustodyFi - Main JavaScript
   Interactive Features & Animations
   ======================================== */

(function() {
    'use strict';

    /* ========================================
       Utility Functions
       ======================================== */

    // Throttle function for performance
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /* ========================================
       Header Scroll Effect
       ======================================== */

    const header = document.getElementById('header');
    let lastScroll = 0;

    function handleHeaderScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', throttle(handleHeaderScroll, 100));

    /* ========================================
       Mobile Menu Toggle
       ======================================== */

    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    /* ========================================
       Smooth Scrolling for Anchor Links
       ======================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ========================================
       Scroll Progress Bar
       ======================================== */

    const scrollProgress = document.getElementById('scrollProgress');

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        if (scrollProgress) {
            scrollProgress.style.width = scrollPercentage + '%';
        }
    }

    window.addEventListener('scroll', throttle(updateScrollProgress, 50));

    /* ========================================
       Fade-in Animation on Scroll
       ======================================== */

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Observe module items
    document.querySelectorAll('.module-item').forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });

    // Observe problem cards
    document.querySelectorAll('.problem-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Observe institution cards
    document.querySelectorAll('.institution-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    /* ========================================
       Button Ripple Effect
       ======================================== */

    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
        ripple.classList.add('ripple');

        const existingRipple = button.getElementsByClassName('ripple')[0];
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(ripple);
    }

    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-primary-small');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    /* ========================================
       Form Handling (if contact forms are added)
       ======================================== */

    // Placeholder for future form handling
    const contactForms = document.querySelectorAll('form[data-contact-form]');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your form submission logic here
            console.log('Form submitted');
            
            // Example: Show success message
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Thank you! We will contact you soon.';
            successMessage.style.cssText = 'color: #5FFAD0; margin-top: 1rem; text-align: center;';
            form.appendChild(successMessage);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                successMessage.remove();
            }, 3000);
        });
    });

    /* ========================================
       Parallax Effect (Subtle)
       ======================================== */

    function handleParallax() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }

    // Only enable parallax on desktop
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', throttle(handleParallax, 50));
    }

    /* ========================================
       Keyboard Navigation Enhancement
       ======================================== */

    // Add focus styles for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });

    /* ========================================
       Performance: Reduce Motion
       ======================================== */

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function handleReducedMotion() {
        if (prefersReducedMotion.matches) {
            // Disable animations for users who prefer reduced motion
            document.querySelectorAll('.fade-in').forEach(el => {
                el.classList.remove('fade-in');
            });
        }
    }

    handleReducedMotion();
    prefersReducedMotion.addEventListener('change', handleReducedMotion);

    /* ========================================
       Console Log: Developer Message
       ======================================== */

    console.log('%cKustodyFi', 'font-size: 24px; font-weight: bold; color: #5FFAD0;');
    console.log('%cTrust-Native Treasury Infrastructure', 'font-size: 14px; color: #3B82F6;');
    console.log('%cInterested in working with us? Visit our careers page!', 'font-size: 12px; color: #fff;');

    /* ========================================
       Initialize on DOM Load
       ======================================== */

    document.addEventListener('DOMContentLoaded', function() {
        // Initial scroll position check
        handleHeaderScroll();
        updateScrollProgress();
        
        // Add loaded class to body for CSS animations
        document.body.classList.add('loaded');
        
        // Log analytics (placeholder)
        console.log('KustodyFi website loaded successfully');
    });

    /* ========================================
       Window Resize Handler
       ======================================== */

    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Handle responsive adjustments here
            console.log('Window resized');
        }, 250);
    });

    /* ========================================
       Accessibility: Skip to Content
       ======================================== */

    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #5FFAD0;
        color: #0B1220;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);

    /* ========================================
       Export for Testing (Optional)
       ======================================== */

    window.KustodyFi = {
        version: '1.0.0',
        throttle: throttle,
        isInViewport: isInViewport
    };

})();