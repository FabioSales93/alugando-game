// Função para contar os jogos alugados
function contarJogosAlugados() {
    // Seleciona todos os elementos com a classe 'dashboard__item__img--rented'
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    
    // Conta quantos elementos foram encontrados
    let quantidadeAlugados = jogosAlugados.length;
    
    // Imprime a quantidade no console
    console.log(`Quantidade de jogos alugados: ${quantidadeAlugados}`);
}

// Função para alterar o status do jogo
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        if (confirm(`Você tem certeza que deseja alugar o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
        }
    }

    // Chama a função contarJogosAlugados para atualizar e imprimir a quantidade de jogos alugados
    contarJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    contarJogosAlugados();
});
