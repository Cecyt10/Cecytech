const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-navegacion');


menu.addEventListener('click', ()=>{
    menunav.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menunav.classList.contains('spread') 
        && e.target != menunav && e.target != menu){
        console.log('cerrar')
        menunav.classList.toggle("spread")
    }
})


const elementos = document.querySelectorAll('.animar');

function mostrar(){
    const trigger = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < trigger){
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', mostrar);
window.addEventListener('load', mostrar);