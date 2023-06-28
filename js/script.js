
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
    if (event.target.attributes[0]?.nodeValue == "cierra-popup"){
        console.log("No activar Lectura Fácil");
        localStorage.setItem('lecturaFacil', 'no');
    } else {
        console.log("Activar Lectura Fácil");
        localStorage.setItem('lecturaFacil', 'si');
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
});