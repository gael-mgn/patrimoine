
let menuOpened = false;
let loaded = false;
let menusss = false;

document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector('.main-menu');

/*
    const menu = document.querySelector('.main-menu');
    menu.classList.toggle('active');
    let heightMenu = menu.offsetHeight;
    console.log(heightMenu);
    menu.classList.toggle('active');*/

    // Récupérer la hauteur du header
    const header = document.querySelector('header');
    const windowHeight = window.innerHeight;
    let lastScrollPosition = window.scrollY;


    

    function updateActiveSection() {
        const scrollPosition = window.scrollY;
       
        if (scrollPosition > windowHeight/2) {
            if (lastScrollPosition - scrollPosition > 10) {
                header.style.top = `0px`;
            }
            else if (lastScrollPosition - scrollPosition < -2){
                 if (loaded){
                    if (!menuOpened){
                        header.style.top = `${-header.offsetHeight - menu.offsetHeight}px`;
                    }
                 }
                 else {
                    loaded = true;
                 }
            }
        }
        else {
            header.style.top = `0px`;
        }
        lastScrollPosition = scrollPosition;
    }
    window.addEventListener('scroll', updateActiveSection);





});

function toggleMenu() {
    const menu = document.getElementById('menu');

    if (menuOpened) {
        menuOpened = false;
        menu.style.display = "none";

    }
    else {
        menuOpened = true;
        menu.style.display = "flex";
    }
    menusss = true;


}
function closeMenu() {
        if (!menusss){
            if (window.innerWidth <= 768){
                console.log('close');
            toggleMenu();
            }
        }else {
            menusss = false;
        }
    }

    function updateMarginTop() {

        if (window.innerWidth > 768){
    menu.style.display="flex";
  }
  else {
    menu.style.display="none";
  }

  menuOpened = false;
  
  var headerHeight = document.querySelector('header').offsetHeight;
  document.body.style.marginTop = headerHeight + 'px';

}

// Appel initial lorsque la page est chargée
window.addEventListener('load', updateMarginTop);

// Mise à jour lors du redimensionnement de la fenêtre
window.addEventListener('resize', updateMarginTop);

document.addEventListener('click', closeMenu);
