let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

let logo = document.getElementById("logo-cabecalho");

logo.addEventListener('click', () =>{
    alert("Você achou um easter egg");
});
