<template>
  <div class="bg-black h-full w-full pb-8 text-white">
    <div class="bg-cover header w-full h-96">
      <div class="backdrop-filter backdrop-blur-md w-full h-96">
        <div class="md:flex">
          <div class="flex items-center justify-center">
            <img
              class="
                mt-10
                h-40
                w-40
                rounded-full
                md:p-3 md:h-64 md:w-64 md:mt-28
              "
              :src="jb"
            />
          </div>
          <div class="md:flex md:items-center md:p-3 md:mt-24">
            <div
              class="md:text-left text-center"
              v-for="item in datas"
              :key="item.index"
            >
              <p class="font-bold mt-4 md:text-xl md:font-bold">
                {{ item.title }}
              </p>
              <p class="md:text-sm">{{ item.fans }} Fans</p>
              <p class="md:text-lg">{{ item.show }} Upcoming Shows</p>
              <p class="text-xs mt-2 md:text-sm">Listen to Justin Bieber</p>
              <button
                class="
                  bg-transparent
                  text-sm
                  mt-3
                  hover:bg-blue-500
                  text-blue-700
                  font-semibold
                  hover:text-white
                  py-1
                  w-32
                  border border-blue-500
                  hover:border-transparent
                  rounded
                "
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style="background-color: #202424" class="h-2"></div>
    </div>

    <div class="p-3 mt-2">
      <p class="text-sm">Events</p>
      <p class="mt-3 text-lg">Upcoming</p>
      <div>
        <p class="text-md text-gray-400 mt-5">Events in your area</p>
        <div class="mt-3" v-for="item in datas2" :key="item.index">
          <div class="flex">
            <div class="text-center">
              <p class="text-xs text-gray-400 mt-5">{{ item.day }}</p>
              <p style="color: #00b4b3" class="text-lg">{{ item.num }}</p>
              <p style="color: #00b4b3" class="text-xs">{{ item.month }}</p>
            </div>
            <div class="flex items-center justify-center">
              <div class="px-3">
                <p class="text-lg mt-5">{{ item.place }}</p>
                <p class="text-md text-gray-400">{{ item.alamat }}</p>
              </div>
            </div>
          </div>

          <hr class="mt-3" />
        </div>
      </div>

      <div>
        <p class="text-md text-gray-400 mt-5">All Events and Live Streams</p>
        <div class="mt-3" v-for="item in datas3" :key="item.index">
          <div class="flex">
            <div class="text-center">
              <p class="text-xs text-gray-400 mt-5">{{ item.day }}</p>
              <p style="color: #00b4b3" class="text-lg">{{ item.num }}</p>
              <p style="color: #00b4b3" class="text-xs">{{ item.month }}</p>
            </div>
            <div class="flex items-center justify-center">
              <div class="px-3">
                <p class="text-lg mt-5">{{ item.place }}</p>
                <p class="text-md text-gray-400">{{ item.alamat }}</p>
              </div>
            </div>
          </div>

          <hr class="mt-3" />
        </div>

        <router-link to="/">
          <div style="color: #00b4b3" class="text-center text-xs py-5">
            View All Events
          </div>
        </router-link>
      </div>
    </div>

    <div style="background-color: #202424" class="h-2"></div>

    <div>
      <div class="font-bold flex items-center justify-between p-5">
        <div>Photos of Justin Bieber</div>
        <div style="color: #00b4b3">See all</div>
      </div>

      <div class="md:grid-cols-5">
        <div class="grid grid-cols-2">
          <img class="w-full" :src="jb" />
          <img class="w-full" :src="jb" />
        </div>
        <div class="grid grid-cols-3">
          <img class="w-full" :src="jb" />
          <img class="w-full" :src="jb" />
          <img class="w-full" :src="jb" />
        </div>
        <div style="background-color: #202424" class="h-2"></div>
      </div>
    </div>

    <div>
      <div class="font-bold flex items-center justify-between p-5">
        <div>Latest Post</div>
        <div style="color: #00b4b3">All Posts</div>
      </div>

      <div class="flex p-3">
        <div>
          <img class="w-10 rounded-full" :src="jb" />
        </div>
        <div class="px-2">
          <a style="color: #00b4b3">Justin Bieber</a> <a>posted a photo</a>
          <p class="text-xs">11M ago</p>
        </div>
      </div>

      <p class="text-md px-3 py-2">
        Justice World Tour 2022 presented by T-mobile
      </p>

      <div class="md:grid-cols-5">
        <div class="grid grid-cols-1">
          <img class="w-full" :src="jb" />
        </div>
        <div class="grid grid-cols-3">
          <img class="w-full" :src="jb" />
          <img class="w-full" :src="jb" />
          <img class="w-full" :src="jb" />
        </div>

        <div class="flex items-center justify-between text-xs py-2">
          <div class="px-3">
            <a>Like</a>
            <a class="px-3">Comment</a>
          </div>
          <div class="px-3">
            <a>258 Likes</a>
            <a class="pl-3">45 Comments</a>
          </div>
        </div>
        <div style="background-color: #202424" class="h-2"></div>
      </div>
    </div>

    <div>
      <div class="px-5 pt-5 font-bold flex items-center justify-between">
        <div>Fan Reviews</div>
        <div style="color: #00b4b3">All Reviews</div>
      </div>

      <div class="scrolling-wrapper">
        <div v-for="item in comments" :key="item.index">
          <div class="px-5 pb-5">
            <div
              class="bg-black w-96 border border-solid border-white mt-3 p-5"
            >
              <div class="flex">
                <div>
                  <img class="rounded-full w-10" :src="jb" />
                </div>

                <div class="px-3">
                  <a class="font-bold">{{ item.artist }}</a>
                  <a class="text-xs">april 20, 2022</a>
                  <p class="text-xs">{{ item.star }}</p>
                </div>
              </div>

              <div class="text-xs mt-2">
                {{ item.comment }}
              </div>

              <div class="text-xs mt-2">
                <a style="color: #00b4b3">{{ item.place }}</a
                ><a> {{ item.else }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="background-color: #202424" class="h-2"></div>

    <div class="p-5">
      <p class="font-bold">About</p>
      <section class="mt-3">
        <p>JUSTICE the album out now</p>
        <p>https://justinbieber.Ink.to/justice</p>
      </section>

      <div class="flex py-2">
        <div class="text-gray-400">Genres</div>

        <div class="items-center justify-center flex px-8 text-sm">
          Pop R and B
        </div>
      </div>

      <div class="flex py-2">
        <div class="text-gray-400">Official</div>

        <div class="items-center justify-center flex px-8 text-sm">
          https://justinbiebermusic.com
        </div>
      </div>

      <div class="flex scrolling-wrapper">
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
        <div class="px-2">logo</div>
      </div>
    </div>

    <div style="background-color: #202424" class="h-2"></div>

    <div>
      <p class="font-bold p-5">Fans Also Follow</p>
      <div class="scrolling-wrapper">
        <div v-for="item in artist" :key="item.index">
          <div>
            <div class="w-32 mx-3 text-center mt-2">
              <img class="w-32 rounded-full" :src="item.image" />
              <section class="pt-2">
                <p style="color: #00b4b3">{{ item.artist }}</p>
                <p>{{ item.followers }}M Followers</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Artists } from '@/firebase';
