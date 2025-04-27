import {GerenciadorDeFases} from "../../Classes/QuestManager.js"

const questManager = new GerenciadorDeFases();

let esperando = false;
let podeAvancar = false;
const botao = document.getElementById("lagBotao");

function clicarLag() {
  if (esperando) {
    // Se clicar de novo antes de liberar, perde
    window.location.href = "/GameOverPage/index.html";
    return;
  }

  if (podeAvancar) {
    // Segunda tentativa correta, avança
    questManager.irParaProximaFase();
    return;
  }

  // Primeira tentativa, inicia "lag"
  esperando = true;
  botao.textContent = "AGUARDE...";
  botao.classList.add("aguarde");

  setTimeout(() => {
    esperando = false;
    podeAvancar = true;
    botao.textContent = "CLIQUE";
    botao.classList.remove("aguarde");
  }, 4000); // 4 segundos
}

window.clicarLag = clicarLag