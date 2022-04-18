<template>
    <div class="home flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3 style="color: #00b4b3;" class="text-2xl font-bold text-center pb-8">Login to your account</h3>
            <form action="">
                <div class="mt-4">
                    <div>
                        <label style="color: #00b4b3;" class="block font-bold text-lg" for="username">username</label>
                        <input style="border-color: #00b4b3;" type="text" placeholder="username" v-model="username" name="username" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label style="color: #00b4b3;" class="block font-bold text-lg">Password</label>
                        <input style="border-color: #00b4b3;" type="password" placeholder="Password" v-model="password" name="password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div>
                        <div class="flex items-center justify-center"> 
                            <button style="background-color: #00b4b3;" class="px-6 w-full py-2 mt-4 text-white rounded-lg hover:bg-blue-900" :disabled="status.loggingIn">Login</button>
                        </div>
                        <div class="flex text-xs pt-3 justify-center items-center">
                            <p class="font-bold">Don't Have Account?</p>
                            <a class="text-blue-700 pl-1" href="/register"> Register Here!</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'LoginView',
    data () {
        return {
            username: '',
            password: '',
            submitted: false,
        };
    },
    computed: {
        ...mapState('account', ['status']),
    },
    created () {
        // reset login status
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit() {
            this.submitted = true;
            const { username, password } = this;
            if (username && password) {
                this.login({ username, password })
            }
        }
    }
};
</script>

<style>
    .home{
        background-color: #eeeeee;
    }
</style>