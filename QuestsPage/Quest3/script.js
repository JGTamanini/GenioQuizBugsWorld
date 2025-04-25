const respostaCorreta = document.title.trim().toLowerCase(); // "quine"

document.querySelectorAll('button').forEach(botao => {
  botao.addEventListener('click', () => {
    // Extrai só o texto depois do ponto (ex: "B. Quine" => "Quine")
    const textoBotao = botao.innerText.split('. ')[1]?.trim().toLowerCase();

    if (textoBotao === respostaCorreta) {
      alert('Acertou! Você viu o título da aba, né? 😉');
      // Avança para próxima fase
      // window.location.href = 'pergunta37.html';
    } else {
      alert('Errado! A resposta estava no título da aba o tempo todo...');
    }
  });
});
