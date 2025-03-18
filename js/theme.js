// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const lightThemeBtn = document.getElementById('light-theme-btn');
    
    darkThemeBtn.addEventListener('click', function() {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        darkThemeBtn.classList.add('active');
        lightThemeBtn.classList.remove('active');
    });
    
    lightThemeBtn.addEventListener('click', function() {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        lightThemeBtn.classList.add('active');
        darkThemeBtn.classList.remove('active');
    });
});