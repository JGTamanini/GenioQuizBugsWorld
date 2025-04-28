// Importa as classes que controlam as fases
import { GerenciadorDeFases } from "../../Classes/QuestManager.js"; 

// Função para avançar para a próxima fase
function avancarFase() {
  const gerenciador = new GerenciadorDeFases();
  gerenciador.irParaProximaFase();
}

// Função para ir para a tela de Game Over
function gameOver() {
  window.location.href = "../../GameOverPage/index.html";
}

// Função que verifica se o botão escolhido é correto
function verificar(correto) {
    if (correto) {
      avancarFase(); // Próxima pergunta
    } else {
      gameOver(); // Leva para a Pagina de Game Over
    }
}

// Tornar a função acessível pelo HTML
window.verificar = verificar;