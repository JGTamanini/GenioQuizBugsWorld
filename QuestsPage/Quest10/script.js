// Detecta se a página foi recarregada (F5 ou ícone do navegador)
const navType = performance.getEntriesByType("navigation")[0].type;


// Se foi um reload E o jogador não clicou no botão, redireciona
if (navType === "reload" && !sessionStorage.getItem("atualizouManual")) {
  window.location.href = "/MainScreen/index.html";
}

// Quando a página terminar de carregar
window.addEventListener("load", () => {
  const botao = document.querySelector("button");
  // Quando clica no botão redireciona para a pagina de Game over e tira do array de perguntas
  if (botao) {
    botao.addEventListener("click", () => {
      sessionStorage.setItem("atualizouManual", "true");
      window.location.href = "/GameOverPage/index.html";
    });
  }

  // Remove a flag depois de um tempo (para futuras tentativas)
  setTimeout(() => { sessionStorage.removeItem("atualizouManual");}, 500);});
