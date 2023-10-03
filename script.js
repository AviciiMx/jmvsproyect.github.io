//Variable para el menu
let menuVisible = false;
//Funcion que oculta o muestra el menu
Menu =()=>{
if(menuVisible){
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}else{
    document.getElementById("nav").classList.add("responsive");
    menuVisible = true;
}
}
//Mandamos a llamar al icono de despliege
document.querySelector(".nav-responsive").onclick = Menu;
//Funcion para poder ocultar el menu una vez que se selecciona una opcion
seleccionar = ()=>{
document.getElementById("nav").classList = "";
menuVisible = false;
}

skills = () =>{
    let skille = document.getElementById("skill");
    let animacion_skill = window.innerHeight - skille.getBoundingClientRect().top;
    if(animacion_skill >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("js");
        habilidades[1].classList.add("HTML");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("php");
        habilidades[6].classList.add("office");
        habilidades[7].classList.add("mant");
        habilidades[8].classList.add("comu");
        habilidades[9].classList.add("tee");
        habilidades[10].classList.add("flexi");
        habilidades[11].classList.add("paci");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("english");
        habilidades[14].classList.add("respeto");
        habilidades[15].classList.add("responsabilidad");
        habilidades[16].classList.add("motivacion");
        
    
    }
}
// Funcion para detectar movimiento y aplicar la funcion
window.onscroll = function (){
    skills();
}

// Formulario

const formulario = document.querySelector("#form");
const email = document.getElementById("gmail");

const envio = (event) => {
    event.preventDefault();
    const form = new FormData(formulario);
    console.log(form.get('nombre'));
    const name = "Nombre: ";
    const telefono = "Telefono: ";
    const mailtoLink = `mailto:juanmanuelvillar08@mail.com?subject=${form.get('tema')}&body=${name}${form.get('nombre')}%0D%0A${telefono}${form.get('telefono')}%0D%0A${form.get('texto')}`;
    window.location.href = mailtoLink;
    return false;
}

formulario.addEventListener('submit', envio);


