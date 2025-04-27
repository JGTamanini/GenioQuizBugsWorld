import {GerenciadorDeFases} from "../../Classes/QuestManager.js"

const questManager = new GerenciadorDeFases();

function verificar(correto) {
    if (correto) {
      questManager.irParaProximaFase();
    } else {
      window.location.href = "/GameOverPage/index.html"
    }
}

window.verificar = verificar