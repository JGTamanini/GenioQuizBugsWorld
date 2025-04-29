// Importa todas as fases definidas no arquivo Quests.js
import { fases } from '../../Classes/Quests.js';

// Classe responsável por gerenciar o fluxo do jogo (seleção e navegação entre fases)
export class GerenciadorDeFases {
    constructor() {
        this.totalFases = 15; // Número total de fases disponíveis no banco
        this.fasesPorJogo = 10; // Quantidade de fases que serão jogadas por partida
        this.prefixoCaminho = "/QuestsPage/Quest"; // Caminho base para os arquivos HTML das fases
    }

    // Função que inicializa o jogo: sorteia fases e salva no sessionStorage
    iniciarJogo() {
        // Cria um array com IDs de 1 a 15 (representando as fases disponíveis)
        const ids = Array.from({ length: this.totalFases }, (_, i) => i + 1);

        // Embaralha os IDs de forma aleatória
        const embaralhadas = ids.sort(() => Math.random() - 0.5);

        // Mapeia os IDs embaralhados para os objetos de fase correspondentes
        const fasesSelecionadas = embaralhadas.slice(0, this.fasesPorJogo).map(id => {
            const faseEncontrada = fases.find(f => f.id === id); // Busca a fase pelo ID
            if (!faseEncontrada) {
                console.error(`Fase com id ${id} não encontrada!`);
                return null; // Retorna null se não encontrar a fase
            }
            return faseEncontrada;
        }).filter(fase => fase !== null); // Remove fases que não foram encontradas (null)

        // Se por algum motivo não houver fases suficientes, completa com outras disponíveis
        while (fasesSelecionadas.length < this.fasesPorJogo) {
            const faseFaltante = fases.find(f => !fasesSelecionadas.includes(f));
            if (faseFaltante) {
                fasesSelecionadas.push(faseFaltante);
            } else {
                console.error("Não há fases suficientes para completar o jogo.");
                break;
            }
        }

        // Armazena as fases selecionadas e a fase inicial no sessionStorage
        sessionStorage.setItem("ordemFases", JSON.stringify(fasesSelecionadas));
        sessionStorage.setItem("faseAtual", "0");

        // Inicia o jogo indo para a primeira fase
        this.irParaProximaFase();
    }

    // Função que avança para a próxima fase do jogo
    irParaProximaFase() {
        // Recupera a ordem das fases do jogo atual
        const ordem = JSON.parse(sessionStorage.getItem("ordemFases"));

        // Recupera a fase atual (convertendo de string para número)
        let atual = parseInt(sessionStorage.getItem("faseAtual"));

        // Verifica se o jogo chegou ao fim (todas as fases foram jogadas)
        if (atual >= ordem.length) {
            // Redireciona para a tela final do jogo
            window.location.href = "../../EndPage/index.html";
        } else {
            // Pega o objeto da próxima fase
            const proximaFase = ordem[atual];

            // Atualiza o número da fase atual no sessionStorage
            sessionStorage.setItem("faseAtual", (atual + 1).toString());

            // Redireciona para a página HTML da próxima fase com base no ID
            window.location.href = `${this.prefixoCaminho}${proximaFase.id}/index.html`;
        }
    }
}
