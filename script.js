Vue.component('top-bar', {
    template: "#feedback__topbar"
});

var config = {
    headers: {'X-Auth-Token': 'rKlEuxcYJT'},
    crossDomain: true,
};

var bodyParameters = {
   username: "ash",
   password: "butterfree"
}

axios.get('https://teste.pushstart.com.br/api/', { 
    params:{
    }, 
    headers: { 'X-Auth-Token': 'rKlEuxcYJT' },
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
});


axios.post( 
  'https://teste.pushstart.com.br/api/login',
  bodyParameters,
  config,
).then((response) => {
//   console.log(response)
}).catch((error) => {
//   console.log(error)
});


var app = new Vue({
    el: "#app",
    data: {
        login: '',
        password: '',
        btnSignIn: "btn__signin",
        btnFeedback: "btn__feedback"
    },

    methods: {
        signIn() {

        },

        feed() {

        }
        // getUser (){},
    }
});

