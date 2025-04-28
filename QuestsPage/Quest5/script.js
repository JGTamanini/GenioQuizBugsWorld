import { GerenciadorDeFases } from "../../Classes/QuestManager.js" 

const questManager = new GerenciadorDeFases();  

// Função que verifica se a resposta está correta
function verificar(correto) {
    if (correto) {
      questManager.irParaProximaFase();  // Se a resposta estiver correta, avança para a próxima fase
    } else {
      window.location.href = "/GameOverPage/index.html"  // Se a resposta estiver errada, redireciona para a página de Game Over
    }
}

// Torna a função verificar acessível globalmente, para ser chamada de outros lugares no código
window.verificar = verificar;