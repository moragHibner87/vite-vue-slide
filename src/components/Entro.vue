<template>
   <section class="entro sec--pad">
        <div class="inner_width text-center">
            <p ref="fadeEl" class="enter-up">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
            </p>
        </div>
        <div ref="Section" class="card-area">
            <div class="card" ref="card">
                <h2>Glow me on</h2>
            </div>
        </div>
        <div class="snake">
            <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        
    </section>
</template>

<script setup>
import {ref , onMounted} from 'vue';

const fadeEl = ref(null)
const Section = ref(null)

const card = ref(null)
const playRotate = () => {
    function rotateElm(event, element){
        const x = event.clientX;
        const y = event.clientY;
        
        const SectionRect = Section.value.getBoundingClientRect();
        const middleX = SectionRect.width / 2;
        const middleY = SectionRect.height / 2;

        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((x - middleY) / middleY) * 10;

        element.value.style.setProperty('--rotateX', -1 * offsetY + 'deg');
        element.value.style.setProperty('--rotateY', offsetX + 'deg')
    }

    Section.value.addEventListener('mousemove', (e) => {
        rotateElm(e, card)
    })
    Section.value.addEventListener('mouseleave', (e) => {
        card.value.style.setProperty('--rotateX', '0deg');
        card.value.style.setProperty('--rotateY', '0deg')
    })
}


onMounted(()=> {
    playRotate()
})

</script>