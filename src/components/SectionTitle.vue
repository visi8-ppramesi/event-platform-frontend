<template>
    <div class="flex items-center justify-between">
        <div>
          <p class="text-l md:text-2xl">{{title}}</p>
          <p class="text-xs">{{description}}</p>
        </div>

        <div v-if="type === 'view' " class="invisible md:block md:visible flex items-center justify-center">
          <p class="text-l md:text-l">View All</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
        title: String,
        description: String,
        type: String,
    }
}
</script>