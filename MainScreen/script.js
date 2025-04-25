import {QuestManager} from "../Classes/QuestManager.js"

const questManager = new QuestManager();

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