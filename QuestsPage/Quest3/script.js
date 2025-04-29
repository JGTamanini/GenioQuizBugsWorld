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

// Armazena o nome correto que está escondido no título da página
const respostaCorreta = document.title.trim().toLowerCase(); // "quine"

// Pega todos os botões de resposta
document.querySelectorAll('button').forEach(botao => {
  botao.addEventListener('click', () => {
    // Extrai apenas o texto depois do ponto (ex: "B. Quine" => "Quine")
    const textoBotao = botao.innerText.split('. ')[1]?.trim().toLowerCase();

    // Compara o texto do botão com a resposta correta
    if (textoBotao === respostaCorreta) {
      // Acertou!
      avancarFase();
    } else {
      // Errou!
      gameOver();
    }
  });
});
