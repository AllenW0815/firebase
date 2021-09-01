const tl = gsap.timeline({defalt:{ease: 'power1.out'}})


tl.from(".bg01",{width: 0, duration:1.2, delay:0.1, ease: 'Expo.easeInOut'})
tl.from(".bg02",{width: 0, duration:1.2, delay:0.1, ease: 'Expo.easeInOut'})

tl.from(".socials",{yPercent: -300, duration: 0.8});
tl.from(".strip",{yPercent: -300, duration: 1.2, stagger: 0.1});
tl.from(".links li",{xPercent: -250, duration: 0.5, stagger: 0.25});

tl.from(".ellipse_container",{opacity: 0, duration: 1.2})
tl.from(".mun_title",{opacity: 0, translateY: "40px", duration: 0.4})




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