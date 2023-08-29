
// Obtén las referencias a los elementos del menu
const mobileMenu = document.getElementById("mobile-menu");
const headerMenu = document.getElementById("header-menu");

// Agrega un manejador de clic al boton 
document.addEventListener("click", function(event) {
    // Verifica si se hizo clic en el botón del menú
    if (event.target === mobileMenu || mobileMenu.contains(event.target)) {
        headerMenu.classList.toggle("active"); // Abre o cierra el menú
    } else {
        // Si no se hizo clic en el menú, ciérralo si está abierto
        if (headerMenu.classList.contains("active")) {
            headerMenu.classList.remove("active");
        }
    }
});

// Obtén una referencia al elemento del menú
const navbar = document.querySelector(".navbar");

// Agrega un manejador de desplazamiento
window.addEventListener("scroll", function() {
    // Verifica si el desplazamiento vertical es mayor o igual a 100px
    if (window.scrollY >= 100) {
        navbar.classList.add("fixed"); // Agrega la clase para fijar el menú
    } else {
        navbar.classList.remove("fixed"); // Quita la clase si no se cumple la condición
    }
});

// Boton Subir
const scrollToTopButton = document.getElementById("scrollToTop");

// Agregar manejador de desplazamiento
window.addEventListener("scroll", function() {
    if (window.scrollY >= 500) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
});

// Agregar manejador de clic para desplazarse hacia arriba
scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
