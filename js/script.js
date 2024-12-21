// script.js
document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll('.rating');

    // Crée un observateur
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Ajoute la classe pour déclencher l'animation
            }
        });
    }, {
        threshold: 0.5 // Déclenche lorsque 50% de l'élément est visible
    });

    // Applique l'observateur à chaque élément avec la classe .rating
    ratings.forEach(rating => observer.observe(rating));
});
