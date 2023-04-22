<template>
    <section class="categories">
          <div class="row flex items-center m-block">
            <div class="cat-wrap-img relative over-hide m-100">
              <div class="reveal absolute over-hide">
                <img class="img-cover" src="../assets/images/box.jpg" alt=""/>
              </div>
            </div>
            <div class="flex-1">
              <h2 class="title">A warm and beautiful place</h2>
              <p>
                It is a long established fact that a reader will be distracted by the, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
              </p>
            </div>
          </div>
          <div class="row flex items-center m-block">
            <div class="cat-wrap-img relative over-hide m-100">
              <div class="reveal absolute over-hide">
                <img class="img-cover" src="../assets/images/box.jpg" alt=""/>
              </div>
            </div>
            <div class="flex-1">
              <h2 class="title">A warm and beautiful place</h2>
              <p>
                It is a long established fact that a reader will be distracted by the, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
              </p>
            </div>
          </div>
        </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap, Power2  } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const containers = ref([])

onMounted(() => {
        //reveal
      const containers = document.querySelectorAll(".reveal");
      if (containers.length > 0) {
        containers.forEach((container) => {
          let image = container.querySelector("img");
          let tl = gsap.timeline({
              scrollTrigger: {
                  trigger: container,
                  start: "top bottom",
                  toggleActions: "restart none none reverse"
              }
            });
            tl.from(container, 1.5, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });
      }
    })

</script>