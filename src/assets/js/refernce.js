gsap.registerPlugin(ScrollTrigger);

window.onload = async () => {
    await new Promise(res => setTimeout(() => res(), 150));
    // setTimeout(() => {

    
//console.log('window.onload')
let mm = gsap.matchMedia(),
    breakPoint = 800;
mm.add({
  // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
  isDesktop: `(min-width: ${breakPoint}px)`,
  isMobile: `(max-width: ${breakPoint - 1}px)`,
  reduceMotion: "(prefers-reduced-motion: reduce)"
}, (context) => {
  // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
  let { isDesktop, isMobile, reduceMotion } = context.conditions;

    // clip path
    if ($(".clipIt").length > 0) {
    const Clip = document.querySelector('.clipIt')
        gsap.fromTo(Clip, {
        "clip-path": isDesktop ? 'ellipse(100% 100% at 50% 40%)' : 'ellipse(100% 120% at 50% 70%)',
        }, 
        {
        scrollTrigger: {
            trigger: Clip,
            start: Clip.offsetTop + "bottom",
            //markers: true,
            scrub: true,
            toggleActions: "restart pause reverse pause"
        },
        "clip-path": isDesktop ? "ellipse(40% 20% at 50% 50%)" : "ellipse(60% 20% at 50% 50%)" ,
        duration: .6,
    });
    }

    //values elips
    if ($(".elips").length > 0) {
        setTimeout(() => {
            //console.log('setTimeout')
            const elips = document.querySelector('.elips')
            const elipsMobile = document.querySelector('.elips-mobile')
            const hpValues = gsap.utils.toArray('.hp-value');
            hpValues.forEach((hpValue, i) => {
                gsap.to(hpValue, {
                    motionPath: {
                        path: isDesktop ? elips : elipsMobile,
                        align: isDesktop ? elips : elipsMobile,
                        alignOrigin: [0.5, 0.5],
                        //autoRotate: -90,
                        immediateRender: true,
                        start: i * 0.18,
                        end: (i * 0.16) + 1
                    },
                    opacity: 1,
                    repeat: -1,
                    duration: 20,
                    ease: "none",
                    //delay: i * 2,
                })
            })
        },50)
    }

    // clip path Bottom
    if ($(".clipBottom").length > 0) {
        const clipBottom = document.querySelector('.clipBottom')
            gsap.fromTo(clipBottom, {
            "clip-path": isDesktop ? 'ellipse(50% 60% at 50% 60%)' : 'ellipse(80% 50% at 50% 60%)',
            }, 
            {
            scrollTrigger: {
                trigger: '.trigger-clipBottom',
                start: "-18% center",
                scrub: 1,
                toggleActions: "restart pause reverse pause"
            },
            "clip-path": isDesktop ? "ellipse(80% 70% at 50% 70%)" : "ellipse(100% 90% at 50% 70%)" ,
            duration: 1,
        });
    }

  return () => { 
    // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
    // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
  }
}); 


//enter-up
if ($(".enter-up").length > 0) {
    const boxes = gsap.utils.toArray('.enter-up');
    boxes.forEach((box, i) => {
        gsap.fromTo(box, {
            y: 60,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: box,
                start: "20% 100%",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: .5,
            //stagger: 0.15,
            delay: i * 0.06,
        })
    });
}

//draw line
if ($(".draw").length > 0) {
const drawLines = gsap.utils.toArray('.draw');
drawLines.forEach((draw, i) => {
    gsap.to(draw, {
        scrollTrigger: {
            trigger: draw,
            start: "20% 100%",
            toggleActions: "play none none reset",
            toggleClass: {targets: draw, className: "active"}
        },
        opacity: 1
    })
});
}


// char type
if ($(".type-me").length > 0) {
const typeMe = new SplitType('.type-me');
const chars = document.querySelectorAll('.char');

chars.forEach((char, i) => {
gsap.set(char, { opacity: 0});
gsap.fromTo(char, {
    opacity:0,
    },
{
    scrollTrigger: {
        trigger: char,
        start: "20% 100%",
        toggleActions: "play none none reset",
    },
    opacity: 1,
    //stagger: 1,
    delay: i * 0.03,
    //ease: Power2.out,
    duration: 0,
    ease: "none",
  })
});
}

//ticker-tx
if ($(".ticker-tx").length > 0) {
const tickers = gsap.utils.toArray('.ticker-tx');
tickers.forEach((box, i) => {
    gsap.fromTo(box, {
        x: 0,
    }, {
        scrollTrigger: {
            trigger: box,
            start: "20% 100%",
            toggleActions: "play none none reverse",
            scrub: 5,
        },
        x: -500,
        duration: 1,
    })
});
}

//toggle white header
if ($(".darkBg").length > 0) {
const darkBgs = gsap.utils.toArray('.darkBg');
darkBgs.forEach((darkBg, i) => {
    gsap.to(darkBg, {
        scrollTrigger: {
            trigger: darkBg,
            start: "-10px top",
            end: "bottom top",
            toggleActions: "play none none reset",
            toggleClass: {targets: '.header', className: "white-header"}
        }
    })
});
}

//img-up
if ($(".img-up").length > 0) {
    gsap.to('.img-up', {
        scrollTrigger: {
            trigger: '.img-up',
            start: "top center",
            end: "bottom top",
            toggleActions: "play none none reset",
            scrub: 2
        },
        y: -50
    })
}
// }, 150)

}//END window.onload 

//startLines
function startLines(e){
    const LinesB = $(e).closest(".menu-item").find(".line");
    const Lines = gsap.utils.toArray(LinesB);
    Lines.forEach((Line, i) => {
        gsap.fromTo(Line, {
            width: 0,
        }, 
        { 
            width: '100%',
            duration: .3,
            delay: i * .2
        })
    });
}