// Define a classe QuestHistory, responsável por gerenciar o histórico das fases jogadas
export class QuestHistory {
    
  // Construtor da classe é chamado ao instanciar um novo objeto
  constructor() {
      // Inicializa a propriedade 'fasesSelecionadas' com os dados salvos no sessionStorage
      this.fasesSelecionadas = this.carregarFasesSelecionadas();
  }

  // Método responsável por carregar a lista de fases selecionadas do sessionStorage
  carregarFasesSelecionadas() {
      // Recupera o array salvo em "ordemFases" no sessionStorage
      const fases = JSON.parse(sessionStorage.getItem("ordemFases"));

      // Retorna o array se existir, ou um array vazio se nada foi encontrado
      return fases ? fases : [];
  }

  // Método que retorna as fases anteriores e posteriores à fase atual
  obterFasesAdjacentes(posicaoAtual) {
      // Verifica se a posição atual é válida dentro do array de fases selecionadas
      if (posicaoAtual < 0 || posicaoAtual >= this.fasesSelecionadas.length) {
          console.error("Posição inválida.");
          return;  // Encerra a função se a posição estiver fora dos limites
      }

      // Pega todas as fases que vieram antes da fase atual
      const fasesAnteriores = this.fasesSelecionadas.slice(0, posicaoAtual);

      // Pega todas as fases que ainda virão após a fase atual
      const fasesPosteriores = this.fasesSelecionadas.slice(posicaoAtual + 1);

      // Exibe as fases anteriores e posteriores no console (para depuração)
      console.log("Fases Anteriores:", fasesAnteriores);
      console.log("Fases Posteriores:", fasesPosteriores);

      // Retorna um objeto contendo as fases anteriores e posteriores
      return {
          fasesAnteriores,
          fasesPosteriores
      };
  }
}
