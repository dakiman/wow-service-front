class Api {
  constructor() {

  }
  call(requestType, url, data = null) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, data)
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
  callWow(url, data = null) {
    return new Promise((resolve, reject) => {
      axios.get(url, { transformRequest: [(data, headers) => { delete headers.common.Authorization; return data }] })
        .then(response => {
          resolve(response)
        })
        .catch(response  => {
          reject(response)
        })
    })
  }
}

export default Api
