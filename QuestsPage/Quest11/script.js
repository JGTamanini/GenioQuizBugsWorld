
// Contador
let tempo = 5;
const contadorSpan = document.getElementById("contador");


// Muda o número no contador e atualiza
const intervalo = setInterval(() => {
  tempo--;
  contadorSpan.textContent = tempo;

  if (tempo <= 0) {
    clearInterval(intervalo);
  }
}, 1000);

// Função que verifica se o botão escolhido é correto
function verificar(correto) {
    if (correto) {
      window.location.href = "" // Próxima pergunta
    } else {
      window.location.href = "/GameOverPage/index.html" // Pagina de Game Over
    }
}
