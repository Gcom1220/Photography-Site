// gsap.from(".image-right",{
//     duration:1,
//     x:"100vw",
//     stagger: 0.5
// })


// gsap.from(".image",{
//     duration:1,
//     x:"-100vw",
//     stagger: 0.5
// })

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

gsap.registerPlugin(ScrollTrigger);

gsap.from(".image-one-right", {
    scrollTrigger: {
      trigger: ".one",
      toggleActions: "restart none none none",
    },
    x: "100vw",
    duration: 1,
    stagger: 0.5,
  });
  
  gsap.from(".image-one", {
    scrollTrigger: {
      trigger: ".one",
      toggleActions: "restart none none none",
    },
    x: "-100vw",
    duration: 1,
    stagger: 0.5,
  });
  
  gsap.from(".image-two-right", {
    scrollTrigger: {
      trigger: ".two",
      toggleActions: "restart none none none",
    },
    x: "100vw",
    duration: 1,
    stagger: 0.5,
  });
  
  gsap.from(".image-two", {
      scrollTrigger: {
          trigger: '.two',
          toggleActions: 'restart none none none'
      },
      x: "-100vw",
      duration: 1,
      stagger: .5
  })
  
  gsap.from(".image-three-right", {
      scrollTrigger: {
          trigger: '.three',
          toggleActions: 'restart none none none'
      },
      x: "100vw",
      duration: 1,
      stagger: .5
  })
  
  gsap.from(".image-three", {
      scrollTrigger: {
          trigger: '.three',
          toggleActions: 'restart none none none'
      },
      x: "-100vw",
      duration: 1,
      stagger: .5
  })
  
  gsap.from(".image-four-right", {
      scrollTrigger: {
          trigger: '.four',
          toggleActions: 'restart none none none'
      },
      x: "100vw",
      duration: 1,
      stagger: .5
  })
  
  gsap.from(".image-four", {
      scrollTrigger: {
          trigger: '.four',
          toggleActions: 'restart none none none'
      },
      x: "-100vw",
      duration: 1,
      stagger: .5
  })
  
  // gsap.from(".intro-head", {
  //   scrollTrigger: {
  //     trigger: ".intro-head",
  //     toggleActions: "restart none none reset",
  //   },
  //   duration: 0.5,
  //   y: "100vh",
  // });
  
  // gsap.from(".intro", {
  //   scrollTrigger: {
  //     trigger: ".intro",
  //     toggleActions: "restart none none reset",
  //   },
  //   duration: 0.5,
  //   y: "100vh",
  //   delay: 0.5,
  // });
  
  // gsap.from(".intro-image", {
  //   scrollTrigger: {
  //     trigger: ".intro-image",
  //     toggleActions: "restart none none reset",
  //   },
  //   duration: 0.5,
  //   y: "100vh",
  //   delay: 1,
  // });
  
  // gsap.from(".container", {
  //   scrollTrigger: {
  //     trigger: ".container",
  //     toggleActions: "restart none none reset",
  //   },
  //   duration: 1,
  //   y: "100vh",
  //   ease: "back",
  // });
  