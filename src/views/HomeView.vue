<template>
  <div style="background-color: #202424" class="h-full w-full text-white">
    <div class="hidden md:block md:visible px-2">
      <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full h-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <router-link to="/event/detail">
              <img
                :src="jb"
                class="block w-full h-64 object-cover"
                alt="Wild Landscape"
              />
            </router-link>
          </div>
          <div class="carousel-item relative float-left w-full">
            <router-link to="/event/detail">
              <img
                :src="music"
                class="block w-full h-64 object-cover"
                alt="Camera"
              />
            </router-link>
          </div>
          <div class="carousel-item relative float-left w-full">
            <router-link to="/event/detail">
              <img
                :src="jb"
                class="block w-full h-64 object-cover"
                alt="Exotic Fruits"
              />
            </router-link>
          </div>
          <div class="carousel-item relative float-left w-full">
            <router-link to="/event/detail">
              <img
                :src="music"
                class="block w-full h-64 object-cover"
                alt="Camera"
              />
            </router-link>
          </div>
        </div>

        <button
          class="
            carousel-control-prev
            absolute
            top-0
            bottom-0
            flex
            items-center
            justify-center
            p-0
            text-center
            border-0
            hover:outline-none hover:no-underline
            focus:outline-none focus:no-underline
            left-0
          "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="
            carousel-control-next
            absolute
            top-0
            bottom-0
            flex
            items-center
            justify-center
            p-0
            text-center
            border-0
            hover:outline-none hover:no-underline
            focus:outline-none focus:no-underline
            right-0
          "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="p-3 md:hidden">
      <p class="text-l md:text-2xl">Recommended for you</p>
      <p class="text-xs">A Curated list of events based on artist you follow</p>

      <horizontal-slider
        ref="recomSlider"
        :content="recom"
        size="small"
        @loadMore="recomLoadMore"
        :showLoadMore="loadMore.recom"
        linkTo="event"
      />
    </div>

    <div class="p-3">
      <p class="text-l md:text-2xl">Upcoming festival</p>
      <p class="text-xs">Are you ready as we are for festival season ?!</p>

      <horizontal-slider
        ref="upcomingSlider"
        :content="upcoming"
        size="medium"
        @loadMore="upcomingLoadMore"
        :showLoadMore="loadMore.upcoming"
        linkTo="event"
      />
    </div>

    <div class="p-3">
      <p class="text-l md:text-2xl">Whats hot in your area</p>
      <p class="text-xs">Dont miss the shows everyones talking about</p>

      <card-grid ref="hotGrid" :content="hot" type="discover" linkTo="event" />

      <div class="flex items-center justify-center pt-5 w-full">
        <button
          class="
            bg-red-800
            w-full
            md:w-full
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
        >
          View All
        </button>
      </div>
    </div>

    <div class="p-3">
      <p class="text-l md:text-2xl">Get ready for the weekend</p>
      <p class="text-xs">find something to look forward u</p>

      <card-grid ref="futureGrid" :content="future" type="discover" linkTo="event" />

      <div class="flex items-center justify-center pt-5 w-full">
        <button
          class="
            bg-red-800
            w-full
            md:w-full
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
        >
          View All
        </button>
      </div>
    </div>

    <div class="p-3">
      <p class="text-l md:text-2xl">Trending artists</p>
      <p class="text-xs">These artists are topping the charts this week</p>

      <trending-slider ref="trendingSlider" :content="trending" linkTo="artist" />
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import HorizontalSlider from "@/components/HorizontalSlider.vue";
import CardGrid from "@/components/CardGrid.vue";
import TrendingSlider from "@/components/TrendingSlider.vue";
// import jb from "../assets/JB.png";
import { Artists, Events } from "@/firebase/index.js";
import settings from "../settings.js";
export default {
  name: "HomeView",
  components: {
    HorizontalSlider,
    CardGrid,
    TrendingSlider,
  },
  data() {
    return {
      recom: [],
      upcoming: [],
      hot: [],
      trending: [],
      future: [],
      jb: require("../assets/land.jpeg"),
      music: require("../assets/tes.jpg"),
      lastRefs: {
        recom: null,
        upcoming: null,
        trending: null,
        future: null,
      },
      loadMore: {
        recom: false,
        upcoming: false,
        trending: false,
        future: null,
      },
      test: [],
    };
  },
  computed: {
    // ...mapState({
    //     account: state => state.account,
    //     users: state => state.users.all
    // })
  },
  mounted() {
    this.upcomingLoadMore();
    this.recomLoadMore();
    this.trendingLoadMore();
    this.hotLoad();
    this.futureLoad();

  },
  methods: {
    async gridLoader(
      gridCount,
      fields,
      generatorObject,
      varName,
      gridRef
    ){
      const generator = generatorObject(gridCount)
      for await(const data of generator){
        const tempObj = {}
        Object.keys(fields).forEach((field) => {
          if(typeof fields[field] == 'function'){
            tempObj[field] = fields[field](data)
          }else{
            tempObj[field] = data[fields[field]]
          }
        })
        this[varName].push(tempObj)
      }
      gridRef.hideSpinner()
    },
    async futureLoad() {
      this.gridLoader(
        settings.hotGridSliderCount,
        {
          id: 'id',
          image: 'cover_picture',
          name: 'name',
          location: (data) => { return data.location_data.name }
        },
        Events.generatorEventsWithCoverDataUrl,
        'future',
        this.$refs.futureGrid
      )

      // Events.getEventsWithCoverDataUrl(settings.hotGridSliderCount).then(
      //   (events) => {
      //     this.$refs.futureGrid.hideSpinner();
      //     events.forEach((event) => {
      //       this.future.push({
      //         id: event.id,
      //         image: event.cover_picture,
      //         name: event.name,
      //         location: "place place place",
      //       });
      //     });
      //   }
      // );
    },
    async hotLoad() {
      this.gridLoader(
        settings.hotGridSliderCount,
        {
          id: 'id',
          image: 'cover_picture',
          name: 'name',
          location: (data) => { return data.location_data.name }
        },
        Events.generatorEventsWithCoverDataUrl,
        'hot',
        this.$refs.hotGrid
      )

      // Events.getEventsWithCoverDataUrl(settings.horizontalSliderCount).then(
      //   (events) => {
      //     this.$refs.hotGrid.hideSpinner();
      //     events.forEach((event) => {
      //       this.hot.push({
      //         id: event.id,
      //         image: event.cover_picture,
      //         name: event.name,
      //         location: "place place place",
      //       });
      //     });
      //   }
      // );
    },
    async sliderLoader(
      sliderCount,
      fields,
      queries,
      generatorObject,
      varName,
      sliderRef,
    ){
      this.loadMore[varName] = false
      const generator = generatorObject(sliderCount, queries, this.lastRefs[varName])
      let count = 0
      let lastOne
      for await(const data of generator){
        const tempObj = {}
        Object.keys(fields).forEach((field) => {
          if(typeof fields[field] == 'function'){
            tempObj[field] = fields[field](data)
          }else{
            tempObj[field] = data[fields[field]]
          }
        })
        this[varName].push(tempObj)
        count++
        lastOne = data
      }
      this.loadMore[varName] = 
        count >= sliderCount
      this.lastRefs[varName] = lastOne.doc
      console.log(lastOne.id)
      sliderRef.hideSpinner()
    },
    async trendingLoadMore() {
      this.sliderLoader(
        settings.horizontalSliderCount,
        {
          id: 'id',
          image: 'profile_picture',
          name: 'name',
          subs: 'fans'
        },
        [],
        Artists.generatorArtistsWithCoverDataUrl,
        'trending',
        this.$refs.trendingSlider
      )

      // Artists.getArtistsWithProfileDataUrl(
      //   settings.horizontalSliderCount,
      //   this.lastRefs.trending
      // ).then((artists) => {
      //   this.loadMore.trending =
      //     artists.length >= settings.horizontalSliderCount;
      //   this.lastRefs.trending = artists[artists.length - 1].doc;
      //   artists.forEach((artist) => {
      //     this.trending.push({
      //       id: artist.id,
      //       image: artist.profile_picture,
      //       name: artist.name,
      //       subs: artist.fans,
      //     });
      //   });
      // });
    },
    async upcomingLoadMore() {
      this.sliderLoader(
        settings.horizontalSliderCount,
        {
          id: 'id',
          image: 'cover_picture',
          name: 'name',
          location: (data) => { return data.location_data.name }
        },
        [],
        Events.generatorEventsWithCoverDataUrl,
        'upcoming',
        this.$refs.upcomingSlider
      )

      // Events.getEventsWithCoverDataUrl(
      //   settings.horizontalSliderCount,
      //   this.lastRefs.upcoming
      // ).then((events) => {
      //   this.$refs.upcomingSlider.hideSpinner();
      //   this.loadMore.upcoming =
      //     events.length >= settings.horizontalSliderCount;
      //   this.lastRefs.upcoming = events[events.length - 1].doc;
      //   events.forEach((event) => {
      //     this.upcoming.push({
      //       id: event.id,
      //       image: event.cover_picture,
      //       name: event.name,
      //       location: "place place place",
      //     });
      //   });
      // });
    },
    recomLoadMore() {
      this.sliderLoader(
        settings.horizontalSliderCount,
        {
          id: 'id',
          image: 'cover_picture',
          name: 'name',
          location: (data) => { return data.location_data.name }
        },
        [],
        Events.generatorEventsWithCoverDataUrl,
        'recom',
        this.$refs.recomSlider
      )

      // this.$refs.recomSlider.showSpinner();
      // this.loadMore.recom = false
      // Events.getEventsWithCoverDataUrl(
      //   settings.horizontalSliderCount,
      //   [],
      //   this.lastRefs.recom
      // ).then((events) => {
      //   this.$refs.recomSlider.hideSpinner();
      //   this.loadMore.recom = events.length >= settings.horizontalSliderCount;
      //   this.lastRefs.recom = events[events.length - 1].doc;
      //   events.forEach((event) => {
      //     this.recom.push({
      //       id: event.id,
      //       image: event.cover_picture,
      //       name: event.name,
      //       location: "place place place",
      //     });
      //   });
      // });
    },
    // ...mapActions('users', {
    //     getAllUsers: 'getAll',
    //     deleteUser: 'delete'
    // })
  },
};
</script>

<style>
</style>
