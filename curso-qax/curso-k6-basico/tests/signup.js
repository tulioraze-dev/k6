import http from 'k6/http'
import { sleep, check } from 'k6'
import uuid from '../tests/libs/uuid.js'

export const options = {
  vus: 1,
  duration: '10s',
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
  console.log(req.body)

  check(req, { 'status should be 200': (r) => r.status === 201 })
  sleep(1)
}