<template>
  <div style="background-color: #202424" class="home h-full w-full text-white">
    <NavBar class="py-2 md:text-2xl" title="Visi 8 Admin" />
    <div class="bg-black h-screen">
        <div class="py-5 ">
            <p class="p-3 md:text-2xl" style="background-color: #202424;">My Upcoming Events</p>
            <div v-for="item in content" :key="item.index">
                <div class="flex p-3 md:p-5">
                    <div class="h-16 w-16 md:h-24 md:w-24">
                        <img class="h-full w-full" :src="item.image" />
                    </div>
                    <div class="flex justify-center">
                         <div class="px-3">
                            <p class="font-bold md:text-xl">{{item.title}}</p>
                            <p class="text-sm md:text-lg">{{item.place}}</p>
                            <p class="text-xs md:text-md">{{item.date}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div class="py-5 ">
            <p class="p-3 md:text-2xl" style="background-color: #202424;">My Past Events</p>
            <div class="text-center pt-8 md:text-2xl">
                <p>No Past Events</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import jb from '../assets/JB.png'
export default {
  name: 'ProfileView',
  components: {
    NavBar
  },
  data(){
        return {
            content: [
                {title: 'Browse by Artist', place: 'GBK Madya Stadium', date:'Thu, Nov 3, 20:00', image: jb},

            ],
        };
  },
}
</script>

<style>
  .home{
    background-color: #202424; 
  }
</style>
