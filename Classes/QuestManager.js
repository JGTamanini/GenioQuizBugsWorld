export class GerenciadorDeFases {
    constructor() {
      this.totalFases = 15;
      this.fasesPorJogo = 10;
      this.prefixoCaminho = "/QuestsPage/Quest";}
  
    iniciarJogo() {
      const ids = Array.from({ length: this.totalFases }, (_, i) => i + 1);
      
      const embaralhadas = ids.sort(() => Math.random() - 0.5);
      
      const selecionadas = embaralhadas.slice(0, this.fasesPorJogo);
  
      sessionStorage.setItem("ordemFases", JSON.stringify(selecionadas));
  
      sessionStorage.setItem("faseAtual", "0");
  
      this.irParaProximaFase();
    }
  
    irParaProximaFase() {
      const ordem = JSON.parse(sessionStorage.getItem("ordemFases"));
      
      let atual = parseInt(sessionStorage.getItem("faseAtual"));
  
      if (atual >= ordem.length) {
        window.location.href = "../MainScreen/index.html";  
      } else {
        const proximaFase = ordem[atual];
  
        sessionStorage.setItem("faseAtual", (atual + 1).toString());
  
        window.location.href = `${this.prefixoCaminho}${proximaFase}/index.html`;
      }
    }
  }

    /*
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
      
        // Armazenar os objetos completos da fase, não apenas os IDs
        const fasesCompletas = embaralhadas.slice(0, this.fasesPorJogo).map(id => {
          return fases.find(fase => fase.id === id);  // Encontrando o objeto da fase no array de fases
        });
      
        sessionStorage.setItem("ordemFases", JSON.stringify(fasesCompletas));  // Salvar objetos completos
      
        sessionStorage.setItem("faseAtual", "0");
      
        this.irParaProximaFase();
      }
      irParaProximaFase() {
          const ordem = JSON.parse(sessionStorage.getItem("ordemFases"));
          let atual = parseInt(sessionStorage.getItem("faseAtual"));
  
          if (atual >= ordem.length) {
              window.location.href = "../MainScreen/index.html";
          } else {
              const proximaFase = ordem[atual];
  
              sessionStorage.setItem("faseAtual", (atual + 1).toString());
  
              window.location.href = `${this.prefixoCaminho}${proximaFase.id}/index.html`; // Corrigir o caminho com o id
          }
      }
  }
  */