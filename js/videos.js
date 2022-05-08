const fila = document.querySelector('.contenedor-carousel');
const video = document.querySelector('.video');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/*  document.querySelector('.contenedor-carousel').offsetWidth 
 */flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

