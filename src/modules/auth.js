class Auth {
  constructor() {
    this.token = window.localStorage.getItem('token')
    //get the user from local storage
    let userData = window.localStorage.getItem('user')
    this.user = userData ? JSON.parse(userData) : null

    if (this.token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token
      this.getUser()
    }
  }

  login(token, user) {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('user', JSON.stringify(user));

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    this.token = token;
    this.user = user;

    Event.$emit('userLoggedIn');
  }

  logout() {
    localStorage.clear();

    this.token = null;
    this.user = null;

    Event.$emit('userLoggedOut');
  }

  check() {
    return !!this.token;
  }

  getUser() {
    api.call('get', '127.0.0.1:8000/api/user')
      .then(({ user }) => {
        this.user = user;
      })
  }
}

export default Auth;