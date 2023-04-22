import { onMounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function animationInOut(el) {
    onMounted(() => {
        gsap.to(el.value.children, {
            scrollTrigger: {
                trigger: el.value,
                start: "top 30%",
                scrub: true,
                toggleActions: "restart pause none reverse"
            },
            autoAlpha: 0,
            y: -100,
            stagger: .5,
            ease: 'back.out(1.7)'
        })
    })
}
