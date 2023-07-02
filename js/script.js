
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
        document.body.innerHTML = document.body.innerHTML.replace("<style>.no-lectura-facil {display: none !important;}</style>" , "<style>.si-lectura-facil {display: none !important;}</style>");
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

const checkSiLecturaFacil = () => {
    if (localStorage.getItem("lecturaFacil") == "no") {
        document.body.innerHTML = document.body.innerHTML.replace("<style>.no-lectura-facil {display: none !important;}</style>" , "<style>.si-lectura-facil {display: none !important;}</style>");
    }
}

const cambiaLecturaFacil = () => {
    console.log("Cambiando modo Lectura Fácil");
    if (localStorage.getItem("lecturaFacil") == "no") {
        document.body.innerHTML = document.body.innerHTML.replace("<style>.no-lectura-facil {display: none !important;}</style>" , "<style>.si-lectura-facil {display: none !important;}</style>");
        localStorage.setItem("lecturaFacil", "si");
    } else if (localStorage.getItem("lecturaFacil") == "si") {
        document.body.innerHTML = document.body.innerHTML.replace("<style>.si-lectura-facil {display: none !important;}</style>" , "<style>.no-lectura-facil {display: none !important;}</style>");
        localStorage.setItem("lecturaFacil", "no");
    }
}


document.addEventListener("DOMContentLoaded", function(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (localStorage.getItem('lecturaFacil') == undefined) activarPopUp();
    if (page == "" || page == "index.html") {
        document.getElementById("cierra-popup").addEventListener("click", cierraPopUp);
        document.getElementById("boton-activar").addEventListener("click", cierraPopUp);
    }
    checkSiLecturaFacil();
    document.getElementById("abreMenu").addEventListener("click", abreMenu);
    document.getElementById("cierraMenu").addEventListener("click", cierraMenu);
    document.getElementById("botonLecturaFacil").addEventListener("click", cambiaLecturaFacil);
});