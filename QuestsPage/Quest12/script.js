// Importa a classe responsável por gerenciar a transição entre fases
import { GerenciadorDeFases } from "../../Classes/QuestManager.js";

// Cria uma instância do gerenciador de fases
const questManager = new GerenciadorDeFases();

// Lista de palavras possíveis que o jogador pode ser solicitado a digitar
const opsPalavras = [
  "ALGORITMO",
  "VARIAVEL",
  "FUNCAO",
  "COMPILADOR",
  "DEPURACAO",
  "SINTAXE",
  "FRAMEWORK",
  "BIBLIOTECA",
  "CODIFICACAO",
  "SCRIPT",
  "TECNOLOGIA"
];

// Escolhe aleatoriamente uma palavra da lista como a palavra correta
const palavraCorreta = opsPalavras[Math.floor(Math.random() * opsPalavras.length)];

// Exibe a instrução com a palavra escolhida para o jogador digitar
const titulo = document.getElementById("palavra-titulo");
titulo.innerText = `DIGITE A PALAVRA "${palavraCorreta}"`;

// Mapeamento bugado de letras — ao digitar uma letra, outra será exibida no input
const mapaBugado = {
  A: 'M', B: 'F', C: 'Z', D: 'L', E: 'J', F: 'A', G: 'D', 
  H: 'E', I: 'Y', J: 'O', K: 'G', L: 'S', M: 'W', N: 'T', 
  O: 'N', P: 'X', Q: 'U', R: 'B', S: 'C', T: 'H', U: 'K', 
  V: 'P', W: 'R', X: 'V', Y: 'Q', Z: 'I'
};

// Seleciona o campo de entrada de texto do jogador
const input = document.getElementById("entrada");

// Aplica o comportamento bugado ao campo de texto
if (input) {
  input.addEventListener("keydown", function (e) {
    // Verifica se é uma tecla de letra (A-Z)
    if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault(); // Impede que a letra real seja inserida

      const letra = e.key.toUpperCase(); // Converte para maiúscula
      const bugada = mapaBugado[letra] || letra; // Mapeia para a letra bugada (ou a mesma, se não estiver no mapa)
      input.value += bugada; // Adiciona a letra bugada ao input
    }
  });
}

// Função chamada ao clicar no botão de verificar
function verificar() {
  const tentativa = input.value.toUpperCase(); // Pega o que o jogador digitou
  if (tentativa === palavraCorreta) {
    // Se digitou a palavra correta (apesar do teclado bugado), avança
    questManager.irParaProximaFase();
  } else {
    // Caso contrário, vai para a tela de Game Over
    window.location.href = "/GameOverPage/index.html";
  }
}

// Disponibiliza a função verificar no escopo global para poder ser chamada via HTML (ex: onclick="verificar()")
window.verificar = verificar;
