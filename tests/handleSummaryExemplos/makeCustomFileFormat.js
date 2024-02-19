import http from 'k6/http'
import { jUnit } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js'
import k6example from 'https://raw.githubusercontent.com/grafana/k6/master/examples/thresholds_readme_example.js'

export default k6example;
export const options = {
  vus:5,
  iterations: 10,
  thresholds: {
    http_req_duration: [ 'p(95) < 200']
  }
}

export function handleSummary(data) { 
  console.log('Preparando o sumario de fim de teste...')

  return {
    'junit.xml': jUnit(data),
    'c:/K6/cursos-k6/xmlResults': jUnit(data)
  }
}