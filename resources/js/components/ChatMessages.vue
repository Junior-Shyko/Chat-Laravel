<template>
    <ul class="chat">
        <li class="left clearfix" v-for="message in messages"  v-bind:key="message.id">
            <div class="chat-body clearfix">
                <div class="header" v-if="user.id === message.user.id">  
                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-3 pull-right my_class">
                                <span> <strong>Você</strong> </span>
                            </div>
                            <div class="col-md-9 pull-right">
                                <p class="left_msg_chat"><strong>Mensagem:</strong> <br>
                                    {{ message.message }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header panel" v-else>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4 right_user_chat">
                                <span> <strong>{{ message.user.name }}</strong></span>                                
                            </div>
                            <div class="col-md-8">
                                <p class="pull-left right_msg_chat">
                                    <strong>Mensagem:</strong> <br>
                                    {{ message.message }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                               
            </div>
        </li>
    </ul>
</template>

<script>
  export default {
    props: ['messages', 'user']
  };
  
</script>

<style>
.my_class {
    background: #f1f1f1;
    padding: 12px;
    border-radius: 5px;
}
.right_user_chat {
    background: #7881ea;
    padding: 12px;
    border-radius: 5px;
    color: white;
}
.right_msg_chat {
    text-align: left;
}
.left_msg_chat {
    text-align: right;
}
</style>