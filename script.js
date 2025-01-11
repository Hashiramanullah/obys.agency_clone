let loader = document.querySelector('#loader');
let main = document.querySelector("#main");

function LocoMotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".man"),
        smooth: true
    });

    // Sync Locomotive Scroll with ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    // Setup ScrollTrigger proxy for Locomotive Scroll
    ScrollTrigger.scrollerProxy(".man", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".man").style.transform ? "transform" : "fixed"
    });
}

function Loader() {
    let tl = gsap.timeline();  // Timeline initialization
    tl.from(".line h1", {
        y: 150,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.3
    });
}

function MainAnimation() {
    main.style.display = 'block';  // Show main content after loader
    let tl = gsap.timeline();  // Initialize timeline for main animation
    tl.from("#main", {
        y: 150,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.3,
    });
}

function Counter() {
    let h5 = document.querySelector('.line1-part-1 h5');
    let grow = 0;

    setInterval(function() {
        if (grow < 100) {
            h5.textContent = grow++;
            if (grow == 100) {
                loader.style.display = 'none'; // Hide loader
                MainAnimation(); // Trigger main animation
            }
        } else {
            h5.textContent = grow;
        }
    }, 35);
}

document.addEventListener('DOMContentLoaded', () => {
    LocoMotive();
    Loader();
    Counter();
});
