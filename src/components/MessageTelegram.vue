<template>
    <div class="container">
        <h1>TESTING</h1>
        {{message}}
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Message:</span>
            <input type="text"
                   class="form-control"
                   placeholder="Write here ..."
                   v-model="message"
                   aria-label="Username"
                   aria-describedby="basic-addon1">
        </div>
        <button @click="send" class="btn btn-primary">Send message</button>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        name: 'MessageTelegram',
        data() {
            return {
                message: ''
            }
        },
        methods: {
            send() {
                axios.post('http://backend-sandbox-laravel/api/test', {
                    text: this.message
                }, {})
            }
        }
    }
</script>
<style lang="scss">

</style>
