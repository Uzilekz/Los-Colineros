// MENU HAMBURGUESA
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.header__nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}





// PASAR POR UNA SECCION Y LOS LINKS DEL NAVBAR SE PONEN ACTIVOS
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header__nav a');

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('.header__nav a[href*='+id+']').classList.add('active');
            });
        };
    });
}





// REVIEWS SLIDER
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});





// BOTONES DE MENU
let divBebida = document.getElementById("bebida");
let divPasta = document.getElementById("pasta");
let divCarne = document.getElementById("carne");
let divPescado = document.getElementById("pescado");
let divVegetal = document.getElementById("vegetal");
let divEnsalada = document.getElementById("ensalada");
let divPostre = document.getElementById("postre");

const displayBebida = ()=>{
    divBebida.style.display = "block"
    divPasta.style.display = "none"
    divCarne.style.display = "none"
    divPescado.style.display = "none"
    divVegetal.style.display = "none"
    divEnsalada.style.display = "none"
    divPostre.style.display = "none"
}
const displayPasta = ()=>{
    divBebida.style.display = "none"
    divPasta.style.display = "block"
    divCarne.style.display = "none"
    divPescado.style.display = "none"
    divVegetal.style.display = "none"
    divEnsalada.style.display = "none"
    divPostre.style.display = "none"
}
const displayCarne = ()=>{
    divBebida.style.display = "none"
    divPasta.style.display = "none"
    divCarne.style.display = "block"
    divPescado.style.display = "none"
    divVegetal.style.display = "none"
    divEnsalada.style.display = "none"
    divPostre.style.display = "none"
}
const displayPescado = ()=>{
    divBebida.style.display = "none"
    divPasta.style.display = "none"
    divCarne.style.display = "none"
    divPescado.style.display = "block"
    divVegetal.style.display = "none"
    divEnsalada.style.display = "none"
    divPostre.style.display = "none"
}
const displayVegetal= ()=>{
    divBebida.style.display = "none"
    divPasta.style.display = "none"
    divCarne.style.display = "none"
    divPescado.style.display = "none"
    divVegetal.style.display = "block"
    divEnsalada.style.display = "none"
    divPostre.style.display = "none"
}
const displayEnsalada = ()=>{
    divBebida.style.display = "none"
    divPasta.style.display = "none"
    divCarne.style.display = "none"
    divPescado.style.display = "none"
    divVegetal.style.display = "none"
    divEnsalada.style.display = "block"
    divPostre.style.display = "none"
}
const displayPostre = ()=>{
    divBebida.style.display = "none"
    divPasta.style.display = "none"
    divCarne.style.display = "none"
    divPescado.style.display = "none"
    divVegetal.style.display = "none"
    divEnsalada.style.display = "none"
    divPostre.style.display = "block"
}





// CLASE ACTIVA A BOTON DE MENU
const menuButtons = document.querySelectorAll(".menu__btn");

menuButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        menuButtons.forEach(f => f.classList.remove('menu__btn-active'));
        e.target.classList.toggle("menu__btn-active");
    });
});





// PRELOADER
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 1250);
}

window.onload = fadeOut;