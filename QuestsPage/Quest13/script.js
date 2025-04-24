const palavraCorreta = "TECNOLOGIA";

    // Mapeia o teclado trocado: tecla pressionada => letra visível
    const mapaBugado = {
        A: 'M', B: 'F', C: 'Z', D: 'L', E: 'J', F: 'A', G: 'D', 
        H: 'E', I: 'Y', J: 'O', K: 'G', L: 'S', M: 'W', N: 'T', 
        O: 'N', P: 'X', Q: 'U', R: 'B', S: 'C', T: 'H', U: 'K', 
        V: 'P', W: 'R', X: 'V', Y: 'Q', Z: 'I'
      };

    // A palavra esperada já considerando o "bug"
    // O jogador precisa digitar essas letras fisicamente para obter TECNOLOGIA na tela
    const palavraBugada = palavraCorreta.split('')
      .map(letraCorreta => {
        // Pega a letra bugada correspondente que gera essa letra
        return Object.keys(mapaBugado).find(k => mapaBugado[k] === letraCorreta);
      })
      .map(tecla => mapaBugado[tecla])
      .join('');

    const input = document.getElementById("entrada");

    input.addEventListener("keydown", function (e) {
      if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        const letra = e.key.toUpperCase();
        const bugada = mapaBugado[letra] || letra;
        input.value += bugada;
      }
    });

    function verificar() {
      const tentativa = input.value.toUpperCase();
      const mensagem = document.getElementById("mensagem");

      if (tentativa === palavraCorreta) {
        window.location.href = "" //Próxima pergunta
      } else {
        window.location.href = "/GameOverPage/index.html"
      }
    }