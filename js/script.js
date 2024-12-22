const duration = 800; // Durée totale en millisecondes

    // Fonction d'interpolation Ease-In-Out
    function easeInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animateCircularProgress(element, value, color, bgColor) {
      const startTime = performance.now();
      const targetProgress = value / 100; // Progression cible en pourcentage (normalisé 0-1)
      const progressValue = element.querySelector('.progress-value');

      // Configurer les couleurs
      element.style.setProperty('--color', color);
      element.style.setProperty('--bgcolor', bgColor);

      function step(currentTime) {
        const elapsedTime = currentTime - startTime;
        const t = Math.min(elapsedTime / duration, 1); // Temps normalisé entre 0 et 1
        const easedProgress = easeInOut(t); // Appliquer l'interpolation

        // Calculer l'angle et la progression
        const currentProgress = easedProgress * targetProgress * 100;
        const angle = easedProgress * targetProgress * 360;

        // Mettre à jour la barre et le texte
        element.style.setProperty('--progress', `${angle}deg`);
        progressValue.textContent = `${Math.round(currentProgress)}%`;

        // Continuer l'animation jusqu'à la fin
        if (t < 1) {
          requestAnimationFrame(step);
        }
      }

      // Lancer l'animation
      requestAnimationFrame(step);
    }

    function initializeCircularProgress() {
      const progressElements = document.querySelectorAll('.circular-progress');

      progressElements.forEach(element => {
        // Lire les données des attributs HTML
        const value = parseFloat(element.dataset.value) || 0; // Valeur par défaut : 0
        const color = element.dataset.color || '#4caf50'; // Couleur par défaut : vert
        const bgColor = element.dataset.bgcolor || '#e0e0e0'; // Couleur de fond par défaut : gris clair

        // Ajouter l'élément de valeur
        element.innerHTML = `<div class="progress-value">0%</div>`;
        element.style.setProperty('--bgcolor', bgColor);

        // Détecter l'apparition à l'écran
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Lancer l'animation lors de la première apparition
              element.classList.add('visible');
              animateCircularProgress(element, value, color, bgColor);

              // Déconnecter l'observateur pour ne pas réanimer
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.6 // Détecte lorsque 60% de l'élément est visible
        });

        observer.observe(element);
      });
    }

    // Initialiser les diagrammes au chargement de la page
    document.addEventListener('DOMContentLoaded', initializeCircularProgress);
 









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

window.addEventListener('scroll', function () {
      const img = document.querySelector('.banner img');
      let scrollPosition = window.scrollY;
      img.style.transform = 'translateY(-' + scrollPosition * 0.15 + 'px)';
    });