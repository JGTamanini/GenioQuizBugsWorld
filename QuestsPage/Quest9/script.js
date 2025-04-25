const buttons = document.querySelectorAll("button");
const buttonC = Array.from(buttons).find(btn => btn.textContent === "C");
const bloqueado = document.querySelector(".button-zerado");

// Deixa o botão C com posição absoluta
buttonC.style.position = "absolute";
buttonC.style.zIndex = "9999;"

// Pega as dimensões do container
const container = document.querySelector(".container");
const containerRect = container.getBoundingClientRect();

// Função para mover o botão C para uma nova posição
function moveButton() {
    const maxX = containerRect.width - buttonC.offsetWidth;
    const maxY = containerRect.height - buttonC.offsetHeight;
  
    const elementosBloqueio = Array.from(document.querySelectorAll("h1, .button")); // todos que ele deve evitar
  
    let newX, newY, tentativas = 0;
    let sobrepoe;
  
    do {
      newX = Math.floor(Math.random() * maxX);
      newY = Math.floor(Math.random() * maxY);
      tentativas++;
  
      // Cria área simulada do botão C nessa nova posição
      const cRectSimulado = {
        left: newX + containerRect.left,
        top: newY + containerRect.top,
        right: newX + containerRect.left + buttonC.offsetWidth,
        bottom: newY + containerRect.top + buttonC.offsetHeight
      };
  
      // Verifica se há colisão com algum elemento bloqueado
      sobrepoe = elementosBloqueio.some(el => {
        const r = el.getBoundingClientRect();
        return (
          cRectSimulado.right > r.left &&
          cRectSimulado.left < r.right &&
          cRectSimulado.bottom > r.top &&
          cRectSimulado.top < r.bottom
        );
      });
  
      // Limite de tentativas pra evitar loop eterno
      if (tentativas > 100) break;
  
    } while (sobrepoe);
  
    buttonC.style.left = `${newX}px`;
    buttonC.style.top = `${newY}px`;
  }

// Movimento inicial
moveButton();

// Monitora a posição do mouse dentro do container
container.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX - containerRect.left;
  const mouseY = event.clientY - containerRect.top;

  const buttonX = buttonC.offsetLeft + buttonC.offsetWidth / 2;
  const buttonY = buttonC.offsetTop + buttonC.offsetHeight / 2;

  const distance = Math.hypot(mouseX - buttonX, mouseY - buttonY);

  // Se o mouse estiver muito perto do botão, ele foge
  if (distance < 120) {
    moveButton();
  }     
});

// Se quiser deixar ainda mais troll:
// Bloqueia o clique mesmo que consiga chegar
buttonC.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Haha, achou que ia clicar? RESPOSTA ERRADAAAAAAAAAAAAAAAAAAAAAAA");
});




