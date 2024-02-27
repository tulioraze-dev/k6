import http from 'k6/http'
import { check, sleep } from 'k6'

export default function() {
  const req = http.get('http://localhost:3333')

  check(req, { 'status tem que ser 200': (r) => r.status === 200 })

  sleep(1)
}