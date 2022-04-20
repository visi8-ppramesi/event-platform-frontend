<template>
    <div class="pt-3 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-2 flex-wrap overflow-x-auto overflow-x-hidden min-h-40">
        <div class="" v-for="item in content" :key="item.index">
            <div v-if="type === 'discover' ">
                <div class="relative">
                    <img :src="item.image" />
                    <div class="mx-1 my-1 absolute bottom-0 left-0 text-xs pt-2">
                        <p>{{item.title}}</p>
                        <p>{{item.place}}</p>
                        <p>{{item.time}}</p>
                    </div>
                </div>
            </div>

            <div v-if="type === 'explore' ">
                <div class="relative">
                    <img :src="item.image" />
                    <div class="px-3 text-center pt-16 font-bold absolute inset-0">
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
    name: 'card-grid',
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
</style>