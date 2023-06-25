
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

function cierraPopUp (event){
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





document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem('lecturaFacil') == undefined) activarPopUp();
    document.getElementById("cierra-popup").addEventListener("click", cierraPopUp);
    document.getElementById("boton-activar").addEventListener("click", cierraPopUp);
});