// Importa as classes que controlam as fases
import { GerenciadorDeFases } from "../../Classes/QuestManager.js"; 

// Seleciona todos os botões de resposta
const botoes = document.querySelectorAll('button');

// Função para avançar para a próxima fase
function avancarFase() {
  const gerenciador = new GerenciadorDeFases();
  gerenciador.irParaProximaFase();
}

// Função para ir para a tela de Game Over
function gameOver() {
  window.location.href = "../../GameOverPage/index.html"; // <-- TROCAR aqui o caminho se precisar
}

// Para cada botão, adiciona o comportamento de clique
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const resposta = botao.innerText;

    // Verifica se o texto do botão clicado é a resposta correta
    if (resposta === 'correta') {
      // Se acertar, avança para a próxima fase
      avancarFase();
    } else {
      // Se errar, vai para a tela de Game Over
      gameOver();
    }
  });
});
