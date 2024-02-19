// init context: importa os modulos.
import http from "k6/http"
import { check, sleep } from "k6"


// init context: define as opções do k6
export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '30s', target: 10 },
    { duration: '10s', target: 0 },
  ],
}

// vu code context
export default function () {
  const res = http.get('https://httpbin.test.k6.io/')
  check(res, { 'status was 200': (r) => r.status == 200 })
  sleep(1)
}