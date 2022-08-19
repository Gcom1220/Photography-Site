gsap.from(".image-right",{
    duration:1,
    x:"100vw",
    stagger: 0.5
})

gsap.from(".image",{
    duration:1,
    x:"-100vw",
    stagger: 0.5
})

gsap.from(".intro-head",{
    duration:0.5,
    y:"100vh",
})

gsap.from(".intro",{
    duration:0.5,
    y:"100vh",
    delay: 0.5
})


gsap.from(".intro-image",{
    duration:0.5,
    y:"100vh",
    delay: 1
})

gsap.from(".container",{
    duration:1,
    y:"100vh",
    ease: "back"
})
