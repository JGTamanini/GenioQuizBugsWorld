// Importa as classes responsáveis por histórico de perguntas, gerenciamento de fases e as fases em si
import { QuestHistory } from '../../Classes/QuestHistory.js'; 
import { GerenciadorDeFases } from '../../Classes/QuestManager.js'; 
import { fases } from '../../Classes/Quests.js'; 

// Aguarda o carregamento completo do DOM para iniciar a lógica do jogo
document.addEventListener("DOMContentLoaded", function() {
    // Cria uma instância que gerencia o histórico das perguntas feitas
    const questHistory = new QuestHistory();

    // Cria uma instância que gerencia o avanço entre as fases
    const gerenciadorDeFases = new GerenciadorDeFases();

    // Função principal para exibir a pergunta atual na interface
    function exibirPergunta() {
        // Obtém o índice da fase atual armazenado na sessionStorage, ou 0 se não houver
        const faseAtualIndex = parseInt(sessionStorage.getItem("faseAtual")) || 0;

        // Recupera a lista de fases que foram selecionadas anteriormente
        const fasesSelecionadas = questHistory.fasesSelecionadas;

        console.log("Fase Atual:", faseAtualIndex);
        console.log("Fases Selecionadas:", fasesSelecionadas);

        // Verifica se há fases selecionadas e se o índice atual está dentro do limite
        if (fasesSelecionadas.length > 0 && faseAtualIndex <= fasesSelecionadas.length) {
            const faseAtual = fasesSelecionadas[faseAtualIndex]; // Obtém o objeto da fase atual

            console.log("Fase Atual Objeto:", faseAtual);

            // Verifica se a fase possui uma pergunta válida
            if (faseAtual && faseAtual.pergunta) {
                // Exibe o texto da pergunta na tela
                document.getElementById('pergunta').innerText = faseAtual.pergunta;

                // Verifica se essa pergunta já foi feita anteriormente
                const perguntaJaFeita = fasesSelecionadas
                    .slice(0, faseAtualIndex)
                    .some(fase => fase.id === faseAtual.id);

                // Define o comportamento dos botões com base na pergunta já ter sido feita ou não
                definirRespostas(perguntaJaFeita);
            } else {
                console.error("Pergunta não encontrada para a fase", faseAtual.id);
            }
        } else {
            console.error("Fase atual inválida ou não há fases selecionadas.");
        }
    }

    // Função que define a lógica dos botões "Sim" e "Não"
    function definirRespostas(perguntaJaFeita) {
        const btnSim = document.getElementById('btnSim');
        const btnNao = document.getElementById('btnNao');

        // Garante que os botões existem na página
        if (btnSim && btnNao) {
            // Se a pergunta já foi feita, a resposta correta é "Sim"
            if (perguntaJaFeita) {
                btnSim.onclick = () => {
                    gerenciadorDeFases.irParaProximaFase(); // Avança para a próxima fase
                };
                btnNao.onclick = () => {
                    window.location.href = "/GameOverPage/index.html"; // Vai para a tela de Game Over
                };
            } else {
                // Caso seja a primeira vez respondendo essa pergunta, a resposta correta é "Não"
                btnNao.onclick = () => {
                    gerenciadorDeFases.irParaProximaFase(); // Avança para a próxima fase
                };
                btnSim.onclick = () => {
                    window.location.href = "/GameOverPage/index.html"; // Vai para a tela de Game Over
                };
            }
        } else {
            console.error("Botões não encontrados!");
        }
    }

    // Inicia o processo exibindo a primeira pergunta
    exibirPergunta();
});
