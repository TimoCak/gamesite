const axios = require('axios').default;

let instance = axios.create({
    baseURL: 'http://localhost:3000'
}); 

//signup post:

function signUp(credentials) {
    instance.post('/signup', credentials)
    .then((res) => {
        console.log(res);
    })
    .catch ((err) => {
         console.log(err);
    });
}
function getUsers() {
    return instance.get('/getUsers')
}

module.exports = {signUp , getUsers}


    
