const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLigth = document.querySelector('.agregar-imagen');
const contenedorLigth = document.querySelector('.imagen-light');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

const aparecerImagen = (imagen)=>{
    imagenesLigth.src = imagen;
    contenedorLigth.classList.toggle('.show');
    imagenesLigth.classList.toggle('.show-image');
}