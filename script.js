// JS HEADER
const MENULISTA = document.querySelector('.jsHeaderMenu');
const MENU = document.querySelector('.jsMenuHamburguer');
const MENUICONE = document.querySelector('.jsMenuIcon');

if (MENU) {
  function ativarMenu() {
    MENULISTA.classList.toggle('ativo');
    MENUICONE.classList.toggle('ativo');
  }
  MENU.addEventListener('click', ativarMenu);
}

//-----------------------------------------------------

// JS SERVIÇOS
const SERVICOCONTEUDO = document.querySelectorAll('.jsServicoConteudo');
const SERVICOTITULO = document.querySelectorAll('.jsServicoTitulo');


if (SERVICOCONTEUDO && SERVICOTITULO) {
  function ativarItem(index) {
    SERVICOTITULO.forEach((element) => {
      element.classList.remove('ativo');
    })

    SERVICOCONTEUDO.forEach((element) => {
      element.classList.remove('ativo');
    })

    SERVICOTITULO[index].classList.add('ativo');
    SERVICOCONTEUDO[index].classList.add('ativo');
  }

  SERVICOTITULO.forEach((item, index) => {
    item.addEventListener('click', () => {
      ativarItem(index)
    })
  });
}