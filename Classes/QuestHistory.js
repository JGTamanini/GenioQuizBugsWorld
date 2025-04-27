
export class QuestHistory {
    constructor() {
      this.fasesSelecionadas = this.carregarFasesSelecionadas();
    }
  
    carregarFasesSelecionadas() {
      // Recupera o array de fases selecionadas do sessionStorage
      const fases = JSON.parse(sessionStorage.getItem("ordemFases"));
      return fases ? fases : [];
    }

    obterFasesAdjacentes(posicaoAtual) {
        // Verifica se a posição atual é válida
        if (posicaoAtual < 0 || posicaoAtual >= this.fasesSelecionadas.length) {
          console.error("Posição inválida.");
          return;
        }
    
        // Fase anterior: Pega todas as fases até a posição anterior
        const fasesAnteriores = this.fasesSelecionadas.slice(0, posicaoAtual);
    
        // Fase posterior: Pega todas as fases após a posição atual
        const fasesPosteriores = this.fasesSelecionadas.slice(posicaoAtual + 1);
    
        // Exibe as fases encontradas
        console.log("Fases Anteriores:", fasesAnteriores);
        console.log("Fases Posteriores:", fasesPosteriores);
    
        // Retorna as fases encontradas
        return {
          fasesAnteriores,
          fasesPosteriores
        };
      }
  }



/*
export class QuestHistory {
  constructor() {
      this.fasesSelecionadas = this.carregarFasesSelecionadas();
  }

  carregarFasesSelecionadas() {
      // Recupera o array de fases selecionadas do sessionStorage
      const fases = JSON.parse(sessionStorage.getItem("ordemFases"));
      return fases ? fases : [];
  }

  obterFasesAdjacentes(posicaoAtual) {
      // Verifica se a posição atual é válida
      if (posicaoAtual < 0 || posicaoAtual >= this.fasesSelecionadas.length) {
          console.error("Posição inválida.");
          return;
      }

      // Fase anterior: Pega todas as fases até a posição anterior
      const fasesAnteriores = this.fasesSelecionadas.slice(0, posicaoAtual);

      // Fase posterior: Pega todas as fases após a posição atual
      const fasesPosteriores = this.fasesSelecionadas.slice(posicaoAtual + 1);

      // Exibe as fases encontradas
      console.log("Fases Anteriores:", fasesAnteriores);
      console.log("Fases Posteriores:", fasesPosteriores);

      // Retorna as fases encontradas
      return {
          fasesAnteriores,
          fasesPosteriores
      };
  }
}
*/
