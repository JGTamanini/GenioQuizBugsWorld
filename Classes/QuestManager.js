import { fases } from '../../Classes/Quests.js';

export class GerenciadorDeFases {
    constructor() {
        this.totalFases = 15;
        this.fasesPorJogo = 10;
        this.prefixoCaminho = "/QuestsPage/Quest";
    }

    iniciarJogo() {
        const ids = Array.from({ length: this.totalFases }, (_, i) => i + 1);
    
        const embaralhadas = ids.sort(() => Math.random() - 0.5);
    
        const fasesSelecionadas = embaralhadas.slice(0, this.fasesPorJogo).map(id => {
            const faseEncontrada = fases.find(f => f.id === id);
            if (!faseEncontrada) {
                console.error(`Fase com id ${id} não encontrada!`);
                return null;
            }
            return faseEncontrada;
        }).filter(fase => fase !== null);
    
        while (fasesSelecionadas.length < this.fasesPorJogo) {
            const faseFaltante = fases.find(f => !fasesSelecionadas.includes(f));
            if (faseFaltante) {
                fasesSelecionadas.push(faseFaltante);
            } else {
                console.error("Não há fases suficientes para completar o jogo.");
                break;
            }
        }
    
        sessionStorage.setItem("ordemFases", JSON.stringify(fasesSelecionadas));
        sessionStorage.setItem("faseAtual", "0");
    
        this.irParaProximaFase();
    }    

    irParaProximaFase() {
        const ordem = JSON.parse(sessionStorage.getItem("ordemFases"));
        let atual = parseInt(sessionStorage.getItem("faseAtual"));

        if (atual >= ordem.length) {
            window.location.href = "../../EndPage/index.html";
        } else {
            const proximaFase = ordem[atual];

            sessionStorage.setItem("faseAtual", (atual + 1).toString());

            window.location.href = `${this.prefixoCaminho}${proximaFase.id}/index.html`;
        }
    }
}
