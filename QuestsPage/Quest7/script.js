// Importa a classe GerenciadorDeFases, que gerencia o progresso entre fases
import { GerenciadorDeFases } from "../../Classes/QuestManager.js";

// Cria uma instância do gerenciador de fases
const questManager = new GerenciadorDeFases();

document.addEventListener("DOMContentLoaded", function() {
  // Seleciona elementos do DOM que serão manipulados
  const popupContainer = document.querySelector(".popup-container"); // Container do popup
  const overlay = document.querySelector(".overlay");                 // Fundo escurecido
  const btnSim = document.getElementById("btnSim");                   // Botão "Sim"
  const btnNao = document.getElementById("btnNao");                   // Botão "Não"
  const btnX = document.getElementById("btnX");                       // Botão "X"

  // Aguarda 500ms após o carregamento da página e então exibe o popup com animação
  setTimeout(function() {
    overlay.style.display = "block"; // Mostra o fundo escurecido
    setTimeout(function() {
      // Anima a opacidade e escala do popup (efeito de aparecer suavemente)
      overlay.style.opacity = 1;
      popupContainer.querySelector(".popup").style.opacity = 1;
      popupContainer.querySelector(".popup").style.transform = "scale(1)";
    }, 10);
  }, 500);

  // Função que fecha o popup com animação e executa uma ação (callback) após o fechamento
  function fecharPopup(callback) {
    // Inicia a animação de fechamento
    overlay.style.opacity = 0;
    popupContainer.querySelector(".popup").style.opacity = 0;
    popupContainer.querySelector(".popup").style.transform = "scale(0.9)";
    
    // Aguarda a animação terminar (300ms) e depois oculta o overlay
    setTimeout(function() {
      overlay.style.display = "none";
      if (callback) callback(); // Executa a função passada (se existir)
    }, 300);
  }

  // Função que verifica a resposta e age de acordo com ela
  function verificar(correto) {
    if (correto) {
      questManager.irParaProximaFase(); // Resposta correta: avança para a próxima fase
    } else {
      window.location.href = "/GameOverPage/index.html"; // Resposta errada: redireciona para a tela de Game Over
    }
  }

  // Lida com os cliques dos botões do popup
  function clicar(resposta) {
    console.log("Resposta: " + resposta); // Apenas para depuração no console
    
    if (resposta === 'X') {
      // Se o jogador clicar em 'X', fecha o popup e vai para a próxima fase
      fecharPopup(() => {
        questManager.irParaProximaFase();
      });
    } else if (resposta === 'Sim' || resposta === 'Não') {
      // Se clicar 'Sim' ou 'Não', considera como erro e redireciona para Game Over
      fecharPopup(() => {
        verificar(false);
      });
    }
  }

  // Associa os botões do DOM às funções de clique com os respectivos valores
  btnSim.addEventListener("click", () => clicar('Sim'));
  btnNao.addEventListener("click", () => clicar('Não'));
  btnX.addEventListener("click", () => clicar('X'));
});
