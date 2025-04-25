
// Função que verifica se o botão escolhido é correto
function verificar(correto) {
    if (correto) {
      window.location.href = "" // Próxima pergunta
    } else {
      window.location.href = "/GameOverPage/index.html" // Pagina de Game Over
    }
}