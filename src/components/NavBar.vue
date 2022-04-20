<template>
    <div>
        <nav class="main-nav md:hidden">
            <div class="logo text-white">
                {{title}}
            </div>
            <BurgerMenu></BurgerMenu>
        </nav>

        <div class="md:block hidden md:visible">
            <nav class="main-nav p-5">
                <div class="text-sm">Visi8 Concert</div>
                <div class="flex items-center justify-center logo text-white">
                    <ul class="flex flex-row space-x-8 mt-0 text-sm font-medium">
                        <li>
                            <a href="/" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                        </li>
                        <li>
                            <a href="/explore" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Explore</a>
                        </li>
                        <li>
                            <a href="/feed" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Feed</a>
                        </li>
                        <li>
                            <a href="/alert" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Alert</a>
                        </li>
                        <li>
                            <a href="/profile" class="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
                        </li>
                        <li>
                            <a href="/settings" class="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Settings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
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