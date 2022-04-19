<template>
    <div class="bg-black h-full pb-8 w-full text-white">
    <NavBar class="md:text-2xl" title="Home View"/>
    <div>
        <div class="flex items-center justify-center py-5">
            <img class="rounded-full h-24 w-24" :src="jb" />
        </div>
        <div class="text-center">
            <p class="text-xl">Nama User</p>
            <p class="text-xs">emailUser@gmail.com</p>
        </div>

        <div class="pt-6">
            <div class="px-3 flex items-center justify-between py-2 text-center">
                <p>Edit Profile</p>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
            </div>

            <hr />

            <div class="px-3 flex items center justify-between py-2 text-center">
                <p>Change Location</p>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
            </div>

            <hr />

            <div class="px-3 flex items center justify-between py-2 text-center">
                <p>Adjust Distance</p>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
            </div>

            <hr />

            <div class="px-3 flex items center justify-between py-2 text-center">
                <p>Track More Artists</p>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
            </div>

            <hr />

            <div class="px-3 flex items center justify-between py-2 text-center">
                <p>Scan Music</p>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
            </div>

            <hr />
        </div>

        <div>
            <div class="mt-3">
                <div style="background-color: #202424" class="p-3 font-bold text-xs text-white">
                    Linked Accounts
                </div>

                <div class="pt-6">
                    <div class="flex items center justify-center py-2 text-center">
                        <p>Apple Music</p>
                    </div>

                    <hr />

                    <div class="flex items center justify-center py-2 text-center">
                        <p>Amazon Music</p>
                    </div>

                    <hr />

                    <div class="flex items center justify-center py-2 text-center">
                        <p>Facebook</p>
                    </div>

                    <hr />

                    <div class="flex items center justify-center py-2 text-center">
                        <p>Twitter</p>
                    </div>

                    <hr />

                    <div class="flex items center justify-center py-2 text-center">
                        <p>Spotify</p>
                    </div>

                    <hr />

                    <div class="flex items center justify-center py-2 text-center">
                        <p>Last.fm</p>
                    </div>

                    <hr />

                    <div class="flex items center justify-center py-2 text-center">
                        <p>Deezer</p>
                    </div>

                    <hr />
                </div>
            </div>

            <div class="mt-3">
                <div style="background-color: #202424" class="p-3 font-bold text-xs text-white">
                    Account
                </div>
                
                <div class="pt-6">
                    <div class="px-3 flex items center justify-between py-2 text-center">
                        <p>Calendar Sync</p>
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
                    </div>

                    <hr />

                    <div class="px-3 flex items center justify-between py-2 text-center">
                        <p>Notifications</p>
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
                    </div>

                    <hr />

                    <div class="px-3 flex items center justify-between py-2 text-center">
                        <p>Credit Cards and Purchases</p>
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
                    </div>

                    <hr />

                    <div class="px-3 flex items center justify-between py-2 text-center">
                        <p>Restore Subcriptions</p>
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
                    </div>

                    <hr />
                </div>
            </div>

            <div class="mt-3">
                <div style="background-color: #202424" class="p-3 font-bold text-xs text-white">
                    
                </div>

                <div class="pt-6">
                    <div class="px-3 flex items center justify-between py-2 text-center">
                        <p>Manager App</p>
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
                    </div>

                    <hr />

                    <div class="px-3 flex items center justify-between py-2 text-center">
                        <p>Terms</p>
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
                    </div>

                    <hr />

                    <div class="px-3 flex items center justify-between py-2 text-center">
                        <p>Help</p>
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
                    </div>

                    <hr />

                    <div class="px-3 flex items center justify-between py-2 text-center">
                        <p>Privacy Request</p>
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="h-5" />
                    </div>

                    <hr />
                </div>
            </div>
        </div> 
    
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'SettingsView',
  components: {
    NavBar,
  },
  data(){
    return {
        jb: require('../assets/JB.png'),
    };
  },
}
</script>

<style>
</style>