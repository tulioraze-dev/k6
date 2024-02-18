import http from 'k6/http'

export default function() {
  http.get('https://test.k6.io')
}

export function handleSummary(data) {
  delete data.metrics['http_req_duration{expected_response:true}']
 
  for(const key in data.metrisc) {
   if(key.startsWith('iteration'))
     delete data.metrics[key]
  }
 
  return {
   stdout: textSummary(data, { indent: '→', enebleColors: true }),
  }
 }