const tl = gsap.timeline({defalt:{ease: 'power1.out'}})


tl.from(".bg01",{width: 0, duration:1.2, delay:0.1, ease: 'Expo.easeInOut'})
tl.from(".bg02",{width: 0, duration:1.2, delay:0.1, ease: 'Expo.easeInOut'})

tl.from(".socials",{y: "-150px", duration: 0.8});
tl.from(".links li",{x: "-250%", duration: 0.5, stagger: 0.25});


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