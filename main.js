const nav = document.querySelector(".nav");

const icono_menu = document.querySelector(".icono_menu");
const capa_transparente = document.querySelector(".capa_transparente");
const nav_responsive = document.querySelector(".links_nav_responsive");
const icono_equis = document.querySelector(".icono_equis_menu");
const link_nav_responsive = document.querySelectorAll(".link_nav_responsive");

const inicio = document.querySelector(".ini");
const acercaDe = document.querySelector(".ad");
const platos = document.querySelector(".pla");
const contacto = document.querySelector(".cont");

var menuDesplegado = false;

function stickearNav(){

    let scrollY = window.scrollY; 

    if(scrollY == 0){
        nav.classList.remove("nav_fondo_negro");
    }else{
        if(menuDesplegado == false)
        nav.classList.add("nav_fondo_negro")
    }

    if(scrollY <= 530){
        inicio.classList.add("situado");
        acercaDe.classList.remove("situado");
        platos.classList.remove("situado");
        contacto.classList.remove("situado");
    }
    if(scrollY > 530 && scrollY <= 1130){
        acercaDe.classList.add("situado");
        inicio.classList.remove("situado");
        platos.classList.remove("situado");
        contacto.classList.remove("situado");
    }
    if(scrollY > 1130 && scrollY <= 1900){
        platos.classList.add("situado");
        inicio.classList.remove("situado");
        acercaDe.classList.remove("situado");
        contacto.classList.remove("situado");
    }
    if(scrollY > 1900){
        contacto.classList.add("situado");
        inicio.classList.remove("situado");
        acercaDe.classList.remove("situado");
        platos.classList.remove("situado");
    }
}

function cambio_de_nav(){
    if(window.innerWidth <= 1000){
        icono_menu.classList.remove("icono_menu_desactivado");
        icono_menu.classList.add("icono_menu_activado");
    }else{
        icono_menu.classList.add("icono_menu_desactivado");
        icono_menu.classList.remove("icono_menu_activado");
    }
}

function desplegarMenu(){
    menuDesplegado = true;

    capa_transparente.classList.add("capa_transparente_activada");
    nav_responsive.classList.remove("links_nav_responsive_desactivado");
    nav_responsive.classList.add("links_nav_responsive_activado");
    nav.classList.remove("nav_fondo_negro");
    nav.style.width = "95%";
    icono_menu.classList.add("icono_menu_desactivado");
    icono_menu.classList.remove("icono_menu_activado");
    icono_equis.classList.remove("icono_equis_menu_desactivado");
    icono_equis.classList.add("icono_equis_menu_activado");
    for(let i = 0; i < link_nav_responsive.length; i++){
        link_nav_responsive[i].classList.remove("link_nav_responsive_desactivado");
        link_nav_responsive[i].classList.add("link_nav_responsive_activado");
    }
}

function plegarMenu(){
    menuDesplegado = false;

    capa_transparente.classList.remove("capa_transparente_activada");
    nav_responsive.classList.add("links_nav_responsive_desactivado");
    nav_responsive.classList.remove("links_nav_responsive_activado");
    nav.classList.add("nav_fondo_negro");
    nav.style.width = "90%";
    icono_menu.classList.remove("icono_menu_desactivado");
    icono_menu.classList.add("icono_menu_activado");
    icono_equis.classList.add("icono_equis_menu_desactivado");
    icono_equis.classList.remove("icono_equis_menu_activado");
    for(let i = 0; i < link_nav_responsive.length; i++){
        link_nav_responsive[i].classList.add("link_nav_responsive_desactivado");
        link_nav_responsive[i].classList.remove("link_nav_responsive_activado");
    }
}

window.addEventListener("scroll", stickearNav);
window.addEventListener("resize", cambio_de_nav);
icono_menu.addEventListener("click", desplegarMenu);
icono_equis.addEventListener("click", plegarMenu);
for(let i = 0; i < link_nav_responsive.length; i++){
    link_nav_responsive[i].addEventListener("click", plegarMenu);
}

cambio_de_nav();