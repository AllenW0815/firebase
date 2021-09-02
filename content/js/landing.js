const timeline = gsap.timeline({defalt:{ease: 'power1.out'}})


timeline
    .from(".bg01",{width: 0, duration:1.2, delay:0.1, ease: 'Expo.easeInOut'})
    .from(".bg02",{width: 0, duration:1.2, delay:0.1, ease: 'Expo.easeInOut'})

    .from(".socials",{yPercent: -300, duration: 0.8})
    .from(".strip",{yPercent: -300, duration: 1.2, stagger: 0.1}, 2.2)
    .from(".links li",{xPercent: -250, duration: 0.5, stagger: 0.25})

    .from(".ellipse_container",{opacity: 0, duration: 1.2})
    .from(".mun_title",{opacity: 0, translateY: "40px", duration: 0.4})




// TweenMax.from(".bg01", 1.6, {
//     delay: 0.2,
//     width: 0,
//     ease: Expo.easeInOut
// })
// TweenMax.from(".bg02", 1.6, {
//     delay: 0.2,
//     width: 0,
//     ease: Expo.easeInOut
// })