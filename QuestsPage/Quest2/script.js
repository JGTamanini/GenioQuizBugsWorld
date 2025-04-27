// Importa as classes que controlam as fases
import { GerenciadorDeFases } from "../../Classes/QuestManager.js"; 

// Função para avançar para a próxima fase
function avancarFase() {
  const gerenciador = new GerenciadorDeFases();
  gerenciador.irParaProximaFase();
}

// Função para ir para a tela de Game Over
function gameOver() {
  window.location.href = "../../GameOverPage/index.html"; // <-- Troque se seu caminho for diferente
}

// Evento que escuta o teclado
document.addEventListener('keydown', (event) => {
  const tecla = event.key.toUpperCase(); // Captura a tecla pressionada e transforma em maiúscula

  // Verifica se o jogador apertou a tecla "B"
  if (tecla === 'B') {
    // Se apertou B, acertou!
    avancarFase();
  } else {
    // Se apertou qualquer outra tecla, perdeu!
    gameOver();
  }
});

// Adicionar os ouvintes de evento para os botões
document.getElementById('btnA').addEventListener('click', () => {
  // Vamos supor que a resposta certa seja "A"
  gameOver();
});

document.getElementById('btnB').addEventListener('click', () => {
  // Resposta errada, então game over
  gameOver();
});

document.getElementById('btnC').addEventListener('click', () => {
  // Resposta errada, então game over
  gameOver();
});

document.getElementById('btnD').addEventListener('click', () => {
  // Resposta errada, então game over
  gameOver();
});
