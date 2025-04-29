// Importa a classe GerenciadorDeFases que lida com o controle das fases do jogo
import { GerenciadorDeFases } from "../Classes/QuestManager.js";

// Cria uma instância do gerenciador para ser usada nas funções abaixo
const questManager = new GerenciadorDeFases();

// Função chamada ao clicar em "Iniciar Jogo"
function iniciar() {
    // Inicia o jogo chamando o método que sorteia e define a ordem das fases
    questManager.iniciarJogo();
}

// Função chamada ao clicar em "Instruções"
function instrucoes() {
    // Remove a classe "hidden" do modal de instruções, tornando-o visível
    document.getElementById("modal-instrucoes").classList.remove("hidden");
}

// Função chamada ao clicar em "Créditos"
function creditos() {
    // Remove a classe "hidden" do modal de créditos, tornando-o visível
    document.getElementById("modal-creditos").classList.remove("hidden");
}

// Função chamada ao clicar no botão "Fechar" de qualquer modal
function fecharModal() {
    // Adiciona a classe "hidden" para esconder os modais
    document.getElementById("modal-instrucoes").classList.add("hidden");
    document.getElementById("modal-creditos").classList.add("hidden");
}

// Quando a página terminar de carregar
window.onload = () => {
    // Expõe as funções para o escopo global, permitindo que sejam chamadas diretamente no HTML
    window.iniciar = iniciar;
    window.instrucoes = instrucoes;
    window.creditos = creditos;
    window.fecharModal = fecharModal;
};
