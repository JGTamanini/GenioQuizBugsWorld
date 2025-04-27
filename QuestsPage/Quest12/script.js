import {GerenciadorDeFases} from "../../Classes/QuestManager.js"

const questManager = new GerenciadorDeFases();

const palavraCorreta = "TECNOLOGIA";

    // Mapeia o teclado trocado: tecla pressionada => letra visível
    const mapaBugado = {
        A: 'M', B: 'F', C: 'Z', D: 'L', E: 'J', F: 'A', G: 'D', 
        H: 'E', I: 'Y', J: 'O', K: 'G', L: 'S', M: 'W', N: 'T', 
        O: 'N', P: 'X', Q: 'U', R: 'B', S: 'C', T: 'H', U: 'K', 
        V: 'P', W: 'R', X: 'V', Y: 'Q', Z: 'I'
      };

    const input = document.getElementById("entrada");

    if (input) {
      input.addEventListener("keydown", function (e) {
        if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
          e.preventDefault();
          const letra = e.key.toUpperCase();
          const bugada = mapaBugado[letra] || letra;
          input.value += bugada;
        }
      });
    }
    
    function verificar() {
      const tentativa = input.value.toUpperCase();
      if (tentativa === palavraCorreta) {
        questManager.irParaProximaFase();
      } else {
        window.location.href = "/GameOverPage/index.html"
      }
    }

window.verificar = verificar;