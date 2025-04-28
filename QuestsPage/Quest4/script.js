import { QuestHistory } from '../../Classes/QuestHistory.js'; 
import { GerenciadorDeFases } from '../../Classes/QuestManager.js'; 
import { fases } from '../../Classes/Quests.js'; 

document.addEventListener("DOMContentLoaded", function() {
    const questHistory = new QuestHistory();
    const gerenciadorDeFases = new GerenciadorDeFases();

    function exibirPergunta() {
        const faseAtualIndex = parseInt(sessionStorage.getItem("faseAtual")) || 0;
        const fasesSelecionadas = questHistory.fasesSelecionadas;

        console.log("Fase Atual:", faseAtualIndex);
        console.log("Fases Selecionadas:", fasesSelecionadas);

        if (fasesSelecionadas.length > 0 && faseAtualIndex <= fasesSelecionadas.length) {
            const faseAtual = fasesSelecionadas[faseAtualIndex];

            console.log("Fase Atual Objeto:", faseAtual);

            if (faseAtual && faseAtual.pergunta) {
                document.getElementById('pergunta').innerText = faseAtual.pergunta;

                const perguntaJaFeita = fasesSelecionadas.slice(0, faseAtualIndex).some(fase => fase.id === faseAtual.id);

                definirRespostas(perguntaJaFeita);
            } else {
                console.error("Pergunta não encontrada para a fase", faseAtual.id);
            }
        } else {
            console.error("Fase atual inválida ou não há fases selecionadas.");
        }
    }

    function definirRespostas(perguntaJaFeita) {
        const btnSim = document.getElementById('btnSim');
        const btnNao = document.getElementById('btnNao');

        if (btnSim && btnNao) {
            if (perguntaJaFeita) {
                btnSim.onclick = () => {
                    gerenciadorDeFases.irParaProximaFase();
                };
                btnNao.onclick = () => {
                    window.location.href = "/GameOverPage/index.html";
                };
            } else {
                btnNao.onclick = () => {
                    gerenciadorDeFases.irParaProximaFase();
                };
                btnSim.onclick = () => {
                    window.location.href = "/GameOverPage/index.html";
                };
            }
        } else {
            console.error("Botões não encontrados!");
        }
    }
    exibirPergunta();
});