    const respostaCorreta = '33';

    function verificar(respostaEscolhida) {
        if (respostaEscolhida === respostaCorreta) {
            window.location.href = ""; 
        } else {
            window.location.href = "/GameOverPage/index.html"; 
        }
    }