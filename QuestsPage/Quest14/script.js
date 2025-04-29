// Importa a classe responsável por gerenciar o fluxo das fases do jogo
import { GerenciadorDeFases } from "../../Classes/QuestManager.js";

// Cria uma instância do GerenciadorDeFases, que será usada para navegar entre fases
const questManager = new GerenciadorDeFases();

function verificar(correto) {
    if (correto) {
        // Se a resposta estiver correta, avança para a próxima fase
        questManager.irParaProximaFase();
    } else {
        // Se estiver errada, redireciona o jogador para a tela de Game Over
        window.location.href = "/GameOverPage/index.html";
    }
}

// Torna a função verificar acessível no escopo global (por exemplo, para ser chamada no HTML com onclick="verificar(true)")
window.verificar = verificar;
