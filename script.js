document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("menuPanel").style.display = "block";
    document.getElementById("menuBackdrop").style.display = "block";
});

document.getElementById("closePanel").addEventListener("click", function() {
    document.getElementById("menuPanel").style.display = "none";
    document.getElementById("menuBackdrop").style.display = "none";
});

document.getElementById("menuBackdrop").addEventListener("click", function() {
    document.getElementById("menuPanel").style.display = "none";
    document.getElementById("menuBackdrop").style.display = "none";
});

// Slider 1
const images1 = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
let currentIndex1 = 0;

function changeImage1() {
    const imageSlider1 = document.getElementById("imageSlider1");
    
    // Añade la clase de salida rápida hacia la izquierda
    imageSlider1.classList.add('slide-out-left-fast');
    
    // Inicia la entrada de la nueva imagen mientras la anterior se está moviendo
    setTimeout(() => {
        currentIndex1 = (currentIndex1 + 1) % images1.length;
        imageSlider1.src = images1[currentIndex1];
        
        imageSlider1.classList.remove('slide-out-left-fast');
        imageSlider1.classList.add('slide-in-left-advance');
        
        setTimeout(() => {
            imageSlider1.classList.remove('slide-in-left-advance');
        }, 500); // Duración de la animación de entrada
    }, 200); // Inicia la entrada de la nueva imagen antes (0.2 segundos)
}

// Cambia la imagen cada 3 segundos (3000 milisegundos)
setInterval(changeImage1, 3000);


// Slider 2
const images2 = ["cuadrogoku1.jpg", "cristianoronaldo.jpg", "cuadrovolverfuturo.jpg"];
let currentIndex2 = 0;

function changeImage2() {
    const imageSlider2 = document.getElementById("imageSlider2");
    currentIndex2 = (currentIndex2 + 1) % images2.length; // Cambia la imagen y reinicia el índice al llegar al final
    imageSlider2.src = images2[currentIndex2];
}
setInterval(changeImage2, 3000); // Cambia la imagen cada 3 segundos

// Slider 3
const images3 = ["lamparacubomario.jpg", "lamparaesferadragon.jpg", "lamparapalta.jpg", "lamparapato.jpg"];
let currentIndex3 = 0;

function changeImage3() {
    const imageSlider3 = document.getElementById("imageSlider3");
    currentIndex3 = (currentIndex3 + 1) % images3.length; // Cambia la imagen y reinicia el índice al llegar al final
    imageSlider3.src = images3[currentIndex3];
}
setInterval(changeImage3, 3000); // Cambia la imagen cada 3 segundos

// Slider 4
const images4 = ["tazarocky.jpg", "tazagoku.jpg", "tazagato.jpg"];
let currentIndex4 = 0;

function changeImage4() {
    const imageSlider4 = document.getElementById("imageSlider4");
    currentIndex4 = (currentIndex4 + 1) % images4.length; // Cambia la imagen y reinicia el índice al llegar al final
    imageSlider4.src = images4[currentIndex4];
}
setInterval(changeImage4, 3000); // Cambia la imagen cada 3 segundos

/*--------------------------------------------------------------------------------------------*/

// Función para verificar si la mitad del elemento está en la vista (viewport)
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const elementMidpoint = rect.top + rect.height / 2;
    return (
        elementMidpoint < window.innerHeight && rect.bottom >= 0
    );
}

// Función para verificar si el elemento está fuera de la vista
function isOutOfViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom < 0 || rect.top > window.innerHeight;
}

// Función para añadir o remover la clase active según la posición del elemento
function handleScroll() {
    const elements = document.querySelectorAll('.scroll-animate');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('active');
        } else if (isOutOfViewport(element)) {
            element.classList.remove('active');
        }
    });
}

// Escucha el evento scroll y ejecuta la función
window.addEventListener('scroll', handleScroll);

// Llama la función al cargar la página en caso de que algunos elementos ya estén en la vista
handleScroll();



// Slider 5
const images5 = ["Suscribete.gif", "Envios.png","Gifts.gif"];
let currentIndex5 = 0;

function changeImage5() {
    const imageSlider5 = document.getElementById("imageSlider5");
    
    // Añade la clase de salida rápida hacia la izquierda
    imageSlider5.classList.add('slide-out-left-fast');
    
    // Inicia la entrada de la nueva imagen mientras la anterior se está moviendo
    setTimeout(() => {
        currentIndex5 = (currentIndex5 + 1) % images1.length;
        imageSlider5.src = images5[currentIndex5];
        
        imageSlider5.classList.remove('slide-out-left-fast');
        imageSlider5.classList.add('slide-in-left-advance');
        
        setTimeout(() => {
            imageSlider5.classList.remove('slide-in-left-advance');
        }, 500); // Duración de la animación de entrada
    }, 400); // Inicia la entrada de la nueva imagen antes (0.2 segundos)
}

// Cambia la imagen cada 3 segundos (3000 milisegundos)
setInterval(changeImage5, 5000);