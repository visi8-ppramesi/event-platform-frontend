<template>
    <div class="scrolling-wrapper">
        <div class="pt-3" v-for="item in content" :key="item.index">
            <div  v-if="type === 'recommended' ">
                <div class="h-full w-36 pr-2">
                    <img class="h-36 w-36" :src="item.image">
                    <div class="text-xs pt-2">
                        <p>{{item.title}}</p>
                        <p>{{item.place}}</p>
                        <p>{{item.time}}</p>
                    </div>
                </div>
            </div>

            <div  v-if="type === 'upcoming' ">
                <div class="h-full w-64 pr-3">
                    <img class="object-cover h-40 w-full" :src="item.image">
                    <div class="text-xs pt-2">
                        <p>{{item.title}}</p>
                        <p>{{item.place}}</p>
                        <p>{{item.time}}</p>
                    </div>
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