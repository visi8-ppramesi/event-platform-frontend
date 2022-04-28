<template>
  <div style="background-color: #000000" class="h-full w-full md:h-screen text-white">
    <div class="p-3 flex">
        <div class="pt-2 w-full pr-3 relative mx-auto text-gray-600">
          <input class="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search">
          <button type="submit" class="pr-3 absolute right-0 top-0 mt-5 mr-4">
            <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
              viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
              width="512px" height="512px">
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div class="flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-sliders" class="h-6" />
        </div>
    </div>

    <div class="px-2 scrolling-wrapper" ref="scrollWrapper">
        <drop-down :data="names" v-model="selectedName" v-on:valueSelect="onValueSelect"/>
        <drop-down :data="names" v-model="selectedName" v-on:valueSelect="onValueSelect"/>
        <drop-down :data="names" v-model="selectedName" v-on:valueSelect="onValueSelect"/>
    </div>

    <div v-for="item in content" :key="item.index">
        <div class="mt-3">
            <div class="flex pb-2 items-center justify-start px-3 w-full">
                <div>
                    <img class="w-24 h-24 " :src="item.image" />
                </div>

                <div class="px-3 flex-grow">
                    <p class="font-bold">{{item.title}}</p>
                    <p>{{item.date}}</p>
                    <p>{{item.category}}</p>
                    <p>{{item.location}}</p>
                </div>

                <font-awesome-icon icon="fa-solid fa-ellipsis" class="h-6" />
            </div>
            
            <hr />
        </div>
    </div> 

  </div>
</template>

<script>
import DropDown from "@/components/DropDown.vue";
import jb from '../assets/JB.png'
export default {
  name: 'ExploreView',
  components: {
      DropDown,
  },
  methods: {
    onValueSelect(value) {
      this.selectedWrestler = value;
    }
  },
  data(){
        return {
            content: [
                {
                    dateTitle: 'Thursday, 23 Jun 2022',
                    title: 'Java Jazz Fest 2022',
                    date: 'Fri, May 27, 17:00',
                    category: 'Java Jazz Fes -',
                    location: 'Jakarta, Indonesia', 
                    image: jb
                },
                {
                    dateTitle: 'Saturday, 28 May 2022',
                    title: 'PJ Mortion',
                    date: 'Sat, May 28, 19:00',
                    category: 'Jakarta Internasional Java Jazz',
                    location: 'Festival - Jakarta, Indonesia', 
                    image: jb
                },
                {
                    dateTitle: 'Thursday, 23 Jun 2022',
                    title: 'Java Jazz Fest 2022',
                    date: 'Fri, May 27, 17:00',
                    category: 'Java Jazz Fes -',
                    location: 'Jakarta, Indonesia', 
                    image: jb
                },
                {
                    dateTitle: 'Saturday, 28 May 2022',
                    title: 'PJ Mortion',
                    date: 'Sat, May 28, 19:00',
                    category: 'Jakarta Internasional Java Jazz',
                    location: 'Festival - Jakarta, Indonesia', 
                    image: jb
                },
                {
                    dateTitle: 'Thursday, 23 Jun 2022',
                    title: 'Java Jazz Fest 2022',
                    date: 'Fri, May 27, 17:00',
                    category: 'Java Jazz Fes -',
                    location: 'Jakarta, Indonesia', 
                    image: jb
                },
                {
                    dateTitle: 'Saturday, 28 May 2022',
                    title: 'PJ Mortion',
                    date: 'Sat, May 28, 19:00',
                    category: 'Jakarta Internasional Java Jazz',
                    location: 'Festival - Jakarta, Indonesia', 
                    image: jb
                },
            ],
            selectedName: 'Hulk Hogan',
            names: [
                'Stone Cold Steve Austin',
                'Bret Hart',
                'Ric Flair',
                'Macho Man Randy Savage',
                'Jake The Snake Roberts',
                'The Undertaker',
                'Hulk Hogan',
                'Rikishi',
                'John Cena',
                'Shawn Michaels',
                'British Bulldog',
                'Superfly Jimmy Snuka',
                'The Ultimate Warrior',
                'Andre The Giant',
                'Doink The Clown',
            ]
        };
  },
}
</script>

<style>
.scrolling-wrapper{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 5px;
    padding-bottom: 10px;
}
.scrolling-wrapper.card{
    flex: 0 0 auto;
}

.scrolling-wrapper::-webkit-scrollbar {
  width: 1em;
  height: 5px;
}

.scroller-container{
    max-height: 500px;
    min-width: 150px;
    height: 305px;
    border-radius: 10px;
}
</style>
