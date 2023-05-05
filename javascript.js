


const msg = document.querySelector("#msg");

const textos = ["Pessoas com mente pequena<br>não dirigem nossos carros.",
    "O carro que voce dirige<br>diz muito sobre você.",
    "Não gosta de carro alto...<br>tem medo de altura?",
    "Direção é muito mais importante que velocidade, tem muita gente rápida<br>indo pra lugar nenhum."];


// Índice do texto atual
var indiceTextoAtual = 1;

// Função para alterar o texto do h3
function alterarTexto() {
    // Define o novo texto
    msg.innerHTML = textos[indiceTextoAtual];

    // Atualiza o índice do texto atual
    indiceTextoAtual++;

    // Se o índice for maior que o número de textos, volta ao primeiro
    if (indiceTextoAtual == textos.length) {
        indiceTextoAtual = 0;
    }
}

// Define o intervalo de tempo para executar a função
setInterval(alterarTexto, 45000); // 5000ms = 5 segundos
window.addEventListener('load', function() {
    var audio = document.getElementById("myAudio");
    audio.play();
    var fadeOutInterval = setInterval(function() {
      if (audio.volume > 0.1) {
        audio.volume -= 0.1;
      } else {
        clearInterval(fadeOutInterval);
      }
    }, 1300);
  });