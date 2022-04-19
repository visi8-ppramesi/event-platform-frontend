<template>
    <div class="bg-black h-full w-full pb-8 text-white">
        <div class="bg-cover header w-full h-96">
            <div class="backdrop-filter backdrop-blur-md w-full h-96">
                <div class="flex items-center justify-center">
                    <img class="mt-10 h-40 w-40" :src="jb" />
                </div>
                <div class="text-center" v-for="item in datas" :key="item.index">
                    <p>{{item.title}}</p>
                    <p>{{item.place}}</p>
                    <p>{{item.date}}</p>
                    <p>{{item.fans}} fans interested</p>
                </div>
                <div class="text-center text-xs mt-2">
                    <p>Listen to Justin Bieber</p>
                    <div class="mt-3 flex items-center justify-center">
                        <div class="px-2">
                            <button class="bg-red-800 w-40 px-3 md:w-96 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Get Tickets
                            </button>
                        </div>
                        <div class="px-2">
                            <button class="bg-white w-40 px-3 md:w-96 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                                Remind Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-white" v-for="item in datas" :key="item.index">
            <div class="flex py-3 px-5">
                <div class="px-3 flex items-center justify-center">
                    <font-awesome-icon icon="fa-solid fa-building" class="h-6" />
                </div>
                <div class="ml-3">
                    <p class="font-bold">{{item.place}}</p>
                    <p class="text-xs">{{item.alamat}}</p>
                </div>
            </div>

            <div class="flex py-3 px-5">
                <div class="px-3 flex items-center justify-center">
                    <font-awesome-icon icon="fa-solid fa-calendar" class="h-6" />
                </div>
                <div class="ml-3">
                    <p class="font-bold">Wednesday, 2 November</p>
                    <p>{{item.time}}</p>
                </div>
            </div>

            <div  class="font-bold px-5 mt-7">
                <p>Event Lineup</p>
                <div class="px-3 pt-3">
                    <img class="h-16 w-16" :src="jb" />
                    <p class="text-xs py-2">Justin Bieber</p>
                </div>
            </div>

            <div class="px-5 mt-7">
                <p class="font-bold">Need a Place to stay?</p>
                <p class="text-xs">
                    Find Hotels and vacation rentals near GBK Madya Stadium
                    in kota Administrasi Jakarta Selatan, Indonesia
                </p>
            </div>

            <div class="px-5 mt-7">
                <p class="font-bold">Need to get There on time?</p>
                <p class="text-xs">
                    Use Waze to avoid arriving late to the show
                </p>
                <button class="mt-3 bg-blue-800 w-full md:w-96 hover:bg-blue-700 text-white py-2 px-4 rounded">
                    Plan Trip in Waze
                </button>
            </div>
                
        </div>

    </div>
</template>

<script>
import jb from '../assets/JB.png'
export default {
  name: 'ArtistDetail',
  data(){
        return {
            datas: [
                {title: 'Justin Bieber', place: 'GBK Madya stadium', date: 'Wed, Nov 2', time: '20:00', fans: '51', alamat: 'Jl. Asia Afrika, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 10270', image: jb},
            ],
            jb: require('../assets/JB.png'),
        };
  },
}
</script>

<style>
    .header {
        background-image: url("../../src/assets/JB.png");
        background: linear-gradient(to top, black);
        background-repeat: no-repeat;
    }
</style>