<template>
<div class="bg-black h-full w-full pb-8 text-white">
        <div class="bg-cover header w-full h-96">
            <div class="w-full h-96 pt-56">
                <div class="text-center md:text-left md:px-5" v-for="item in datas" :key="item.index">
                    <p class="font-bold md:text-2xl">{{item.title}}</p>
                    <p class="md:text-xl">{{item.date}}</p>
                    <p class="md:text-l">{{item.place}}</p>
                </div>
                <div class="text-center md:text-left text-xs mt-2">
                    <div class="mt-3">
                        <div class="px-2 md:px-5">
                            <button class="bg-blue-800 w-full px-3 md:w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Notify Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-white">
            <div class="px-5 mt-7">
                <p class="font-bold">Need a Place to stay?</p>
                <p class="text-xs">
                    Find Hotels and vacation rentals near GBK Madya Stadium
                    in kota Administrasi Jakarta Selatan, Indonesia
                </p>
            </div>

            <div class="px-5 mt-7">
                <p class="font-bold">Full Lineup</p>
            </div>
            <div>
                <div class="mt-3">
                    <div style="background-color: #202424" class="p-3 font-bold text-xs text-white">
                        Thursday, 23 Jun 2022
                    </div>
                    <horizontal-slider class="px-3" :content="datas" type="details" />
                </div>

                <div class="mt-3">
                    <div style="background-color: #202424" class="p-3 font-bold text-xs text-white">
                        Friday, 24 Jun 2022
                    </div>
                    <horizontal-slider class="px-3" :content="datas2" type="details" />
                </div>

                <div class="mt-3">
                    <div style="background-color: #202424" class="p-3 font-bold text-xs text-white">
                        Sunday, 26 Jun 2022
                    </div>
                    <horizontal-slider class="px-3" :content="datas3" type="details" />
                </div>

                <div class="mt-3">
                    <div style="background-color: #202424" class="p-3 font-bold text-xs text-white">
                        To be Announced
                    </div>

                    <horizontal-slider class="px-3" :content="datas4" type="details" />
                </div>   
            </div> 
        </div>

    </div>
</template>

<script>
import jb from '../assets/JB.png'
import HorizontalSlider from '@/components/HorizontalSlider.vue'
export default {
  name: 'EventDetail',
  components: {
    HorizontalSlider
  },
  data(){
        return {
            datas: [
                {band: 'Audiotricz', title: 'Drefqon.1', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'15:00', num: '38', image: jb},
            ],
            datas2: [
                {band: 'Break of Dawn', title: 'Drefqon.1', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'19:00', num: '13', image: jb},
                {band: 'Break of Dawn', title: 'Drefqon.1', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'19:00', num: '13', image: jb},
                {band: 'Break of Dawn', title: 'Drefqon.1', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'19:00', num: '13', image: jb},
                {band: 'Break of Dawn', title: 'Drefqon.1', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'19:00', num: '13', image: jb},
                {band: 'Break of Dawn', title: 'Drefqon.1', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'19:00', num: '13', image: jb},
            ],
            datas3: [
                {band: 'Angerfist', title: 'Wabibi Holland', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'17:00', num: '38', image: jb},
                {band: 'Angerfist', title: 'Wabibi Holland', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'17:00', num: '38', image: jb},
                {band: 'Angerfist', title: 'Wabibi Holland', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'17:00', num: '38', image: jb},
                {band: 'Angerfist', title: 'Wabibi Holland', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'17:00', num: '38', image: jb},
                {band: 'Angerfist', title: 'Wabibi Holland', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'17:00', num: '38', image: jb},
            ],
            datas4: [
                {band: 'Dj AniMe', title: 'Drefqon.1 2022', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'15:00', num: '5', image: jb},
                {band: 'Broken Minds', title: 'Drefqon.1 2022', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'15:00', num: '2', image: jb},
                {band: 'Dj AniMe', title: 'Drefqon.1 2022', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'15:00', num: '5', image: jb},
                {band: 'Broken Minds', title: 'Drefqon.1 2022', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'15:00', num: '2', image: jb},
                {band: 'Dj AniMe', title: 'Drefqon.1 2022', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'15:00', num: '5', image: jb},
                {band: 'Broken Minds', title: 'Drefqon.1 2022', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'15:00', num: '2', image: jb},
                {band: 'Dj AniMe', title: 'Drefqon.1 2022', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'15:00', num: '5', image: jb},
                {band: 'Broken Minds', title: 'Drefqon.1 2022', place: 'Streaming LIVE @ 5:00 GMT+7', date:'June 22 - 27, 2022', time:'15:00', num: '2', image: jb},
            ],
            jb: require('../assets/JB.png'),
        };
  },
}
</script>

<style>
</style>