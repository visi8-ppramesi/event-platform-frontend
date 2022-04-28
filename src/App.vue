<template>
  <div id="app" style="background-color: #202424" class="h-full">
    <NavBar class="md:text-2xl" title="Visi 8 Concert"/>
    <SideBar />
    <div class="md:mx-16 md:h-full">
      <router-view />
    </div>
    <FooterComponent class="mt-20" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { Artists, utils } from './firebase/index.js'
import FooterComponent from './components/FooterComponent.vue'
import SideBar from "./components/menu/SideBar.vue";
import NavBar from "./components/NavBar.vue";
// import { Artists } from './firebase';
export default {
  name: "App",
  components: {
    // HelloWorld
    SideBar,
    NavBar,
    FooterComponent
  },
  data(){
    return {

    }
  },
  created(){
    navigator.geolocation.getCurrentPosition(console.log, console.error)
  }
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
