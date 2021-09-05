// 用 span 包住每個字母
const insertSpan = (selector) => {
    let dom = document.querySelector(selector)
    let text = dom.innerText
    let text2 = text.split("")
    let text3 = text2.map((i)=> i = `<span class="letter">${i}</span>`).join("")
    return text3
}

// console.log(insertSpan(".main_title"));
const mainTitle = document.querySelector('.main_title')
mainTitle.innerHTML = insertSpan(".main_title")

// 選取出陣列做操作 像是 ScrollTrigger
// let targets = gsap.utils.toArray(".letter");
// console.log(targets);


window.addEventListener('load', () => {
    const timeline = gsap.timeline({defalt:{duration: .8, ease: 'power1.out'}})
    const timeline2 = gsap.timeline({defalt:{duration: .8, ease: 'power1.out'}})


    timeline
        .from(".bg01",{width: 0, duration:1, delay:0.1, ease: 'Expo.easeInOut'})
        .from(".bg02",{width: 0, duration:1, delay:0.1, ease: 'Expo.easeInOut'})

        .from(".socials",{yPercent: -300, opacity: 0})
        .from(".strip",{yPercent: -300, duration: 1.2, stagger: 0.1}, '-=0.8')
        .from(".links li",{xPercent: -250, duration: 0.5, stagger: 0.25})

        .from(".ellipse_container",{opacity: 0, duration: 1.2})
        .from(".letter", {yPercent: -150, duration: 1.2, stagger: 0.125, opacity: 0, ease: 'Expo.easeInOut'})
        .from(".mun_title",{opacity: 0, translateY: "40px", duration: 0.4})

})






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

// timeline2
//     .to('.test',{scale: 1.25, transformOrigin: 'center'})
//     .to('.whole',{ y: 10, repeat: -1, yoyo: true})