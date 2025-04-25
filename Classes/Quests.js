export class Fase {
    constructor(id, pergunta) {
      this.id = id;             
      this.pergunta = pergunta; 
    }

    static obterPerguntaPorId(id, fases) {
        const fase = fases.find(fase => fase.id === id); // Encontra a fase pelo id
        return fase ? fase.pergunta : null; // Se a fase for encontrada, retorna a pergunta
    }
}
