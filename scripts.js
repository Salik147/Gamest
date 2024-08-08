document.addEventListener("DOMContentLoaded", function () {
    const footerMenuToggle = document.getElementById('footerMenuToggle');
    const footerMenu = document.getElementById('footerMenu');
    const footerThemeToggle = document.getElementById('footerThemeToggle');
    const body = document.body;

    // Check for saved theme in local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        footerThemeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        footerThemeToggle.checked = false;
    }

    footerMenuToggle.addEventListener('click', function () {
        footerMenu.style.display = footerMenu.style.display === 'none' || footerMenu.style.display === '' ? 'block' : 'none';
    });

    footerThemeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode', this.checked);
        localStorage.setItem('theme', this.checked ? 'dark' : 'light');
    });


    // const themeToggle = document.getElementById('themeToggle');
    // const body = document.body;

    // Check for saved theme in local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode', this.checked);
        localStorage.setItem('theme', this.checked ? 'dark' : 'light');
    });
});

