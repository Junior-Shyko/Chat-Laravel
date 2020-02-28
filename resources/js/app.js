require('./bootstrap');

window.Vue = require('vue');

Vue.component('chat-messages', require('./components/ChatMessages.vue').default);
Vue.component('chat-form', require('./components/ChatForm.vue').default);

$(document).ready(function () {
    var elmnt = document.getElementById("body_chat");
    elmnt.scrollTop = 5100;   
});

const app = new Vue({
    el: '#app',

    data: {
        messages: []
    },

    created() {
        this.fetchMessages();
        
        Echo.private('chat')
            .listen('MessageSent', (e) => {
                this.messages.push({
                    message: e.message.message,
                    user: e.user
                });
            });
            
    },
    
    methods: {
        fetchMessages() {
            axios.get('/messages').then(response => {
                this.messages = response.data;
            });
        },

        addMessage(message) {
            //this.messages.push(message);
            var elmnt = document.getElementById("body_chat");
            elmnt.scrollTop = 5100;  
            axios.post('/messages', message).then(response => {
              console.log(response.data);
            });
        }
    }
});