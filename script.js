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


//-----------------------------------------------------

// JS PAINEL

const LISTASIMBOLOS = document.querySelectorAll('.jsListaSimbolos li');
const SIMBOLO = document.querySelectorAll('.jsListaSimbolos li svg');
const TEXTOS = document.querySelectorAll('.jsListaTextoSimbolo li p');

if (LISTASIMBOLOS) {
  function ativarSimbolo(index) {
    SIMBOLO.forEach((simbolo) => {
      simbolo.classList.remove('ativo');
    });
    TEXTOS.forEach((texto) => {
      texto.classList.remove('ativo');
    });

    SIMBOLO[index].classList.add('ativo');
    TEXTOS[index].classList.add('ativo');

  }


  LISTASIMBOLOS.forEach((simbolo, index) => {
    simbolo.addEventListener('click', () => {
      ativarSimbolo(index);
    })
  })
}

// TROCAR A IMAGEM PAINEL
const IMAGEMPAINEL = document.querySelector('.painelImagem img');

// Função para trocar a imagem quando a largura da tela for maior ou igual a 600px
function trocarImagem() {
  if (window.innerWidth <= 600) {
    IMAGEMPAINEL.src = "./imagens/outros/painelMobile.jpg";
  } else {
    IMAGEMPAINEL.src = "./imagens/outros/painelCompleto.jpg";
  }
}

window.addEventListener('load', trocarImagem);
window.addEventListener('resize', trocarImagem);
