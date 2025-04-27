document.addEventListener("DOMContentLoaded", function() {
  const popupContainer = document.querySelector(".popup-container");
  const overlay = document.querySelector(".overlay");
  const btnSim = document.getElementById("btnSim");
  const btnNao = document.getElementById("btnNao");
  const btnX = document.getElementById("btnX");

  setTimeout(function() {
    overlay.style.display = "block";
    setTimeout(function() {
      overlay.style.opacity = 1;
      popupContainer.querySelector(".popup").style.opacity = 1;
      popupContainer.querySelector(".popup").style.transform = "scale(1)";
    }, 10);
  }, 500);

  function fecharPopup() {
    overlay.style.opacity = 0;
    popupContainer.querySelector(".popup").style.opacity = 0;
    popupContainer.querySelector(".popup").style.transform = "scale(0.9)";
    setTimeout(function() {
      overlay.style.display = "none";
    }, 300);
  }

  function clicar(resposta) {
    console.log("Resposta: " + resposta);
    fecharPopup();
  }

  btnSim.addEventListener("click", function() {
    clicar('Sim');
  });

  btnNao.addEventListener("click", function() {
    clicar('Não');
  });

  btnX.addEventListener("click", function() {
    clicar('X');
  });
});
