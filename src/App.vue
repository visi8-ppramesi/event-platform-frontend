<template>
  <div id="app" style="background-color: #544f4f" class="h-full">
   <SideBar />
    <div class="md:mx-10 md:h-full">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { Artists, utils } from './firebase/index.js'
import SideBar from "./components/menu/SideBar.vue";
// import { Artists } from './firebase';
export default {
  name: "App",
  components: {
    // HelloWorld
    SideBar,
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
