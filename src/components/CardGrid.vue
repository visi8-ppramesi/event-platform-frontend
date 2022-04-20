<template>
    <div class="pt-3 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-2 flex-wrap overflow-x-auto overflow-x-hidden min-h-40">
        <div v-if="loading" class="min-w-full flex justify-center items-center my-10">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="" v-for="item in content" :key="item.index">
            <div v-if="type === 'discover' ">
                <div class="relative">
                    <img :src="item.image" />
                    <div class="mx-1 my-1 absolute bottom-0 left-0 text-xs pt-2">
                        <p>{{item.name}}</p>
                        <p>{{item.place}}</p>
                        <p>{{item.time}}</p>
                    </div>
                </div>
            </div>

            <div v-if="type === 'explore' ">
                <div class="relative">
                    <img :src="item.image" />
                    <div class="px-3 text-center pt-16 font-bold absolute inset-0">
                        <p>{{item.name}}</p>
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
        name: String,
        place: String,
        time: String,
        type: String,

    },
    data(){
        return {
            loading: true
        }
    },
    methods: {
        hideSpinner(){
            this.loading = false
        }
    }
    
}
</script>

<style scoped>
</style>