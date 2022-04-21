<template>
   <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel p-3">
                <ul class="sidebar-panel-nav text-lg divide-y-2">
                    <div>
                        <li class="text-white font-bold px-5 pt-3 pb-5 text-2xl">Visi 8 Concert</li>
                    </div>
                    
                    <div class="pt-3 text-white">
                        <div class="pt-3 text-white">
                            <div class="py-2">
                                <li
                                class="
                                    flex
                                    h-10
                                    hover:bg-white hover:text-black
                                    rounded-md
                                    items-center
                                "
                                >
                                <div class="px-3">
                                    <font-awesome-icon icon="fa-solid fa-house" />
                                   <router-link class="px-7" to="/">Home</router-link>
                                </div>
                                </li>
                            </div>
                            <div class="py-2">
                                <li
                                class="
                                    flex
                                    h-10
                                    hover:bg-white hover:text-black
                                    rounded-md
                                    items-center
                                "
                                >
                                <div class="px-3">
                                    <font-awesome-icon icon="fa-solid fa-location-arrow" />
                                    <router-link class="px-7" to="/explore">Explore</router-link>
                                </div>
                                </li>
                            </div>
                            <div class="py-2">
                                <li
                                class="
                                    flex
                                    h-10
                                    hover:bg-white hover:text-black
                                    rounded-md
                                    items-center
                                "
                                >
                                <div class="px-3">
                                    <font-awesome-icon icon="fa-solid fa-comments" />
                                    <router-link class="px-7" to="/feed">Feed</router-link>
                                </div>
                                </li>
                            </div>
                            <div class="py-2">
                                <li
                                class="
                                    flex
                                    h-10
                                    hover:bg-white hover:text-black
                                    rounded-md
                                    items-center
                                "
                                >
                                <div class="px-3">
                                    <font-awesome-icon icon="fa-solid fa-bell" />
                                    <router-link class="px-7" to="/alert">Alert</router-link>
                                </div>
                                </li>
                            </div>
                            <div class="py-2">
                                <li
                                class="
                                    flex
                                    h-10
                                    hover:bg-white hover:text-black
                                    rounded-md
                                    items-center
                                "
                                >
                                <div class="px-3">
                                    <font-awesome-icon icon="fa-solid fa-user" />
                                    <router-link class="px-7" to="/profile">Profile</router-link>
                                </div>
                                </li>
                            </div>
                            <div class="py-2" v-if="!!user">
                                <li
                                class="
                                    flex
                                    h-10
                                    hover:bg-white hover:text-black
                                    rounded-md
                                    items-center
                                "
                                >
                                <div class="px-3">
                                    <font-awesome-icon icon="fa-solid fa-user" />
                                    <a class="px-7" @click="logout">Logout</a>
                                </div>
                                </li>
                            </div>
                            <div class="py-2" v-else>
                                <li
                                class="
                                    flex
                                    h-10
                                    hover:bg-white hover:text-black
                                    rounded-md
                                    items-center
                                "
                                >
                                <div class="px-3">
                                    <font-awesome-icon icon="fa-solid fa-user" />
                                    <router-link class="px-7" to="/login">Login</router-link>
                                </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import { store, mutations } from '@/store.js'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SideBar',
  methods: {
    closeSidebarPanel: mutations.toggleNav,
    ...mapActions("user", ["authAction", 'logout']),
  },
  computed: {
      isPanelOpen() {
          return store.isNavOpen
      },
       ...mapState("user", ['user'])
  },
  created() {
    this.authAction()
    // Artists.getArtistsWithDataUrl(10).then(console.log)
    // Artists.getArtists().then((docs) => {
    //   docs.docs.forEach((doc) => {
    //     const data = doc.data()
    //     utils.getDataUrlFromStorage(data.profile_picture).then(v => {
    //       console.log(v)
    //     })
    //   })
    // })
  },
}
</script>

<style>
  .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: #130f40;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        width: 220px;
    }
</style>