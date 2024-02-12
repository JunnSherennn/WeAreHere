// script.js

// Fungsi untuk mengatur efek smooth scroll pada semua tautan menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            // Fungsi untuk mengatur efek smooth scroll pada semua tautan menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk menambahkan efek animasi saat mengklik tautan menu navigasi
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        // Tambahkan kelas "active" ke tautan yang diklik
        document.querySelectorAll('nav ul li a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});
behavior: 'smooth'
        });
    });
});

// Fungsi untuk menambahkan efek animasi saat mengklik tautan menu navigasi
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        // Tambahkan kelas "active" ke tautan yang diklik
        document.querySelectorAll('nav ul li a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});
