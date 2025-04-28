// Classe Fase
export class Fase {
    constructor(id, pergunta) {
        this.id = id;
        this.pergunta = pergunta;
    }

    static obterPerguntaPorId(id, fases) {
        const fase = fases.find(fase => fase.id === id); // Encontra a fase com o ID correspondente
        if (fase) {
            return fase.pergunta; // Retorna a pergunta da fase
        } else {
            console.error(`Fase com id ${id} não encontrada!`);
            return null;
        }
    }
}

// Defina as fases do jogo
export const fases = [
    new Fase(1, "Qual palavra está correta?"),
    new Fase(2, "Qual a letra entre A e C?"),
    new Fase(3, "Qual é o nome do programa que imprime seu próprio código-fonte sem receber entrada externa?"),
    new Fase(4, "Essa pergunta já foi feita?"),
    new Fase(5, "Qual é o resultado da expressão `3 + '3'` em JavaScript?"),
    new Fase(6, "Como centraliza uma div?"),
    new Fase(7, "Permitir cookies?"),
    new Fase(8, "Clique na letra&nbsp;"),
    new Fase(9, "ATUALIZAR A PÁGINA"),
    new Fase(10, "O que NaN significa em JavaScript?"),
    new Fase(11, "Qual a resposta Correta?"),
    new Fase(12, "DIGITE A PALAVRA 'TECNOLOGIA'"),
    new Fase(13, "QUAL A PRIMEIRA ALTERNATIVA?"),
    new Fase(14, "Qual desses é um tipo primitivo em JavaScript?"),
    new Fase(15, "Clique duas vezes no botão")
];