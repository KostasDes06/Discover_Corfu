// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));


// PARALLAX EFFECT

window.addEventListener("scroll", () => {

    const parallaxImages = document.querySelectorAll(".image-parallax img");

    let scrollPosition = window.pageYOffset;

    parallaxImages.forEach(img => {

        img.style.transform = `translateY(${scrollPosition * 0.2}px)`;

    });

});


// GALLERY HOVER EFFECT

const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach(img => {

    img.addEventListener("mousemove", (e) => {

        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        img.style.transform = `scale(1.1) rotateX(${y/10}deg) rotateY(${x/10}deg)`;

    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });

});


// SIMPLE NAV SMOOTH SCROLL
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: target.offsetTop - navbarHeight - 10,
            behavior: 'smooth'
        });
    });
});

// DARK MODE TOGGLE
const darkModeBtn = document.getElementById('dark-mode-btn');
const htmlElement = document.documentElement;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    htmlElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
    darkModeBtn.textContent = '☀️';
}

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeBtn.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
});
