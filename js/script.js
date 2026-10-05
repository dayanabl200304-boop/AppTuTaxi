/*=========================================================
    AppTuTaxi
    Archivo: script.js
    Evidencia GA8-220501096-AA1-EV02
=========================================================*/

"use strict";

/*=========================================================
VARIABLES
=========================================================*/

const formulario = document.getElementById("formulario");
const botonSubir = document.getElementById("subir");
const menu = document.querySelector("nav");
const enlaces = document.querySelectorAll("nav a");

/*=========================================================
SCROLL SUAVE DEL MENÚ
=========================================================*/

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(e){

        let destino = this.getAttribute("href");

        if(destino.startsWith("#")){

            e.preventDefault();

            document.querySelector(destino).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================================
BOTÓN VOLVER ARRIBA
=========================================================*/

window.addEventListener("scroll",()=>{

    if(!botonSubir) return;

    if(window.scrollY > 300){

        botonSubir.style.display="flex";

    }else{

        botonSubir.style.display="none";

    }

});

if(botonSubir){

    botonSubir.addEventListener("click",function(e){

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*=========================================================
VALIDACIÓN DEL FORMULARIO
=========================================================*/

if(formulario){

formulario.addEventListener("submit",function(e){

    e.preventDefault();

    let nombre=document.getElementById("nombre").value.trim();

    let correo=document.getElementById("correo").value.trim();

    let telefono=document.getElementById("telefono").value.trim();

    let mensaje=document.getElementById("mensaje").value.trim();

    if(nombre===""){

        alert("Ingrese su nombre.");

        return;

    }

    if(correo===""){

        alert("Ingrese un correo electrónico.");

        return;

    }

    if(!correo.includes("@")){

        alert("Correo electrónico inválido.");

        return;

    }

    if(telefono===""){

        alert("Ingrese un número telefónico.");

        return;

    }

    if(telefono.length<7){

        alert("Número telefónico incorrecto.");

        return;

    }

    if(mensaje===""){

        alert("Debe escribir un mensaje.");

        return;

    }

    alert("Su mensaje ha sido enviado correctamente.");

    formulario.reset();

});

}

/*=========================================================
ANIMACIONES AL HACER SCROLL
=========================================================*/

const elementos=document.querySelectorAll(

".tarjeta,.servicio,.testimonio,.ciudad"

);

function mostrarElementos(){

    elementos.forEach(function(item){

        let posicion=item.getBoundingClientRect().top;

        let pantalla=window.innerHeight;

        if(posicion< pantalla-100){

            item.classList.add("fade-in");

        }

    });

}

window.addEventListener("scroll",mostrarElementos);

mostrarElementos();

/*=========================================================
CAMBIO DE COLOR DEL HEADER
=========================================================*/

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    if(window.scrollY>80){

        header.style.background="#ffcf00";

    }

    else{

        header.style.background="#FFD400";

    }

});
/*=========================================================
CONTADORES ANIMADOS
=========================================================*/

const contadores = document.querySelectorAll(".numero");

function iniciarContadores() {

    contadores.forEach(contador => {

        const objetivo = parseInt(contador.innerText);

        if (isNaN(objetivo)) return;

        let valor = 0;

        const incremento = Math.ceil(objetivo / 100);

        const intervalo = setInterval(() => {

            valor += incremento;

            if (valor >= objetivo) {

                contador.innerText = objetivo;

                clearInterval(intervalo);

            } else {

                contador.innerText = valor;

            }

        }, 20);

    });

}

let contadoresEjecutados = false;

window.addEventListener("scroll", () => {

    const seccion = document.querySelector(".estadisticas");

    if (!seccion) return;

    const posicion = seccion.getBoundingClientRect().top;

    if (posicion < window.innerHeight - 100 && !contadoresEjecutados) {

        iniciarContadores();

        contadoresEjecutados = true;

    }

});

/*=========================================================
FECHA ACTUAL
=========================================================*/

const fechaActual = document.getElementById("fechaActual");

if (fechaActual) {

    const hoy = new Date();

    fechaActual.innerHTML = hoy.toLocaleDateString("es-CO");

}

/*=========================================================
RELOJ DIGITAL
=========================================================*/

const reloj = document.getElementById("reloj");

if (reloj) {

    setInterval(() => {

        const ahora = new Date();

        reloj.innerHTML = ahora.toLocaleTimeString("es-CO");

    }, 1000);

}

/*=========================================================
EFECTO HOVER EN TARJETAS
=========================================================*/

const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.transform = "translateY(-12px)";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform = "translateY(0px)";

    });

});

/*=========================================================
GALERÍA
=========================================================*/

const imagenes = document.querySelectorAll(".galeria img");

imagenes.forEach(imagen => {

    imagen.addEventListener("click", () => {

        alert("Imagen seleccionada.");

    });

});

/*=========================================================
MENSAJE DE BIENVENIDA
=========================================================*/

window.addEventListener("load", () => {

    console.log("Bienvenido a AppTuTaxi.");

});

/*=========================================================
FUNCIÓN PARA MOSTRAR MENSAJES
=========================================================*/

function mostrarMensaje(texto){

    alert(texto);

}

/*=========================================================
CONFIRMAR ACCIONES
=========================================================*/

function confirmarAccion(){

    return confirm("¿Desea continuar?");

}

/*=========================================================
VALIDACIÓN SOLO NÚMEROS
=========================================================*/

const telefono = document.getElementById("telefono");

if(telefono){

telefono.addEventListener("keypress",function(e){

    let codigo=e.which;

    if(codigo<48 || codigo>57){

        e.preventDefault();

    }

});

}

/*=========================================================
FIN DEL ARCHIVO
=========================================================*/

console.log("script.js cargado correctamente.");