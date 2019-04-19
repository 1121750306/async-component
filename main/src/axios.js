import axios from 'axios'

let _axios = axios.create()

_axios.interceptors.response.use(response => {
  console.log('d', response)
  return response
}, error => {
  
  return error
})

export default _axios

window._axios = _axios
