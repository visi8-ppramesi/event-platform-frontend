<template>
    <div class="scrolling-wrapper">
        <div class="pt-3" v-for="item in content" :key="item.index">
            <div class="relative h-full w-48">
                <div class="pr-3">
                    <img class="h-full w-full" :src="item.image">
                    <p class="text-center pt-24 font-bold absolute inset-0">{{item.name}}</p>
                    <p class="text-center pt-28 font-bold absolute inset-0">{{item.subs}} followers</p>
                    <div>
                        <button class="absolute inset-x-0 bottom-0 bg-red-800 w-32 hover:bg-blue-700 text-white text-xs font-bold mx-7 my-2 py-2 px-4 rounded">
                            View
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
    methods: {
        hideSpinner(){
        },
    }
}
</script>

<style scoped>
.scrolling-wrapper{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 5px;
    padding-bottom: 10px;
}

.scrolling-wrapper::-webkit-scrollbar {
  width: 1em;
  height: 5px;
}
 
.scrolling-wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
 
.scrolling-wrapper::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10px;
}

</style>