function calculateIndex() {
  const numSubmetidos = parseFloat(document.getElementById("num-submetidos").value);
  const numEntrevistados = parseFloat(document.getElementById("num-entrevistados").value);
  const index = numSubmetidos / numEntrevistados;
  document.getElementById("result").innerHTML = `Índice de submissão para entrevista: ${index.toFixed(2)}%`;
}

