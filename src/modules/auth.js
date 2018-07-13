import store from '../store'

class Auth {
  constructor () {
    this.token = window.localStorage.getItem('token')
    // get the user from local storage
    let userData = window.localStorage.getItem('user')
    this.user = userData ? JSON.parse(userData) : null

    if (this.token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token
      this.getUser()
      this.getCharacters()
    }
  }

  login (token, user) {
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', JSON.stringify(user))

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

    this.token = token
    this.user = user
    Event.$emit('userLoggedIn')
    
    this.getCharacters()
  }

  logout () {
    localStorage.clear()

    this.token = null
    this.user = null

    Event.$emit('userLoggedOut')
  }

  check () {
    return !!this.token
  }

  getUser () {
    api.call('get', '/user')
      .then(({ user }) => {
        this.user = user
      })
  }

  getCharacters () {
    api
      .call('get', '/character')
      .then(({data}) => {
        if (data) {
          store.state.savedCharacters = data
        }
        console.log(data)
      })
      .catch(response => {
        console.log(response.status)
      })
  }
}

export default Auth
