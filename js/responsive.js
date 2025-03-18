// Responsive behavior
document.addEventListener('DOMContentLoaded', function() {
    const checkResponsiveLayout = () => {
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-layout');
            const starburst = document.querySelector('.starburst');
            if (starburst) starburst.style.transform = 'none';
        } else {
            document.body.classList.remove('mobile-layout');
        }
    };

    // Initial check
    checkResponsiveLayout();

    // Check on resize
    window.addEventListener('resize', checkResponsiveLayout);

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});