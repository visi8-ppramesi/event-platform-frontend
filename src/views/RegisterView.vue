<template>
    <div class="home flex items-center justify-center min-h-screen bg-gray-100">
        <div style="color: #00b4b3;" class="font-bold px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3 class="text-2xl text-center">Register new account</h3>
            <form action="">
                <div class="py-4 mt-4">
                    <div>
                        <label class="block" for="firstName">First Name</label>
                        <input style="border-color: #00b4b3;" type="text" v-model="user.firstName" placeholder="Firstname" name="firstName" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="pt-3">
                        <label class="block" for="lastName">Last Name</label>
                        <input style="border-color: #00b4b3;" type="text" v-model="user.lastName" placeholder="Lastname" name="lastName" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="pt-3">
                        <label class="block" for="username">Username</label>
                        <input style="border-color: #00b4b3;" type="text" v-model="user.username" placeholder="Username" name="username" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="pt-3">
                        <label class="block" for="password">Password</label>
                        <input style="border-color: #00b4b3;" type="password" v-model="user.password" placeholder="Password" name="password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="pt-3">
                        <div class="flex items-center justify-center">
                            <button style="background-color: #00b4b3;" class="w-full px-6 py-2 mt-4 text-white rounded-lg hover:bg-blue-900" :disabled="status.registering">Register</button>
                        </div>
                        <div class="flex text-xs pt-3 justify-center items-center">
                            <p class="text-black font-bold">Already Have Account?</p>
                            <a class="text-baseline text-blue-700 pl-1" href="/login"> Login Here</a>
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
           user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
         handleSubmit() {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        }
    }
}
</script>

<style>
    .home{
        background-color: #eeeeee;
    }
</style>