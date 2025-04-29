// Importa o gerenciador de fases, que controla a navegação entre as perguntas
import { GerenciadorDeFases } from "../../Classes/QuestManager.js";

// Cria uma instância do gerenciador
const questManager = new GerenciadorDeFases();

// Variáveis de controle do estado do botão
let esperando = false;      // Define se o usuário está esperando a liberação
let podeAvancar = false;    // Define se o jogador pode avançar para a próxima fase

// Obtém o botão da fase pelo ID
const botao = document.getElementById("lagBotao");

// Função chamada quando o botão é clicado
function clicarLag() {
  if (esperando) {
    // Se o botão for clicado enquanto ainda está "aguardando", o jogador perde
    window.location.href = "/GameOverPage/index.html";
    return;
  }

  if (podeAvancar) {
    // Se já passou o tempo de espera, permite seguir para a próxima fase
    questManager.irParaProximaFase();
    return;
  }

  // Primeira vez que clica: simula um "lag"
  esperando = true; // Bloqueia interações durante o "aguarde"
  botao.textContent = "AGUARDE..."; // Altera o texto do botão
  botao.classList.add("aguarde");   // Aplica estilo de "aguardando" (provavelmente com CSS)

  // Após 4 segundos, libera o botão para clique final
  setTimeout(() => {
    esperando = false;
    podeAvancar = true;
    botao.textContent = "CLIQUE";        // Altera o texto novamente
    botao.classList.remove("aguarde");   // Remove o estilo de "aguarde"
  }, 4000); // Tempo de espera (lag simulado)
}

// Torna a função acessível globalmente para uso no HTML (ex: onclick="clicarLag()")
window.clicarLag = clicarLag;
