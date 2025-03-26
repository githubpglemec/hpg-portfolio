// Main script functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    document.body.classList.add('loaded');
    
    // Project previews
    const workItems = document.querySelectorAll('.work-item');
    
    workItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const previewUrl = item.dataset.preview;
            if (previewUrl) {
                const preview = document.createElement('video');
                preview.src = previewUrl;
                preview.className = 'work-preview';
                preview.autoplay = true;
                preview.muted = true;
                preview.loop = true;
                item.querySelector('.work-image').appendChild(preview);
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const preview = item.querySelector('.work-preview');
            if (preview) preview.remove();
        });
    });
    
    // Scroll progress
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.querySelector('.scroll-progress').style.width = `${scrollPercent}%`;
    });
});
