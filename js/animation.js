// Animation effects
document.addEventListener('DOMContentLoaded', function() {
    // Fade in elements on page load
    const fadeInElements = [
        document.querySelector('.name'),
        document.querySelector('.intro-text'),
        document.querySelector('.title'),
        document.querySelector('.starburst')
    ];
    
    // Staggered fade-in animation (simplified for mobile performance)
    fadeInElements.forEach((element, index) => {
        if (element) {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; // Slightly faster
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 80 * index); // Faster stagger on mobile
            }, 50);
        }
    });
    
    // Starburst rotation (disabled on mobile to save resources)
    const starburst = document.querySelector('.starburst');
    if (starburst && window.innerWidth > 768) {
        starburst.style.transition = 'transform 20s linear infinite';
        setTimeout(() => {
            starburst.style.transform = 'rotate(360deg)';
        }, 100);
    }
});

// Skills section animation
document.addEventListener('DOMContentLoaded', function() {
    const skillBoxes = document.querySelectorAll('.skill-box');
    
    skillBoxes.forEach(box => {
        // Support both click and touch events
        box.addEventListener('click', handleInteraction);
        box.addEventListener('touchstart', handleInteraction, { passive: true });
        
        function handleInteraction(event) {
            skillBoxes.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            createRippleEffect(this, event);
        }
    });
    
    function createRippleEffect(element, event) {
        const ripples = element.getElementsByClassName('ripple');
        Array.from(ripples).forEach(ripple => ripple.remove());
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        element.appendChild(ripple);
        
        const rect = element.getBoundingClientRect();
        const x = event.touches ? event.touches[0].clientX - rect.left : (event.clientX ? event.clientX - rect.left : rect.width / 2);
        const y = event.touches ? event.touches[0].clientY - rect.top : (event.clientY ? event.clientY - rect.top : rect.height / 2);
        
        const size = Math.max(rect.width, rect.height) * 1.5; // Smaller ripple on mobile
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x - size / 2}px`;
        ripple.style.top = `${y - size / 2}px`;
        ripple.classList.add('active');
        
        setTimeout(() => {
            ripple.remove();
        }, 600); // Faster cleanup
    }
    
    // Dynamic CSS for ripple
    const style = document.createElement('style');
    style.textContent = `
        .skill-box { position: relative; overflow: hidden; }
        .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
            pointer-events: none;
        }
        @keyframes rippleEffect {
            to { transform: scale(2); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});

// About section animations
document.addEventListener('DOMContentLoaded', function() {
    initAboutAnimation();
    
    window.addEventListener('scroll', function() {
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isVisible) initAboutAnimation();
        }
    });
    
    function initAboutAnimation() {
        const aboutItems = document.querySelectorAll('.about-item');
        aboutItems.forEach((item, index) => {
            if (!item.classList.contains('animated')) {
                item.style.opacity = '0';
                item.style.transform = 'translateY(15px)'; // Smaller offset on mobile
                item.style.animationDelay = `${0.15 * (index + 1)}s`; // Faster delay
                setTimeout(() => {
                    item.classList.add('animated');
                    item.style.animation = 'fadeInUp 0.6s forwards'; // Faster animation
                }, 50);
            }
        });
    }
    
    // Touch-friendly hover simulation
    const aboutItems = document.querySelectorAll('.about-item');
    aboutItems.forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        }, { passive: true });
        
        item.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// GSAP animation (conditional for desktop only)
if (typeof gsap !== 'undefined' && window.innerWidth > 768) {
    document.addEventListener('DOMContentLoaded', function() {
        gsap.from('.about-title', {
            duration: 1,
            y: 80,
            opacity: 0,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
}