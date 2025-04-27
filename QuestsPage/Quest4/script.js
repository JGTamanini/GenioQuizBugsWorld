import { QuestHistory } from '../../Classes/QuestHistory.js'; 
import { GerenciadorDeFases } from '../../Classes/QuestManager.js'; 
import { Fase } from '../../Classes/Quests.js'; 


document.addEventListener("DOMContentLoaded", function() {
    // Instanciando os objetos necessários
    const questHistory = new QuestHistory();
    const gerenciadorDeFases = new GerenciadorDeFases();

    function exibirPergunta() {
        const faseAtual = parseInt(sessionStorage.getItem("faseAtual")) || 0;
        const fasesSelecionadas = questHistory.fasesSelecionadas;  // Agora deve conter os objetos completos
      
        console.log("Fase Atual:", faseAtual);
        console.log("Fases Selecionadas:", fasesSelecionadas);
        
        if (fasesSelecionadas.length > 0 && faseAtual < fasesSelecionadas.length) {
          const faseAtualObjeto = fasesSelecionadas[faseAtual];  // Agora você tem o objeto completo da fase
          console.log("Fase Atual Objeto:", faseAtualObjeto);
      
          const pergunta = faseAtualObjeto.pergunta;  // A pergunta está no objeto da fase
      
          if (pergunta) {
            document.getElementById('pergunta').innerText = pergunta;
      
            const perguntaJaFeita = questHistory.fasesSelecionadas.slice(0, faseAtual).some(fase => fase.id === faseAtualObjeto.id);
      
            document.getElementById('instrucao').innerText = perguntaJaFeita ? "Essa pergunta já foi feita!" : "Essa pergunta ainda não foi feita.";
      
            definirRespostas(perguntaJaFeita);
          } else {
            console.error("Pergunta não encontrada para a fase", faseAtualObjeto.id);
          }
        } else {
          console.error("Fase atual não é válida ou não há fases selecionadas.");
        }
      }

    // Função para definir as respostas de "Sim" ou "Não"
    function definirRespostas(perguntaJaFeita) {
        const btnSim = document.getElementById('btnSim');
        const btnNao = document.getElementById('btnNao');

        // Verifica se os botões existem
        if (btnSim && btnNao) {
            // Se a pergunta foi feita antes, a resposta certa é "Sim"
            if (perguntaJaFeita) {
                btnSim.onclick = () => {
                    alert("Resposta Correta!");
                    gerenciadorDeFases.irParaProximaFase(); // Vai para a próxima fase
                };
                btnNao.onclick = () => {
                    alert("Resposta Errada!");
                };
            } else {
                // Se a pergunta não foi feita antes, a resposta certa é "Não"
                btnNao.onclick = () => {
                    alert("Resposta Correta!");
                    gerenciadorDeFases.irParaProximaFase(); // Vai para a próxima fase
                };
                btnSim.onclick = () => {
                    alert("Resposta Errada!");
                };
            }
        } else {
            console.error("Botões não encontrados!");
        }
    }

    // Chamando a função para exibir a pergunta
    exibirPergunta(); 
});
