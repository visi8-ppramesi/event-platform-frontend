<template>
  <div style="background-color: #202424" class="h-full w-full text-white">
    <NavBar class="py-2 md:text-2xl" title="Home View"/>
    <div class="p-3">
        <p class="text-l md:text-2xl">Recommended for you</p>
        <p class="text-xs">A Curated list of events based on artist you follow</p>

        <horizontal-slider :content="recom" type="recommended" />
    </div>

    <div class="p-3">
        <p class="text-l md:text-2xl">Upcoming festival</p>
        <p class="text-xs">Are you ready as we are for festival season ?!</p>

        <horizontal-slider :content="upcoming" type="upcoming" />
    </div>

    <div class="p-3">
        <p class="text-l md:text-2xl">Whats hot in your area</p>
        <p class="text-xs">Dont miss the shows everyones talking about</p>

        <card-grid :content="grid" type="discover"/>

        <div class="flex items-center justify-center pt-5 w-full">
          <button class="bg-red-800 w-full md:w-96 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View All
          </button>
        </div>
    </div>

    <div class="p-3">
        <p class="text-l md:text-2xl">Get ready for the weekend</p>
        <p class="text-xs">find something to look forward u</p>

        <div class="h-32">
        </div>
    </div>

    <div class="p-3">
        <p class="text-l md:text-2xl">Trending artists</p>
        <p class="text-xs">These artists are topping the charts this week</p>

        <trending-slider :content="trending"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HorizontalSlider from '@/components/HorizontalSlider.vue'
import CardGrid from '@/components/CardGrid.vue'
import TrendingSlider from '@/components/TrendingSlider.vue'
import NavBar from '@/components/NavBar.vue'
import jb from '../assets/JB.png'
export default {
  name: 'HomeView',
  components: {
    HorizontalSlider,
    CardGrid,
    TrendingSlider,
    NavBar
  },
  data(){
        return {
            recom: [
                {title: 'Justin Bieber', place: 'GBK Madya stadium', time: '20:00', image: jb},
                {title: 'Shawn Mendes', place: 'GBK Madya Stadium', time: '20:00', image: jb},
                {title: 'BTS', place: 'GBK Madya Stadium', time: '20:00', image: jb},
                {title: 'Blackpink', place: 'GBK Madya Stadium', time: '20:00', image: jb},
            ],
            upcoming: [
                {title: 'Drefqon.1 2022', place: 'Live Stream', image: jb},
                {title: '#iVoted 2022', place: 'Live Stream', image: jb},
                {title: 'Tropical Pressure 2022', place: 'Live Stream', image: jb},
            ],
            grid: [
                {title: 'Justin Bieber', place: 'GBK Madya stadium', time: '20:00', image: jb},
                {title: 'Shawn Mendes', place: 'GBK Madya Stadium', time: '20:00', image: jb},
                {title: 'BTS', place: 'GBK Madya Stadium', time: '20:00', image: jb},
                {title: 'Blackpink', place: 'GBK Madya Stadium', time: '20:00', image: jb},
            ],
            trending: [
                {title: 'Justin Bieber', subs: '100M', image: jb},
                {title: 'Machine Gun Kelly', subs: '1,2M', image: jb},
                {title: 'Rich Brian', subs: '3.5M', image: jb},
            ],
        };
  },
  computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
}
</script>

<style>
</style>
