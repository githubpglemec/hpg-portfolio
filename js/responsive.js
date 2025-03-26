// Responsive behavior
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    function checkResponsiveLayout() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-layout');
        } else {
            document.body.classList.remove('mobile-layout');
            navList.classList.remove('active');
            hamburger.classList.remove('open');
        }
    }

    checkResponsiveLayout();
    window.addEventListener('resize', checkResponsiveLayout);

    if (hamburger && navList && typeof gsap !== 'undefined') {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navList.classList.toggle('active');
            
            if (navList.classList.contains('active')) {
                gsap.to(navList, { 
                    duration: 0.3, 
                    y: 0, 
                    opacity: 1,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(navList, { 
                    duration: 0.3, 
                    y: -20, 
                    opacity: 0,
                    ease: 'power2.in'
                });
            }
        });
    }
});
