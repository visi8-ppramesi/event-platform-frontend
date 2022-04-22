<template>
    <div class="scrolling-wrapper" ref="scrollWrapper">
        <div class="pt-3" v-for="item in content" :key="item.index">
            <div v-if="size === 'small' ">
                <div class="h-full w-36 pr-2">
                    <router-link :to="'/' + linkTo + '/' + item.id">
                        <img class="h-36 w-36 rounded-md" :src="item.image">
                        <div class="text-xs pt-2">
                            <p>{{item.name}}</p>
                            <p>{{item.location}}</p>
                            <p>{{item.date}}</p>
                        </div>
                    </router-link>
                </div>
            </div>

            <div  v-if="size === 'medium' ">
                <div class="h-full w-64 pr-3">
                    <router-link :to="'/' + linkTo + '/' + item.id">
                        <img class="object-cover h-40 w-full rounded-md" :src="item.image">
                        <div class="text-xs pt-2">
                            <p>{{item.name}}</p>
                            <p>{{item.location}}</p>
                            <p>{{item.date}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            
            <!-- <div v-if="size === 'details' ">
                <div class="relative h-full w-40 pr-3">
                    <img class="rounded" :src="item.image" />
                    <div class="px-3 text-left pt-16 font-bold absolute inset-0">
                        <p>{{item.band}}</p>
                        <p>{{item.date}}</p>
                        <p>{{item.name}}</p>
                    </div>
                    <div style="background-color: #202424" class="rounded-b text-white text-xs py-2 text-black px-3">{{item.num}} RSVPs</div>
                </div>
            </div> -->
        </div>
        <div v-if="loading" class="min-w-full flex justify-center items-center my-10">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="button-container" v-if="showLoadMore">
            <div class="next-button mx-2">
                <font-awesome-icon icon="fa-solid fa-angle-right" size="lg" @click="loadMore" />
            </div>
            Load
            More
        </div>
    </div>
</template>

<script>
export default {
    name: 'horizontal-slider',
    props: {
        content: {
            type: Array,
            default: () => []
        },
        title: String,
        location: String,
        date: String,
        size: String,
        linkTo: String,
        showLoadMore: {
            type: Boolean,
            default: true
        },
        // loading: {
        //     type: Boolean,
        //     default: true
        // }
    },
    data(){
        return {
            loading: true
        }
    },
    methods: {
        hideSpinner(){
            this.loading = false
        },
        showSpinner(){
            this.loading = true
        },
        loadMore(){
            this.$refs.scrollWrapper.scrollLeft = this.$refs.scrollWrapper.scrollWidth
            this.$emit('loadMore')
        }
    }
}
</script>

<style scoped>
.button-container{
    text-align: center;
    align-self: center;
    justify-self: center;
}
.next-button{
    height: 3rem;
    min-width: 3rem;
    align-self: center;
    display: flex;
    justify-content: center;
    justify-self: center;
    align-items: center;
    border-radius: 100%;
    background-color: rgb(67 76 76);
}
.scrolling-wrapper{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-top: 5px;
}
.scrolling-wrapper.card{
    flex: 0 0 auto;
}
.scrolling-wrapper::-webkit-scrollbar {
    display: none;
}
.scroller-container{
    max-height: 205px;
    min-width: 150px;
    height: 205px;
    border-radius: 10px;
}
.image{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 80px;
    max-width: 100%;
}
.scroller-block{
    height: calc(100vh - 64px);
    background-size: cover;
    background-position: center;
    max-height: 100%;
}
</style>