<template>
    <div class="scrolling-wrapper">
        <div class="pt-3" v-for="item in content" :key="item.index">
            <div v-if="type === 'recommended' ">
                <div class="h-full w-36 pr-2">
                    <router-link to="/artist/detail">
                         <img class="h-36 w-36" :src="item.image">
                        <div class="text-xs pt-2">
                            <p>{{item.title}}</p>
                            <p>{{item.place}}</p>
                            <p>{{item.time}}</p>
                        </div>
                    </router-link>
                </div>
            </div>

            <div  v-if="type === 'upcoming' ">
                <div class="h-full w-64 pr-3">
                    <router-link to="/event/detail">
                        <img class="object-cover h-40 w-full" :src="item.image">
                        <div class="text-xs pt-2">
                            <p>{{item.title}}</p>
                            <p>{{item.place}}</p>
                            <p>{{item.time}}</p>
                        </div>
                    </router-link>
                </div>
            </div>

            <div v-if="type === 'details' ">
                <div class="relative h-full w-40 pr-3">
                    <img class="rounded" :src="item.image" />
                    <div class="px-3 text-left pt-16 font-bold absolute inset-0">
                        <p>{{item.band}}</p>
                        <p>{{item.time}}</p>
                        <p>{{item.title}}</p>
                    </div>
                    <div style="background-color: #202424" class="rounded-b text-white text-xs py-2 text-black px-3">{{item.num}} RSVPs</div>
                </div>
            </div>
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
        place: String,
        time: String,
        type: String,

    },
    
}
</script>

<style scoped>
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