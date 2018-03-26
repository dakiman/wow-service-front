class Auth {
    constructor() {
        this.token = null;
        this.user = null;
    }

    login (token, user) {        
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', JSON.stringify(user));

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

        this.token = token;
        this.user = user;
    
        Event.$emit('userLoggedIn');
    }

    logout() {
        localStorage.clear();
        axios.defaults.headers.common['Authorization'] = null;

        this.token = null;
        this.user = null;

        Event.$emit('userLoggedOut');
    }

    check () {
        return !! this.token;
    }
}

export default new Auth();