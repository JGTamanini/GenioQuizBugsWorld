import {GerenciadorDeFases} from "../Classes/QuestManager.js"

const questManager = new GerenciadorDeFases();

function iniciar() {
    questManager.iniciarJogo();
}
function instrucoes() {
    document.getElementById("modal-instrucoes").classList.remove("hidden");
}

function creditos() {
    document.getElementById("modal-creditos").classList.remove("hidden");
}

function fecharModal() {
    document.getElementById("modal-instrucoes").classList.add("hidden");
    document.getElementById("modal-creditos").classList.add("hidden");
}

window.onload = () => {
    window.iniciar = iniciar;
    window.instrucoes = instrucoes;
    window.creditos = creditos;
    window.fecharModal = fecharModal;
};  