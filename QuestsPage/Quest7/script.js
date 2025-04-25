function clicar(botaoId) {
    let clicados = JSON.parse(localStorage.getItem('clicados')) || [];
  
    if (clicados.includes(botaoId)) {
      return;
    }
  
    clicados.push(botaoId);
    localStorage.setItem('clicados', JSON.stringify(clicados));
  
    document.getElementById(botaoId).classList.add('clicked');
  
    verificarCliqueTotal();
  }
  
  function verificarCliqueTotal() {
    let clicados = JSON.parse(localStorage.getItem('clicados')) || [];
    let botoes = ['btn1', 'btn2', 'btn3', 'btn4'];
    let botoesNaoClicados = botoes.filter(botao => !clicados.includes(botao));
  
    if (botoesNaoClicados.length === 0) {
      window.location.href = ""; 
    } else {
      window.location.href = "/GameOverPage/index.html";
    }
  }
  