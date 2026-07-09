// Mensagem de boas-vindas
console.log("Receitas Chefe Dan 👨‍🍳 carregado com sucesso!");


// Botão "Ver Receitas"

const botao = document.querySelector(".botao");

if (botao) {

    botao.addEventListener("click", () => {

        console.log("Abrindo página de receitas...");

    });

}


// Barra de pesquisa

const pesquisa = document.querySelector(".pesquisa input");

if (pesquisa) {

    pesquisa.addEventListener("input", () => {

        console.log("Pesquisando:", pesquisa.value);

    });

}
const carrossel = document.querySelector(".carrossel");

if(carrossel){

    const principal = document.querySelector(".imagemPrincipal");
    const thumbs = document.querySelectorAll(".thumb");
    const esquerda = document.querySelector(".esquerda");
    const direita = document.querySelector(".direita");

    const imagens = [];

    thumbs.forEach((thumb)=>{

        imagens.push(thumb.src);

    });

    let indice = 0;

    function atualizar(){

        principal.src = imagens[indice];

        thumbs.forEach((thumb)=>{

            thumb.classList.remove("ativa");

        });

        thumbs[indice].classList.add("ativa");

    }

    direita.addEventListener("click",()=>{

        indice++;

        if(indice>=imagens.length){

            indice=0;

        }

        atualizar();

    });

    esquerda.addEventListener("click",()=>{

        indice--;

        if(indice<0){

            indice=imagens.length-1;

        }

        atualizar();

    });

    thumbs.forEach((thumb,i)=>{

        thumb.addEventListener("click",()=>{

            indice=i;

            atualizar();

        });

    });

    let automatico = setInterval(proximaImagem,5000);

    function proximaImagem(){

        indice++;

        if(indice>=imagens.length){

            indice=0;

        }

        atualizar();

    }

    carrossel.addEventListener("mouseenter",()=>{

        clearInterval(automatico);

    });

    carrossel.addEventListener("mouseleave",()=>{

        automatico=setInterval(proximaImagem,5000);

    });

}
