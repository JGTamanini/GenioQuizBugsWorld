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

// Contador
let tempo = 5;
const contadorSpan = document.getElementById("contador");


// Muda o número no contador e atualiza
const intervalo = setInterval(() => {
  tempo--;
  contadorSpan.textContent = tempo;

  if (tempo <= 0) {
    clearInterval(intervalo);
  }
}, 1000);

// Função que verifica se o botão escolhido é correto
function verificar(correto) {
    if (correto) {
      avancarFase();
    } else {
      gameOver()
    }
}

// Tornar a função acessível pelo HTML
window.verificar = verificar;