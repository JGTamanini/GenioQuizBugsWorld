// Classe Fase
export class Fase {
    // Construtor da classe: recebe um ID e uma pergunta, e armazena como propriedades do objeto
    constructor(id, pergunta) {
        this.id = id;           // Identificador único da fase
        this.pergunta = pergunta; // Texto da pergunta associada à fase
    }

    // Método estático que permite obter a pergunta de uma fase com base no ID
    // - `id`: o ID da fase que se deseja buscar
    // - `fases`: um array contendo todas as instâncias da classe Fase
    static obterPerguntaPorId(id, fases) {
        // Procura no array a fase com o ID correspondente
        const fase = fases.find(fase => fase.id === id);

        if (fase) {
            return fase.pergunta; // Se encontrada, retorna a pergunta
        } else {
            console.error(`Fase com id ${id} não encontrada!`); // Exibe erro se não encontrar
            return null; // Retorna null em caso de erro
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