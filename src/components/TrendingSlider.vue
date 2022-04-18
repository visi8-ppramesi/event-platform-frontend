<template>
    <div class="scrolling-wrapper">
        <div class="pt-3" v-for="item in content" :key="item.index">
            <div class="relative h-full w-48">
                <div class="pr-3">
                    <img class="h-full w-full" :src="item.image">
                    <p class="text-center pt-24 font-bold absolute inset-0">{{item.title}}</p>
                    <p class="text-center pt-28 font-bold absolute inset-0">{{item.subs}} followers</p>
                    <div>
                        <button class="absolute inset-x-0 bottom-0 bg-red-800 w-32 hover:bg-blue-700 text-white text-xs font-bold mx-7 my-2 py-2 px-4 rounded">
                            View All
                        </button>
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

.scrolling-wrapper::-webkit-scrollbar {
    display: none;
}
</style>