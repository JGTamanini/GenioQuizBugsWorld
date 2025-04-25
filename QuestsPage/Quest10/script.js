// Redireciona se o jogador não clicou no botão
if (!sessionStorage.getItem("atualizouManual")) {
    //window.location.href = "index.html"; // ou a sua página inicial real
  }
  
  // Só remove a flag depois que a página estiver totalmente carregada
  window.addEventListener("DOMContentLoaded", () => {
    sessionStorage.removeItem("atualizouManual");
  
    // Ativa o botão de atualizar
    const botao = document.querySelector("button");
    if (botao) {
      botao.addEventListener("click", () => {
        sessionStorage.setItem("atualizouManual", "true");
        location.reload(); // agora vai funcionar sem bug
      });
    }
  });
  