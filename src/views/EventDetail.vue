<template>
  <div class="bg-black h-full w-full pb-8 text-white">
    <div
      class="bg-cover header w-full h-96"
      v-if="!loading"
      :style="{ 'background-image': 'url(' + item.cover_picture + ')' }"
    >
      <div class="backdrop-filter backdrop-blur-md w-full h-96">
        <div class="md:flex">
          <div class="flex items-center justify-center">
            <img
              class="
                mt-10
                h-40
                w-40
                rounded-3xl
                md:p-3 md:h-64 md:w-64 md:mt-28
              "
              :src="item.cover_picture"
            />
          </div>
          <div class="md:flex md:items-center md:p-3 md:mt-24">
            <div class="md:text-left text-center">
              <p class="md:text-xl md:font-bold">{{ item.name }}</p>
              <p class="md:text-lg">{{ item.location_data.name }}</p>
              <p class="md:text-md">
                {{
                  item.start_date
                    .toDate()
                    .toLocaleDateString("id-ID", localeOpt)
                }}
              </p>
              <p class="md:text-sm">{{ item.subscribers }} fans interested</p>
              <p class="text-xs mt-2 md:text-sm">Listen to Justin Bieber</p>
              <div class="hidden md:block md:visible text-center text-xs mt-2">
                <div class="mt-3">
                  <div class="py-1 px-1">
                    <button
                      class="
                        bg-red-800
                        w-40
                        px-3
                        md:w-56
                        hover:bg-blue-700
                        text-white
                        font-bold
                        py-2
                        px-4
                        rounded-full
                      "
                    >
                      Get Tickets
                    </button>
                  </div>
                  <div class="py-1 px-1">
                    <button
                      class="
                        bg-white
                        w-40
                        px-3
                        md:w-56
                        hover:bg-blue-700
                        text-black
                        font-bold
                        py-2
                        px-4
                        rounded-full
                      "
                    >
                      Remind Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center text-xs mt-2 md:hidden">
          <div class="mt-3 flex items-center justify-center">
            <div class="px-2">
              <button
                class="
                  bg-red-800
                  w-40
                  px-3
                  md:w-96
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                "
              >
                Get Tickets
              </button>
            </div>
            <div class="px-2">
              <button
                class="
                  bg-white
                  w-40
                  px-3
                  md:w-96
                  hover:bg-blue-700
                  text-black
                  font-bold
                  py-2
                  px-4
                  rounded
                "
              >
                Remind Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-white" v-if="!loading">
      <div class="flex py-3 px-5">
        <div class="px-3 flex items-center justify-center">
          <font-awesome-icon icon="fa-solid fa-building" class="h-6" />
        </div>
        <div class="ml-3">
          <p class="font-bold">{{ item.location_data.name }}</p>
          <p class="text-xs">{{ item.location_data.address }}</p>
        </div>
      </div>

      <div class="flex py-3 px-5">
        <div class="px-3 flex items-center justify-center">
          <font-awesome-icon icon="fa-solid fa-calendar" class="h-6" />
        </div>
        <div class="ml-3">
          <p class="font-bold">
            {{
              item.start_date.toDate().toLocaleDateString("id-ID", localeOpt)
            }}
          </p>
          <p>{{ item.start_date.toDate().toTimeString() }}</p>
        </div>
      </div>

      <div class="font-bold px-5 mt-7">
        <p>Event Lineup</p>
        <div class="scrolling-wrapper">
          <div
            class="pr-6 pt-3 w-24"
            v-for="(artist, idx) in artists"
            :key="'artist-' + idx"
          >
            <router-link :to="'/artist/' + artist.id.id">
              <img :src="artist.profile_picture" />
              <p class="text-xs py-2 text-center">{{ artist.name }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="px-5 mt-7">
        <p class="font-bold">Need a Place to stay?</p>
        <p class="text-xs">
          Find Hotels and vacation rentals near GBK Madya Stadium in kota
          Administrasi Jakarta Selatan, Indonesia
        </p>
      </div>

      <div class="px-5 mt-7">
        <p class="font-bold">Need to get There on time?</p>
        <p class="text-xs">Use Waze to avoid arriving late to the show</p>
        <button
          class="
            mt-3
            bg-blue-800
            w-full
            md:w-full
            hover:bg-blue-700
            text-white
            py-2
            px-4
            rounded
          "
        >
          Plan Trip in Waze
        </button>
      </div>
    </div>
    <div>
      <div class="px-5 pt-5 font-bold flex items-center justify-between">
        <div>Posts</div>
      </div>
      <div>
        <div v-for="item in comments" :key="item.index">
          <div class="px-5 pb-5">
            <div class="bg-black w-full border border-solid border-white p-5">
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
      <div v-if="userObj">
        <div class="px-5 pt-5 font-bold flex items-center justify-between">
          <div>Create New Post</div>
        </div>
        <div class="px-5">
          <textarea
            class="w-full text-black"
            name="newPost"
            id=""
            cols="30"
            rows="10"
            v-model="newPost"
          ></textarea>

          <button
            class="
              mt-3
              bg-blue-800
              w-full
              md:w-full
              hover:bg-blue-700
              text-white
              py-2
              px-4
              rounded
            "
            @click="submitNewPost"
          >
            Submit New Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Events, User, Posts } from "@/firebase";
import _ from "lodash";
export default {
  name: "EventDetail",
  data() {
    return {
      userObj: null,
      newPost: "",
      loading: true,
      item: {},
      localeOpt: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      artists: [],
      jb: require("../assets/JB.png"),
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
    };
  },
  methods: {
      submitNewPost(){
          // eslint-disable-next-line no-unused-vars
          Posts.createPost('events', this.$route.params.id, this.newPost).then((post) => {
              this.newPost = ''
          })
      }
  },
  created() {
    this.userObj = User.getCurrentUser();
    this.loading = true;
    Events.getEvent(this.$route.params.id, true).then((event) => {
      if (_.isNil(event)) {
        this.$router.push("/404");
      } else {
        this.item = event;
        this.artists = event.artists_data;
        console.log(event);
        this.loading = false;
      }
    });
  },
};
</script>

<style>
.header {
  background-repeat: no-repeat;
}
.scrolling-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: 5px;
}
</style>