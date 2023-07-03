
const activarPopUp = () => {
    let popup = document.getElementById("popup-inicio-web");
    popup.style.display = "initial";
    document.body.style.overflow = "hidden";
    setTimeout(
        function(){
            popup.style.opacity = "1";
        }, 10
    );  
} 

const cierraPopUp = (event) => {
    console.log(event.target.attributes[0]?.nodeValue)
    if (event.target.attributes[0]?.nodeValue == "cierra-popup"){
        console.log("No Desactivar Lectura Fácil");
        localStorage.setItem('lecturaFacil', 'si');
    } else {
        $("#showLecturaFacil").load("extra/desactivarLecturaFacil.html");
        console.log("Desactivar Lectura Fácil");
        localStorage.setItem('lecturaFacil', 'no');

    }
    document.body.style.overflow = "initial";
    let popup = document.getElementById("popup-inicio-web");
    popup.style.opacity = "0";
    setTimeout(
        function(){
            popup.style.display = "none";
        }, 1500
    );
}

const abreMenu = () => {
    let menu = document.getElementById("navLinks");
    menu.style.left = "calc(0px - 1rem)";
}

const cierraMenu = () => {
    let menu = document.getElementById("navLinks");
    menu.style.left = "100vw";
}

const cambiaTextoEscondido = () => {
    let textoEscondido = document.getElementById("texto-escondido");
    let flecha = document.getElementById("flecha-texto-escondido");
    let texto = document.getElementById("cambiar-texto-escondido");
    textoEscondido.classList.toggle("escondido");
    flecha.classList.toggle("aparece");
    texto.innerHTML == "QUIERO LEER MÁS" ? texto.innerHTML = "QUIERO LEER MENOS" : texto.innerHTML = "QUIERO LEER MÁS";
}

document.addEventListener("DOMContentLoaded", function(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (localStorage.getItem('lecturaFacil') == undefined) activarPopUp();
    if (page == "" || page == "index.html") {
        document.getElementById("cierra-popup").addEventListener("click", cierraPopUp);
        document.getElementById("boton-activar").addEventListener("click", cierraPopUp);
    }
    document.getElementById("abreMenu").addEventListener("click", abreMenu);
    document.getElementById("cierraMenu").addEventListener("click", cierraMenu);
    document.getElementById("cambiar-texto-escondido").addEventListener("click", cambiaTextoEscondido);

    
    $(function() {
        if (localStorage.getItem("lecturaFacil") == "no") {
            $("#showLecturaFacil").load("extra/desactivarLecturaFacil.html");
        }
        $("#botonLecturaFacil").click(function() {
            if (localStorage.getItem("lecturaFacil") == "no") {
                $("#showLecturaFacil").load("extra/activarLecturaFacil.html");
                localStorage.setItem("lecturaFacil", "si");
            } else if (localStorage.getItem("lecturaFacil") == "si") {
                $("#showLecturaFacil").load("extra/desactivarLecturaFacil.html");
                localStorage.setItem("lecturaFacil", "no");
            }
        })
    });

});