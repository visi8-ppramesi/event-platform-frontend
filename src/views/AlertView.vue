<template>
  <div style="background-color: #202424" class="home h-full w-full text-white">
    <NavBar class="font-bold py-2 md:text-2xl" title="Notifications" />
    <div class="h-screen flex bg-black items-center justify-center">
        <p class="text-center text-xl">No notifications</p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'AlertView',
  components: {
    NavBar
  },
  data(){
        return {
            
        };
  },
}
</script>

<style>
  .home{
    background-color: #202424; 
  }
</style>
