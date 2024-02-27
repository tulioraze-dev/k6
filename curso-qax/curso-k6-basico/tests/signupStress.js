import http from 'k6/http'
import { sleep, check } from 'k6'
import uuid from './libs/uuid.js'

export const options = {
  stages: [
    { duration: '1m', target: 200 },
    { duration: '3m', target: 200 }, 
    { duration: '50s', target: 0 }, 
  ],
  thresholds: {
    http_req_duration: [ 'max<2000 ' ],
    http_req_failed: [ 'rate<0.01' ]
  }
}

export default function() {
  const url = 'http://localhost:3333/signup'
  const payload = JSON.stringify({ email: `${uuid.v4().substring(24)}@teste.com`, password: 'pwd123'})
  const headers = { 'headers': { 'Content-Type': 'application/json' } }

  const req = http.post(url, payload, headers)

  check(req, { 'status should be 200': (r) => r.status === 201 })
  sleep(1)
}