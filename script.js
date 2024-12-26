const loadingAnimation = () => {
    const timeline = gsap.timeline();

    // Animate Loader and Associated Elements
    timeline
        .from("#loader", {
            opacity: 0.5,
            y: 100,
            duration: 1,
        })
        .from("#loader h1", {
            opacity: 0.5,
            y: 100,
            duration: 0.8,
        }, "-=0.5") // Overlap animation timing
        .from(".line1-part-1", {
            opacity: 0.5,
            y: 100,
            duration: 0.8,
        }, "-=0.5")
        .from(".line .now", {
            opacity: 0.5,
            y: 100,
            duration: 0.8,
        }, "-=0.5");

    // Counter Animation Logic
    const startCounter = () => {
        const counter = document.querySelector(".line1-part-1 h5");
        const loader = document.querySelector("#loader");
        const mainDiv = document.querySelector("#main");

        if (counter) {
            let grow = 0;
            const interval = setInterval(() => {
                counter.innerHTML = grow++;
                if (grow > 100) {
                    clearInterval(interval);

                    if (loader) {
                        gsap.to(loader, {
                            opacity: 0,
                            duration: 0.5,
                            onComplete: () => {
                                loader.style.display = "none"; // Hide loader
                                if (mainDiv) {
                                    mainDiv.style.display = "block"; // Show main content
                                    gsap.fromTo(
                                        mainDiv,
                                        { opacity: 0, y: 100 },
                                        { opacity: 1, y: 0, duration: 0.9 }
                                    );
                                }
                            },
                        });
                    }
                }
            }, 15);
        } else {
            console.error("Counter element not found!");
        }
    };

    // Run counter after the animations
    timeline.call(startCounter);
};

const headingAnimation = () => {
    const timeline = gsap.timeline();

    // Fade out and fade in with sequential animations
    timeline
        .to(".hero", {
            opacity: 0,
        })
        .from(".hero", {
            opacity: 2,
        })
        .from(".heading h1", {
            opacity: 0,
            stagger: 0.2,
            y: -100,
            duration: 1,
        }, "-=0.5");
};

const cursorAnimation = () => {
    const cursor = document.querySelector("#cursor");
    if (cursor) {
        document.addEventListener("mousemove", (event) => {
            gsap.to(cursor, {
                left: event.pageX,
                top: event.pageY,
                duration: 0.1,
            });
        });
    } else {
        console.error("Cursor element not found!");
    }
};


Shery.makeMagnet("#nav h5" /* Element to target.*/, {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.2,
  });
// Initialize Animations
loadingAnimation();
headingAnimation();
cursorAnimation();
