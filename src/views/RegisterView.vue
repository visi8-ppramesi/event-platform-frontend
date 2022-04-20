<template>
    <div class="home flex items-center justify-center min-h-screen bg-gray-100">
        <div style="color: #00b4b3;" class="font-bold px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3 class="text-2xl text-center">Register new account</h3>
            <div class="py-4 mt-4">
                <div>
                    <label class="block" for="first_name">First Name</label>
                    <input style="border-color: #00b4b3;" type="text" v-model="user.data.first_name" placeholder="Firstname" name="first_name" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    <span v-show="invalidFirstname" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Invalid first name
                    </span>
                </div>
                <div class="pt-3">
                    <label class="block" for="last_name">Last Name</label>
                    <input style="border-color: #00b4b3;" type="text" v-model="user.data.last_name" placeholder="Lastname" name="last_name" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    <span v-show="invalidLastname" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Invalid last name
                    </span>
                </div>
                <div class="pt-3">
                    <label class="block" for="email">Email</label>
                    <input style="border-color: #00b4b3;" type="text" v-model="user.email" placeholder="Email" name="email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    <span v-show="invalidEmail" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Invalid email
                    </span>
                </div>
                <div class="pt-3">
                    <label class="block" for="password">Password</label>
                    <input style="border-color: #00b4b3;" type="password" v-model="user.password" placeholder="Password" name="password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="pt-3">
                    <div class="flex items-center justify-center">
                        <button style="background-color: #00b4b3;" class="w-full px-6 py-2 mt-4 text-white rounded-lg hover:bg-blue-900" :disabled="status.registering" @click="handleSubmit">Register</button>
                    </div>
                    <div class="flex text-xs pt-3 justify-center items-center">
                        <p class="text-black font-bold">Already Have Account?</p>
                        <a class="text-baseline text-blue-700 pl-1" href="/login"> Login Here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { GeoPoint } from '@firebase/firestore';
import { mapState, mapActions } from 'vuex'
export default {
    name: 'LoginView',
    data () {
        return {
           user: {
                data: {
                    first_name: '',
                    last_name: '',
                    profile_picture: '',
                    default_location: new GeoPoint(0, 0),
                    following: [],
                    social_links: [],
                },
                email: '',
                password: '',
            },
            invalidFirstname: false,
            invalidLastname: false,
            invalidEmail: false,
            submitted: false
        }
    },
    computed: {
        ...mapState('user', ['status'])
    },
    methods: {
        ...mapActions('user', ['register']),
         handleSubmit() {
            this.submitted = true;
            const submitData = Object.assign({}, this.user)
            submitData.errorFunc = () => {

            }
            this.register(submitData)
            // this.$validator.validate().then(valid => {

            //     if (valid) {
            //         this.register(this.user);
            //     }
            // });
        }
    }
}
</script>

<style scoped>
    .home{
        background-color: #eeeeee;
    }
</style>