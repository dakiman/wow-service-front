class Api {
  constructor () {
    this.serverUrl = 'http://142.93.109.222/api'
  }
  call (requestType, route, data = null) {
    return new Promise((resolve, reject) => {
      axios[requestType](this.serverUrl + route, data)
        .then(response => {
          resolve(response)
        })
        .catch(response => {
          if (response.status === 401) {
            auth.logout()
          }
          reject(response)
        })
    })
  }
  callWow (url, data = null) {
    return new Promise((resolve, reject) => {
      axios.get(url, { transformRequest: [(data, headers) => { delete headers.common.Authorization; return data }] })
        .then(response => {
          resolve(response)
        })
        .catch(response => {
          reject(response)
        })
    })
  }
}

export default Api