import _ from 'lodash'
export default {
  name: "ArtistDetail",
  components: {},
  data() {
    return {
      datas: [
        {
          title: "Justin Bieber",
          place: "GBK Madya stadium",
          date: "Wed, Nov 2",
          show: "97",
          fans: "4.889.762",
          alamat:
            "Jl. Asia Afrika, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 10270",
          image: require("../assets/JB.png"),
        },
      ],
      datas2: [
        {
          num: "02",
          day: "WED",
          month: "NOV",
          place: "GBK Madya Stadium",
          alamat: "Kota Administrasi Jakarta Selatan, Indonesia",
        },
        {
          num: "03",
          day: "WED",
          month: "NOV",
          place: "GBK Madya Stadium",
          alamat: "Kota Administrasi Jakarta Selatan, Indonesia",
        },
      ],
      datas3: [
        {
          num: "24",
          day: "2022",
          month: "FEB",
          place: "The Forum",
          alamat: "Los Angeles, CS - 19:00",
        },
        {
          num: "21",
          day: "THU",
          month: "APR",
          place: "Gainbridge Fieldhouse",
          alamat: "Indianapolis, IN - 19:00",
        },
        {
          num: "24",
          day: "SUN",
          month: "APR",
          place: "Wells Fargo Arena",
          alamat: "Des Moines, IA - 19:00",
        },
        {
          num: "27",
          day: "WED",
          month: "APR",
          place: "Moody Center",
          alamat: "Austin, TX - 19:00",
        },
        {
          num: "29",
          day: "FRI",
          month: "APR",
          place: "Toyota Center",
          alamat: "Houston, TX - 19:00",
        },
      ],
      comments: [
        {
          artist: "Justin Bieber",
          date: "april 20, 2022",
          star: "star logo",
          comment: "he always puts on a great show. im a huge fan of his",
          place: "Cincinnati, OH",
          else: "@ Heritage Bank Center",
        },
        {
          artist: "Justin Bieber",
          date: "april 20, 2022",
          star: "star logo",
          comment: "he always puts on a great show. im a huge fan of his",
          place: "Cincinnati, OH",
          else: "@ Heritage Bank Center",
        },
        {
          artist: "Justin Bieber",
          date: "april 20, 2022",
          star: "star logo",
          comment: "he always puts on a great show. im a huge fan of his",
          place: "Cincinnati, OH",
          else: "@ Heritage Bank Center",
        },
        {
          artist: "Justin Bieber",
          date: "april 20, 2022",
          star: "star logo",
          comment: "he always puts on a great show. im a huge fan of his",
          place: "Cincinnati, OH",
          else: "@ Heritage Bank Center",
        },
        {
          artist: "Justin Bieber",
          date: "april 20, 2022",
          star: "star logo",
          comment: "he always puts on a great show. im a huge fan of his",
          place: "Cincinnati, OH",
          else: "@ Heritage Bank Center",
        },
      ],
      artist: [
        {
          artist: "Justin Bieber",
          followers: "4",
          image: require("../assets/JB.png"),
        },
        {
          artist: "Justin Bieber",
          followers: "4",
          image: require("../assets/JB.png"),
        },
        {
          artist: "Justin Bieber",
          followers: "4",
          image: require("../assets/JB.png"),
        },
        {
          artist: "Justin Bieber",
          followers: "4",
          image: require("../assets/JB.png"),
        },
        {
          artist: "Justin Bieber",
          followers: "4",
          image: require("../assets/JB.png"),
        },
      ],
      jb: require("../assets/JB.png"),
      item: [],
    };
  },
  mounted(){
      Artists.getArtist(this.$route.params.id, true).then((artist) => {
        if (_.isNil(artist)) {
            this.$router.push("/404");
        } else {
            console.log(artist)
            this.item = artist;
            this.loading = false;
        }
      })
      Artists.getArtistEvents(this.$route.params.id).then((events) => {
          console.log(events)
      })
  },
  created(){},
};
</script>

<style>
.header {
  background-image: url("../../src/assets/JB.png");
  background-repeat: no-repeat;
}

.scrolling-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: 5px;
}

.scrolling-wrapper::-webkit-scrollbar {
  display: none;
}
</style>