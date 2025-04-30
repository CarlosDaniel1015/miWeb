const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function verificarAdivinanza() {
  const input = document.getElementById("guessInput");
  const resultado = document.getElementById("resultado");
  const intentoUsuario = parseInt(input.value);
  intentos++;

  if (intentoUsuario === numeroSecreto) {
    resultado.textContent = `🎉 ¡Correcto! Lo adivinaste en ${intentos} intento(s).`;
    input.disabled = true;
  } else if (intentoUsuario > numeroSecreto) {
    resultado.textContent = "❌ Demasiado alto. Intenta de nuevo.";
  } else if (intentoUsuario < numeroSecreto) {
    resultado.textContent = "❌ Demasiado bajo. Intenta de nuevo.";
  } else {
    resultado.textContent = "⚠️ Ingresa un número válido.";
  }
}