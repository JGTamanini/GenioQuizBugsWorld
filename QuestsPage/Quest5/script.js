    const respostaCorreta = '33';

    function verificar(respostaEscolhida) {
        // Verifica se a resposta escolhida está correta
        if (respostaEscolhida === respostaCorreta) {
            window.location.href = ""; // Redireciona para a página de sucesso
        } else {
            window.location.href = "/GameOverPage/index.html"; // Redireciona para a página de erro
        }
    }