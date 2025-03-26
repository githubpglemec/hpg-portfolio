// Animation effects
document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap !== 'undefined') {
        // Hero animation
        gsap.from('.hero h1', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });

        // Introduction animation
        gsap.from('.introduction > *', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.introduction',
                start: 'top 80%'
            }
        });

        // Skills animation
        const skillBoxes = document.querySelectorAll('.skill-box');
        
        skillBoxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                gsap.to(box, {
                    duration: 0.3,
                    scale: 1.05,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    ease: 'power2.out'
                });
            });
            
            box.addEventListener('mouseleave', () => {
                gsap.to(box, {
                    duration: 0.3,
                    scale: 1,
                    boxShadow: 'none',
                    ease: 'power2.out'
                });
            });
            
            box.addEventListener('click', () => {
                gsap.to(box, {
                    duration: 0.2,
                    scale: 0.95,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });
            });
        });
    }
});
