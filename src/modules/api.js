class Api {
  constructor() {

  }
  call(requestType, url, data = null, outside = false) {
    if(outside) {
      axios.defaults.headers.common['Authorization'] = null;
    }
    return new Promise((resolve, reject) => {
      axios[requestType](url, data)
        .then(response => {
          resolve(response);
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            auth.logout();
          }
          reject(response);
        });
    });
  }
}

export default Api
