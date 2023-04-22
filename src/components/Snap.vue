<template>
<section class="snaps sec-pad over-hide">
    <div class="snap-scroll snaps-inline">
        <div class="snap-item" v-for="item in snapData" :key="item.id">
            <div class="snap-img triger-scale relative over-hide">
                <img class="img-cover" :src="`src/assets/images/${item.image}`" alt="" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
        </div>
    </div>
</section>
</template>

<script setup>
const snapData = [
  {
    id: 1,
    image: 'hero.jpg',
    title: 'First Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    image: 'box.jpg',
    title: 'Second Slide',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    image: 'dark.jpg',
    title: 'Third Slide',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 4,
    image: 'dark.jpg',
    title: '4 Slide',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

</script>