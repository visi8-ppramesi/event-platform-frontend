<template>
    <div>
        <nav class="main-nav">
            <div class="logo text-white">
                {{title}}
            </div>
            <BurgerMenu></BurgerMenu>
        </nav>
    </div>
</template>

<script>
import BurgerMenu from './menu/BurgerMenu.vue';
export default {
    name: 'NavBar',
    components: {
        BurgerMenu
    },
    props: {
        title: String,
    }
}
</script>

<style>
    .main-nav {
        background-color: #202424;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0.8rem;
    }
</style>