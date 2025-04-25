const perguntas = [
    {
      id: 1,
      texto: "Qual é a capital da França?",
      opcoes: ["Paris", "Londres", "Berlim", "Roma"],
      correta: "Paris"
    },
    {
      id: 2,
      texto: "O que é HTML?",
      opcoes: ["Linguagem de marcação", "Estilo", "Programação", "Banco de dados"],
      correta: "Linguagem de marcação"
    },
    {
      id: 8,
      tipo: "loop",
      texto: "Essa pergunta já foi feita?"
    }
];
  
let perguntasFeitas = [];
let perguntaAtual = null;
  
function sortearProxima() {
    const restantes = perguntas.filter(p => !perguntasFeitas.includes(p.id));
    const aleatoria = restantes[Math.floor(Math.random() * restantes.length)];
    perguntaAtual = aleatoria;
    perguntasFeitas.push(aleatoria.id);
  
    if (aleatoria.tipo === "loop") {
        mostrarPerguntaLoop();
    } else {
        mostrarPerguntaNormal(aleatoria);
    }
}
  
function mostrarPerguntaNormal(p) {
    // Substitui o conteúdo do <h1> com a pergunta
    document.getElementById("pergunta").innerText = p.texto;
  
    // Atualiza a instrução
    document.getElementById("instrucao").innerText = "Essa pergunta já foi feita?";

    const botoes = document.querySelectorAll("button");
    botoes[0].innerText = "Sim";
    botoes[1].innerText = "Não";

    // Exibir os botões de Sim e Não
    botoes[0].style.display = "inline-block";
    botoes[1].style.display = "inline-block";

    botoes[0].onclick = () => {
        alert("Boa! Vamos continuar.");
        sortearProxima();
    };

    botoes[1].onclick = () => {
        alert("Resposta errada! Game Over.");
    };
}
  
function mostrarPerguntaLoop() {
    const jaFoiFeita = perguntasFeitas.includes(perguntaAtual.id);

    document.getElementById("pergunta").innerText = perguntaAtual.texto;
  
    // Atualiza a instrução para a pergunta de loop
    document.getElementById("instrucao").innerText = "Essa pergunta já foi feita?";

    const btnSim = document.getElementById("btnSim");
    const btnNao = document.getElementById("btnNao");

    // Exibir os botões e adicionar o comportamento
    btnSim.style.display = "inline-block";
    btnNao.style.display = "inline-block";
  
    btnSim.onclick = () => {
        if (jaFoiFeita) {
            alert("Boa! Vamos continuar.");
            sortearProxima();
        } else {
            alert("Resposta errada! Game Over.");
        }
    };
  
    btnNao.onclick = () => {
        if (!jaFoiFeita) {
            alert("Boa! Vamos continuar.");
            sortearProxima();
        } else {
            alert("Resposta errada! Game Over.");
        }
    };
}
  
// Inicia o jogo com a primeira pergunta
sortearProxima();
