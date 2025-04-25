  const botoes = document.querySelectorAll('button');

  botoes.forEach(botao =>  {
    botao.addEventListener('click', () => {
      const resposta = botao.innerText;
      if (resposta === 'correta') {
        alert('Resposta correta! Vamos para a próxima.');
        // aqui você avança para a próxima pergunta
      } else {
        alert('Errado! Parece certo, mas tem um bug escondido.');
        // aqui você pode resetar ou fazer algo divertido
      }
    });
  });
