
Vue.component('top-bar', {
    template: "#feedback__topbar"
});

var app = new Vue({
    el: "#app",
    data: {
        login: "",
        password: "",
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

