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

// Detecta se a página foi recarregada (F5 ou ícone do navegador)
const navType = performance.getEntriesByType("navigation")[0].type;


// Se foi um reload E o jogador não clicou no botão, redireciona
if (navType === "reload" && !sessionStorage.getItem("atualizouManual")) {
  avancarFase();
}

// Quando a página terminar de carregar
window.addEventListener("load", () => {
  const botao = document.querySelector("button");
  // Quando clica no botão redireciona para a pagina de Game over e tira do array de perguntas
  if (botao) {
    botao.addEventListener("click", () => {
      sessionStorage.setItem("atualizouManual", "true");
      gameOver();
    });
  }

  // Remove a flag depois de um tempo (para futuras tentativas)
  setTimeout(() => { sessionStorage.removeItem("atualizouManual");}, 500);});
