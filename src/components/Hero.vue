<template>
<section class="hero relative over-hide">
    <div class="inner_width flex items-center justify-center">
        <h1 ref="fadeOuts" class="title fade-out">
            <span>Your next dream vacation</span>
            <span>Your next dream vacation</span>
        </h1>
    </div>
    <img class="img-cover img-scroll" src="../assets/images/hero.jpg" alt=""/>
</section>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import { gsap, Power2  } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {animationInOut, animationUp} from '../composables/animations'

gsap.registerPlugin(ScrollTrigger);

const fadeOuts = ref(null)
animationInOut(fadeOuts)

onMounted(() => {
    //img-scroll
    const imgSrolls = document.querySelectorAll('.img-scroll');
    if (imgSrolls.length > 0) {
    imgSrolls.forEach((imgSroll, i) => {
        gsap.to(imgSroll, {
            scrollTrigger: {
                trigger: imgSroll,
                start: "top top",
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            y: 150,
            scale: 1.05
    })   
    })
    }
})
</script>