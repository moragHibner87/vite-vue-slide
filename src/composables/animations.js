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

export function animationUp(el) {
    onMounted(() => {
        const elementsArr = gsap.utils.toArray(el.value);
        elementsArr.forEach((element, i) => {
            gsap.fromTo(element, {
                y: 60,
                opacity: 0,
            }, {
                scrollTrigger: {
                    trigger: element,
                    start: "20% 100%",
                    toggleActions: "play none none reverse"
                },
                opacity: 1,
                y: 0,
                duration: .5,
                //stagger: 0.15,
                delay: i * 0.06,
            })
        })
    })
}
