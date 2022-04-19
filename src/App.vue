<template>
  <div id="app">
    <SideBar>
      <ul class="sidebar-panel-nav text-lg divide-y-2">
        <div>
          <li class="text-white font-bold px-5 pt-3 pb-5 text-2xl">
            Visi 8 Concert
          </li>
        </div>

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
                <a class="px-7" href="/">Home</a>
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
                <a class="px-8" href="/explore">Explore</a>
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
                <a class="px-6" href="/feed">Feed</a>
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
                <a class="px-7" href="/alert">Alert</a>
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
                <a class="px-7" href="/profile">Profile</a>
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
                <a class="px-7" href="/login">Login</a>
              </div>
            </li>
          </div>
        </div>
      </ul>
    </SideBar>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SideBar from "./components/menu/SideBar.vue";
import { mapState, mapActions } from 'vuex'
export default {
  name: "App",
  components: {
    // HelloWorld
    SideBar,
  },
  computed:{
    ...mapState("user", ['user'])
  },
  methods: {
    ...mapActions("user", ["authAction", 'logout']),
  },
  created() {
    this.authAction()
  },
};
</script>

<style>
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  display: block;
  padding-bottom: 0.5em;
}
</style>
