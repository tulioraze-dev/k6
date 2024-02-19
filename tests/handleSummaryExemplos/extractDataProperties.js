/* 
  cenário que extrai um valor de uma propiedade do JSON 
  com os resultados dos testes e exibe uma mensagem no console
*/

import http from "k6/http"

export default function() {
  http.get('https://test.k6.io')
}

export function handleSummary(data) {
  const latenciaMedia = data.metrics.iteration_duration.values.med;
  const mensagemLatencia = `A latencia média foi ${latenciaMedia}\n`;

  return {
    // stdout é uma opção para usar o output standard;
    stdout: mensagemLatencia,
  }
}