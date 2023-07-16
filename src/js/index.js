/* O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleçao na imagem pequena do personagem e mostrar a imagem, nome, e o texto grande do personagem que esta selecionado

objetivo 1 - quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo:
Passo 1 - pegar os personagens no js para poder verificar quando o usuario passar o mouse em cima de um deles 

Passo 2 - adicionar a classe selecionado na personagem que o usuario passar o mouse

Passo 3 - verificar se ja existe um personagem selecionado, se sim. devemos remover a seleçao dele

Objetivo 2 - quando passar o mouse em cima do personagem listado, trocar a imagem, o nome e o texto do personagem grande
Passo 1 - pegaro o elemento do personagem grande pra adicionar as informaçao dele
Passo 2 - alterar a imagem do personagem grande
Passo 3 - alterar o nome do personagem grande
passo 4 - alterar o texto do personagem grande
*/

// Objetivo 1
// Passo 1

const personagens = document.querySelectorAll('.personagem');

// Passo 2

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

                // Passo 3

                removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        // Obejetivo 2
        // Passo 1 e 2
        alterarImagemPersonagemSelecionado(personagem);

        // Passo 3
        alterarNomeDoPersonagemSelecionado(personagem);
        
        // Passo 4
        alterarDescricaoDoPersonagemSelecionado(personagem);
    })
})



function alterarDescricaoDoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // Passo 2
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
// Objetivo 2
// Passo 1



