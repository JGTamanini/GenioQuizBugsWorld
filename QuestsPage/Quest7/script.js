import { GerenciadorDeFases } from "../../Classes/QuestManager.js";

const questManager = new GerenciadorDeFases(); // Cria uma instância do GerenciadorDeFases

document.addEventListener("DOMContentLoaded", function() {
  const popupContainer = document.querySelector(".popup-container");
  const overlay = document.querySelector(".overlay");
  const btnSim = document.getElementById("btnSim");
  const btnNao = document.getElementById("btnNao");
  const btnX = document.getElementById("btnX");

  // Abre o popup após 500ms
  setTimeout(function() {
    overlay.style.display = "block";
    setTimeout(function() {
      overlay.style.opacity = 1;
      popupContainer.querySelector(".popup").style.opacity = 1;
      popupContainer.querySelector(".popup").style.transform = "scale(1)";
    }, 10);
  }, 500);

  // Fecha o popup com animação e chama o callback após o fechamento
  function fecharPopup(callback) {
    overlay.style.opacity = 0;
    popupContainer.querySelector(".popup").style.opacity = 0;
    popupContainer.querySelector(".popup").style.transform = "scale(0.9)";
    setTimeout(function() {
      overlay.style.display = "none";
      if (callback) callback(); // Se tiver callback, chama depois de fechar
    }, 300);
  }

  // Função que vai verificar a resposta e agir conforme a escolha
  function verificar(correto) {
    if (correto) {
      questManager.irParaProximaFase(); // Se for correto, vai para a próxima fase
    } else {
      window.location.href = "/GameOverPage/index.html"; // Se for incorreto, vai para a página de Game Over
    }
  }

  // Função de clicar nos botões
  function clicar(resposta) {
    console.log("Resposta: " + resposta);
    
    if (resposta === 'X') {
      fecharPopup(() => {
        questManager.irParaProximaFase(); // Vai para a próxima fase se clicar no 'X'
      });
    } else if (resposta === 'Sim' || resposta === 'Não') {
      fecharPopup(() => {
        verificar(false); // Se clicar 'Sim' ou 'Não', o jogo termina e vai para a página Game Over
      });
    }
  }

  // Adiciona os eventos de clique aos botões
  btnSim.addEventListener("click", () => clicar('Sim'));
  btnNao.addEventListener("click", () => clicar('Não'));
  btnX.addEventListener("click", () => clicar('X'));
});
