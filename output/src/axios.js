import axios from 'axios'

let outputAxios

if (window._axios) {
  outputAxios =  window._axios
} else {
  let _axios = axios.create()
  
  _axios.interceptors.response.use(response => {
    console.log(response)
    return response
  }, error => {
    
    return error
  })
  outputAxios =  _axios
}

export default outputAxios