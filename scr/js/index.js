const botoes = document.querySelectorAll(".botao");
const personagem = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) =>{
    botao.addEventListener("click",()=>{

    desseLecionarBotao();

        botao.classList.add("selecionado");

    desseLecionarPersonagem();

        personagem[indice].classList.add('selecionado');
    });
});


function desseLecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desseLecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove("selecionado");
}
