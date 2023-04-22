<template>
    <Swiper 
        :modules="[EffectCube, Pagination, Autoplay]" 
        effect="cube"
        :grabCursor="true"
        :loop="true"
        :autoplay="true"
        :cubeEffect="{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94

        }"
        :pagination="{ clickable: true }"
    >
        <SwiperSlide v-for="item in sliderData" :key="item.id">
            <div >
                <img :src="`src/assets/images/${item.image}`"/>
                {{ item.title }}
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { EffectCube, Pagination, Autoplay } from 'swiper'

import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import 'swiper/css'

const sliderData = [
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
  }
];
</script>

<style lang="scss">
.swiper{
    max-width: 500px;
    aspect-ratio: 1;
    overflow: visible;
}
.swiper-slide{
    img{
        position: absolute;
        inset: 0;
        width:100%;
        height:100%;
        object-fit: cover;
    }
}
</style>