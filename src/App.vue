<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import Hero from '@/components/Hero.vue'
import Entro from '@/components/Entro.vue'
import Rows from '@/components/Rows.vue'
import Slider from '@/components/Slider.vue'
import Snap from './components/Snap.vue'
</script>

<template>
  <div class="my-app-wrap" v-cloak>
    <Header />
    <main>
      <Hero/>
      <Entro/>
      <Rows/>
      <Slider/>
      <Snap/>
    </main>
    <Footer/>
    <HelloWorld msg="Hello Vue 3.0 + Vite!!" />
  </div>
</template>
