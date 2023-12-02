


const MENULISTA = document.querySelector('.jsHeaderMenu');
const MENU = document.querySelector('.jsMenuHamburguer');
const MENUICONE = document.querySelector('.jsMenuIcon');

if(MENU) {
function ativarMenu(){
  MENULISTA.classList.toggle('ativo');
  MENUICONE.classList.toggle('ativo');
}
MENU.addEventListener('click', ativarMenu);
}


